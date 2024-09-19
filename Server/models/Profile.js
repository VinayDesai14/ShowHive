const mongoose=require('mongoose');

const ProfileSchema=new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    birthDate:{
        type: Date,
    },
    gender:{
        type : String,
        enum:["Male","Female","Others"]
    },
    maritalStatus:{
        type:String,
        enum: ["Single","Married"]
    },
    // language:{
    //     type:String,
    //     set:["English","Hindi","Marathi","Gujrati","Punjabi","Bhojpuri",
    //          "Bengali","Oriya","Telugu","Kannada","Malayalam","Tamil",
    //          "Urdu","Sindhi"]
    // }
})

module.exports = mongoose.model("Profile", ProfileSchema);