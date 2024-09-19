const express=require('express');
const cors = require("cors");
const app=express();
const userRoutes = require("./routes/User");
const eventsRoutes = require("./routes/events");
const musicRoutes = require("./routes/music");
const sportsRoutes = require("./routes/sports");
const playsRoutes = require("./routes/plays");
const fileUpload = require("express-fileupload");
const profileRoutes=require("./routes/Profile");
require('dotenv').config();
const database=require('./config/database');
const {cloudinaryConnect}=require('./config/cloudinary');
const Port=process.env.PORT || 3000;

database.connect();
cloudinaryConnect();
app.use(express.json());
app.use(cors());	
app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)

app.use("/api/v1", userRoutes);
app.use("/api/v1", eventsRoutes);
// app.use("/api/v1", musicRoutes);
// app.use("/api/v1", sportsRoutes);
// app.use("/api/v1", playsRoutes);
app.use("/api/v1",profileRoutes);

app.listen(Port,()=>{
    console.log(`App is running at port ${Port}`);
})