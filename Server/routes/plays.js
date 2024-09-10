const router=require("express").Router();

router.post("/plays",auth,plays);

router.get("/getPlays",getPlays);

module.exports=router;