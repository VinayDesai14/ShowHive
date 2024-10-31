const eventDetails=require('../models/EventDetails');
const { uploadImageToCloudinary } = require("../utils/imageUploader")

exports.getAllEvents= async (req,res)=>{

    try {
        const fetchedType=req.query.type;
        if(fetchedType){
            const getAllEvents=await eventDetails.find({category:"Events",type:fetchedType});
            return res.status(200).json({
                success:true,
                getAllEvents,
                message:'Successfully fetched all the events'
            });
        }
        const getAllEvents=await eventDetails.find({category:"Events"});

        return res.status(200).json({
            success:true,
            getAllEvents,
            message:'Successfully fetched all the events'
        })

    } catch (error) {
        return res.status(500).json({
			success: false,
			message: "Something went wrong while signing up the user",
		});
    }
}

exports.createEvent= async(req,res)=>{

    try {
        const {date,location,title,generalSeatPrice,vipSeatPrice,
            duration,language,artist,type,category,generalSeats,vipSeats}=req.body;
            const image = req.files.image;
            console.log('Request body: ', req.body);

        // console.log('imageUrl ',image);
        // console.log('date ',date);
        // console.log('image ', image);
        if(!image || !date || !location || !title || !generalSeatPrice || !vipSeatPrice ||
           !duration || !language || !artist || !type || !category || !generalSeats || !vipSeats
        ){
            return res.status(403).json({
                success:false,
                message:'All feilds are required bolte'
            });
        }
        const imageUrl=await uploadImageToCloudinary(
            image,
            process.env.FOLDER_NAME
          )
        const response= await eventDetails.create({imageUrl:imageUrl.secure_url,date,location,title,vipSeatPrice,
            generalSeatPrice,duration,language,artist,type,category,vipSeats,generalSeats});
        
        return res.status(200).json({
            success:true,
            data:response,
            message:'Event Created successfully'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:true,
            message:'something went wrong while creating Event'
        });
    }
}

exports.getEventDetails= async (req,res)=>{
   try {
        const {id}=req.body;
        const reqEventDetails=await eventDetails.findById(id);

        return res.status(200).json({
            success:true,
            reqEventDetails,
            message:'Succesfully fetched event details'
        })
   } catch (error) {
    return res.status(500).json({
        success: false,
        message: "Something went wrong while fetching the event details",
    });
   }
}