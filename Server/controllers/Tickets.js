const User=require('../models/User')

exports.getUserTickets= async (req,res)=>{

    try {
        const {userId}=req.body;

        const userTickets=await User.findById(userId).populate("eventDetails").exec;

        return res.status(200).json({
            success:true,
            userTickets,
            message:'Successfully fetched user Tickets'
        })
    } catch (error) {
        return res.status(500).json({
			success: false,
			message: "Something went wrong while fetching the user tickets",
		});
    }
}