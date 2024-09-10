const express=require('express');

const app=express();
require('dotenv').config();
const database=require('./config/database');

const Port=process.env.PORT || 3000;

database.connect();

app.listen(Port,()=>{
    console.log(`App is running at port ${Port}`);
})