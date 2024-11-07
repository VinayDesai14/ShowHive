const eventDetails=require('../models/EventDetails');
const User= require('../models/User');

exports.getUserAllSales=async (req,res)=>{

    try {
       const {organiserId}=req.body;

       const organiserEvents=await eventDetails.find({organiser:organiserId});
    //     let totalGeneralTicketSold=0,totalVipTicketSold=0,totalAmount=0;
    //    for(let i=0;i<organiserEvents.length;i++){
    //     totalGeneralTicketSold+=organiserEvents[i].generalTicketsSold;
    //     totalVipTicketSold+=organiserEvents[i].vipTicketsSold;
    //    }

    return res.status(200).json({
        success:true,
        organiserEvents,
        message:'Successfully fetched all the events of the organiser'
    })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'something went wrong while fetching the events of the organiser'
        });
    }
}

exports.getUserBookedTickets=async (req,res)=>{

    try {
       const {userId}=req.body;
        // console.log('user id ',userId);
       const userBookedTickets=await User.findById(userId).populate({
        path: 'purchasedTickets.eventId',
        model: 'eventDetails'
    })
    .exec();

    return res.status(200).json({
        success:true,
        userBookedTickets,
        message:'Successfully fetched all the booked tickets of the user'
    })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'something went wrong while fetching the booked tickets of the user'
        });
    }
}