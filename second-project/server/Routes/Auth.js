const router=require("express").Router();
const User=require("../model/User");
const bcrypt = require('bcrypt');




//Registration
router.post("/register",async (req,res)=>{ 
    try{
        const salt =await bcrypt.genSalt(10);
        const hash =await bcrypt.hash(req.body.password, salt);
       
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
          console.log(err);
    }
    
})



//Login
router.post("/login", async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        !user && res.status(404).json("user not found"); 
        
        const validPassword=await bcrypt.compare(req.body.password,user.password);
        !validPassword && res.status(400).json("wrong password")

      res.status(200).json(user);

    }catch(err){
        console.log(err);
    }
   
})

module.exports=router;