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
        enum:["Male","Female","Others",""]
    },
    maritalStatus:{
        type:String,
    }
})

module.exports = mongoose.model("Profile", ProfileSchema);