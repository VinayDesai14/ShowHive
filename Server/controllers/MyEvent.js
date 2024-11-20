const eventDetails=require('../models/EventDetails');
const User= require('../models/User');
const mongoose=require('mongoose');
exports.getUserAllSales=async (req,res)=>{

    try {
       const {id}=req.body;
    //    console.log('req body sales ',req.body)
    //    console.log('organiser id ',id)
    const organiserEvents = await eventDetails.find({ organiser: id });
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
        console.log('error ',error);
        return res.status(500).json({
            success:false,
            message:'something went wrong while fetching the events of the organiser'
        });
    }
}

exports.getUserBookedTickets=async (req,res)=>{

    try {
       const {id}=req.body;
    //    console.log('req body ',req.body)
    //     console.log('user id ',id);
       const userBookedTickets=await User.findById(id).populate({
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
        console.log('error ',error);
        return res.status(500).json({
            success:false,
            message:'something went wrong while fetching the booked tickets of the user'
        });
    }
}