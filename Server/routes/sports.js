const router=require("express").Router();
const {getAllSports}=require('../controllers/Sports');

// router.post("/sports",auth,sports);

router.get("/getSports",getAllSports);

module.exports=router;