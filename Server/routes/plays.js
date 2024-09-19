const router=require("express").Router();
const {getAllPlays}=require('../controllers/Plays');

// router.post("/plays",auth,plays);

router.get("/getPlays",getAllPlays);

module.exports=router;