const express = require("express")
const router = express.Router()


const {
  SignUp,
  sendotp
} = require("../controllers/Auth");

router.post("/signup", SignUp)
router.post("/sendotp", sendotp)
module.exports = router


