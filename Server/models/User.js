const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({

    email:{
        type:String,
        required:true,
        max:50
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:50
    },
    profileDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
        required:true,
    },
    image:{
        type:String,
    }
})

module.exports = mongoose.model("User", userSchema);