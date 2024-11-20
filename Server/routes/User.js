const express = require("express")
const router = express.Router()


const {
  SignUp,
  sendotp
} = require("../controllers/Auth");
const{
  getUserAllSales,
  getUserBookedTickets
}=require('../controllers/MyEvent');

const { auth  } = require("../middleware/auth")

router.post("/signup", SignUp)
router.post("/sendotp", sendotp)
router.post('/mySales',auth,getUserAllSales);
router.get('/bookedTickets',auth,getUserBookedTickets)
module.exports = router;


