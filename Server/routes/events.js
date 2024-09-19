const router=require("express").Router();
const {auth}=require('../middleware/auth');
const {getAllEvents,createEvent}=require('../controllers/Events');

router.post("/events",auth,createEvent);

router.get("/getEvents",getAllEvents);

module.exports=router;

