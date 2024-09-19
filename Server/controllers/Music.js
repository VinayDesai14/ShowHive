const eventDetails=require('../models/EventDetails');


exports.getAllMusicShows= async (req,res)=>{

    try {
        
        const getAllEvents=eventDetails.find({type:"Music"});

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

exports.createMusicShow= async(req,res)=>{

    try {
        const {imageUrl,date,location,title,price,
            duration,language,artist,type,category}=req.body;
        
            console.log('Request body: ', req.body);

        console.log('imageUrl ',imageUrl);
        console.log('date ',date);
        if(!imageUrl || !date || !location || !title || !price ||
           !duration || !language || !artist || !type || !category 
        ){
            return res.status(403).json({
                success:false,
                message:'All feilds are required bolte'
            });
        }

        const response= await eventDetails.create({imageUrl,date,location,title,
                                                   price,duration,language,artist,type,category});
        
        return res.status(200).json({
            success:true,
            data:response,
            message:'Event Created successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success:true,
            data:response,
            message:'something went wrong while creating Event'
        });
    }
}