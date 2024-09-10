const mongoose=require('mongoose');

const eventDetailsSchema=new mongoose.Schema({
     imageUrl:{
        type:String,
        required:true,
     },
     date:{
        type: Date,
        required:true
     },
     location:{
        type:String,
        required:true,
     },
     title:{
        type:String,
        required:true
     },
     price:{
        type:String,
        required:true
     },
     duration:{
        type:String,
        required:true,
     },
     language:{
        type:String,
        required:true,
     },
     artist:{
        type:String,
        required:true
     },
});

module.exports = mongoose.model("eventDetails", eventDetailsSchema);