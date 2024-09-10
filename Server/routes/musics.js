const router=require("express").Router();

router.post("/musics",auth,musics);

router.get("/getMusics",getMusics);

module.exports=router;