const router=require("express").Router();
const {getAllMusicShows}=require('../controllers/Music');
// router.post("/music",auth,music);

router.get("/getMusic",getAllMusicShows);

module.exports=router;