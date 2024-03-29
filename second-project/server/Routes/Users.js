const router=require("express").Router();
const User=require("../model/User");
const bcrypt = require('bcrypt');

//Update User
router.put("/:id" , async(req,res) =>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt =await bcrypt.genSalt(10);
                req.body.password =await bcrypt.hash(req.body.password, salt);
            }catch(err){
                return res.status(500).json(err)
            }
        }
        try{
            await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            });
            res.status(200).json("Account has been updated")
        }catch (err){
            return res.status(500).json(err)

        }

    }else{
        return res.status(403).json("You can update only your account");
    }

})
//delete user
router.delete("/:id" , async(req,res) =>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            await User.findByIdAndDelete({_id:req.params.id})  
            res.status(200).json("Account has been deleted")

        }catch (err){
            return res.status(500).json(err)
        }

    }else{
        return res.status(403).json("You can delete only your account");
    }
})

//getting user
router.get("/:id" , async (req,res) =>{
    try{
        const user=await User.findById(req.params.id);
        const {password,updatedAt,...others} = user._doc;
        res.status(200).json(others);

    }catch(err){
        return res.status(500).json(err)
    }
})

//Follow user
router.put("/:id/follow",async(req,res) =>{
    if(req.body.userId !== req.params.id){
        try{

            const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if(!user.followers.includes(req.body.userId)){
           await user.updateOne({$push: {followers:req.body.userId}})
           await currentUser.updateOne({$push: {followings:req.params.id}})
         res.status(200).json("user has been followed")
        }else{
            return res.status(403).json("user already follows this account")
        }
        }catch(err){
            return res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can't follow the same account");
    }
})
//unfollow user
router.put("/:id/unfollow",async(req,res) =>{
    if(req.body.userId !== req.params.id){
        try{
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if(!user.followers.includes(req.body.userId)){
           await user.updateOne({$pull: {followers:req.body.userId}})
           await currentUser.updateOne({$pull: {followings:req.params.id}})
         res.status(200).json("user has been unfollowed")
        }else{
            return res.status(403).json("you don't follow this account")
        }
        }catch(err){
            return res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can't unfollow the same account");
    }
})


module.exports=router;