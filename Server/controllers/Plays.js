const eventDetails=require('../models/EventDetails');


exports.getAllPlays= async (req,res)=>{

    try {
        
        const getAllEvents=eventDetails.find({type:"Plays"});

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