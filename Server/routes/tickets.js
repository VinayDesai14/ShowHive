const {getUserTickets}=require('../controllers/Tickets');
const router=require("express").Router();
const {auth}=require('../middleware/auth');


router.post("/getAllUserTickets",auth,getUserTickets);


module.exports=router;
