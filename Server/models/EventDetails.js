const mongoose=require('mongoose');

const eventDetailsSchema=new mongoose.Schema({
     organiser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
     imageUrl:{
        type:String,
        required:true,
     },
     dateAndTime:{
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
     category:{
      type:String,
      required:true,
      enum:["Events","Music","Plays","Sports"]
     },
     type:{
      type:String,
      required:true
     },
     generalSeats:{
      type:String,
      required:true
     },
     vipSeats:{
      type:String,
      required:true
     },
     generalSeatPrice:{
      type:String,
      required:true
     },
     vipSeatPrice:{
      type:String,
      required:true
     },
     generalTicketsSold:{
      type: Number,
      default: 0
     },
     vipTicketsSold:{
      type:Number,
      default: 0
     },
     userEnrolled: [
        {
           type: mongoose.Schema.Types.ObjectId,
           required: true,
           ref: "User",
        },
     ]
});

module.exports = mongoose.model("eventDetails", eventDetailsSchema);