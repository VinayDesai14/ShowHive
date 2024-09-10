const router=require("express").Router();

router.post("/sports",auth,sports);

router.get("/getSports",getSports);

module.exports=router;