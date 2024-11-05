const {instance} = require("../config/razorpay");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const { default: mongoose } = require("mongoose");
const {ticketConfirmationTemplate}=require('../mailTemplate/ticketConfirmationEmail');
const {paymentSuccessEmail}=require('../mailTemplate/paymentSuccessEmail');
const crypto = require("crypto");
const EventDetails = require("../models/EventDetails");
const QRCode = require('qrcode');
const { v4: uuidv4 } = require('uuid');
const { uploadImageToCloudinary } = require("../utils/imageUploader")
const ticketId = uuidv4(); // Generates a unique ticket ID

//Generating QR CODE
async function generateQRCodeURL(eventId, userId) {
    const ticketId = uuidv4(); // Generate unique ticket ID
    const ticketData = JSON.stringify({ eventId, userId, ticketId });
    
    // Generate QR code as a data URL
    const QRCodeURL = await QRCode.toDataURL(ticketData);
    return QRCodeURL;
}
//initiate the razorpay order
exports.capturePayment = async(req, res) => {

    const {eventId,totalAmount} = req.body;

    const event =await EventDetails.findById(eventId);


    // let totalAmount = parseInt(event.generalSeatPrice)*genCnt+parseInt(event.vipSeatPrice)*vipCnt;

    const currency = "INR";
    const options = {
        amount: totalAmount * 100,
        currency,
        receipt: Math.random(Date.now()).toString(),
    }

    try{
        const paymentResponse = await instance.orders.create(options);
        res.json({
            success:true,
            message:paymentResponse,
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({success:false, mesage:"Could not Initiate Order"});
    }

}


//verify the payment
exports.verifyPayment = async(req, res) => {
    const razorpay_order_id = req.body?.razorpay_order_id;
    const razorpay_payment_id = req.body?.razorpay_payment_id;
    const razorpay_signature = req.body?.razorpay_signature;
    const event = req.body?.event;
    const userId = req.user.id;

    if(!razorpay_order_id ||
        !razorpay_payment_id ||
        !razorpay_signature || !event || !userId) {
            return res.status(200).json({success:false, message:"Payment Failed"});
    }

    let body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(body.toString())
        .digest("hex");

        if(expectedSignature === razorpay_signature) {
            //enroll karwao student ko
            await addTicketsinUser(event, userId, res);
            //return res
            return res.status(200).json({success:true, message:"Payment Verified"});
        }
        return res.status(200).json({success:"false", message:"Payment Failed"});

}


const addTicketsinUser = async(eventId,userId) => {

    if(!eventId || !userId) {
        return res.status(400).json({success:false,message:"Please Provide data for Courses or UserId"});
    }
        try{
            //find the course and enroll the student in it
        const userDetails = await User.findOneAndUpdate(
            {_id:userId},
            {$push:{eventDetails:eventId}},
            {new:true},
        )

        if(!userDetails) {
            return res.status(500).json({success:false,message:"Course not Found"});
        }
        const enrolledEvent=await EventDetails.findByIdAndUpdate(eventId,
            {$push:{
                userEnrolled: userId,
            }},{new:true});

            const QRCodeURL = await generateQRCodeURL(eventId, userId);
            const QRCodeImageUrl=await uploadImageToCloudinary(
                QRCodeURL,
                process.env.FOLDER_NAME
              );
        ///User ko mail send kardo
        // console.log('QR CODE URL-> ',QRCodeURL)
        // console.log('split method-> ', `data:image/png;base64,${QRCodeURL.split(',')[1]}`)
       
        const emailResponse = await mailSender(
            userDetails.email,
            `Successfully Purchased ticket of  ${enrolledEvent.title}`,
            ticketConfirmationTemplate(enrolledEvent.title,enrolledEvent.date,enrolledEvent.location,QRCodeImageUrl.secure_url)
        )    
        console.log("Email Sent Successfully", emailResponse.response);
        }
        catch(error) {
            console.log(error);
            return res.status(500).json({success:false, message:error.message});
        }
    

}

exports.sendPaymentSuccessEmail = async(req, res) => {
    const {orderId, paymentId, amount} = req.body;

    const userId = req.user.id;

    if(!orderId || !paymentId || !amount || !userId) {
        return res.status(400).json({success:false, message:"Please provide all the fields"});
    }

    try{
        //student ko dhundo
        const enrolledUser = await User.findById(userId).exec();
        // const userProfile = await Profile.findById(enrolledUser.profileDetails)
        await mailSender(
            enrolledUser.email,
            `Payment Recieved`,
             paymentSuccessEmail(`${enrolledUser.profileDetails.firstName}`,
             amount/100,orderId, paymentId)
        )
    }
    catch(error) {
        console.log("error in sending mail", error)
        return res.status(500).json({success:false, message:"Could not send email"})
    }
}
