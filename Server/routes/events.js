const router=require("express").Router();
const {auth}=require('../middleware/auth');
const {getAllEvents,createEvent,getEventDetails}=require('../controllers/Events');

router.post("/events",auth,createEvent);

router.get("/getEvents",getAllEvents);

router.post("/getEventDetails",getEventDetails);
module.exports=router;

