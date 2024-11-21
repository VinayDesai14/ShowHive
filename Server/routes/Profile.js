const express = require("express")
const router = express.Router()
const { auth } = require("../middleware/auth")
const {
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
} = require("../controllers/Profile")


router.put("/profile/updateProfile", auth, updateProfile)
router.post("/profile/getUserDetails", auth, getAllUserDetails)
router.put("/profile/updateDisplayPicture", auth, updateDisplayPicture) 
module.exports = router