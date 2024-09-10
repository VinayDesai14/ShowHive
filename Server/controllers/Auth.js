const User= require('../models/User');
const Profile=require('../models/Profile');


exports.SignUp= async (req,res)=>{

    try {
        const {email}=req.body;

        if(!email){
            return res.status(403).json({
                success:false,
                message:'All Feilds are required'
            })
        }

        const response = await OTP.find({ email });
		console.log(response);
		if (response.length === 0) {
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
		} else if (otp !== response[0].otp) {
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
		}

		const isUserPresent = await User.find({email:email});

		if(isUserPresent){
			return res.status(200).json({
				success: true,
				isUserPresent,
				message: "User is already registered ",
			})
		}

		const profileDetails = await Profile.create({
			firstName: null,
			lastName:null,
			birthDate: null,
			gender: null,
			maritalStatus: null,
			language:null
		});
		const user = await User.create({
			email,
			profileDetails: profileDetails._id,
			image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}&${lastName}`,
		});

		return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully",
		});

    } catch (error) {
        return res.status(500).json({
			success: false,
			message: "Something went wrong while signing up the user",
		});
    }
}
