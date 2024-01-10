const router=require("express").Router();
const { REFUSED } = require("dns");
const post=require("../model/Post");
const User = require("../model/User");

//create post request
router.post("/" , async (req,res) =>{
    const newPost=new post(req.body);
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }catch(err){
        res.status(500).json(err);
    }
});
//update post request
router.put("/:id" , async(req,res) =>{
    try{
    const updatepost=await post.findById(req.params.id);
        if(updatepost.userId === req.body.userId){
          await updatepost.updateOne({$set:req.body});
          res.status(200).json("the post has been updated")
        }else{
           res.status(403).json("you can update only your post");
        }
    }catch(err){
         res.status(500).json(err)
    }
})
//delete post request
router.delete("/:id" , async(req,res) =>{
    try{
        const deletepost=await post.findById(req.params.id);
            if(deletepost.userId === req.body.userId){
              await deletepost.deleteOne();
              res.status(200).json("the post has been deleted")
            }else{
               res.status(403).json("you can delete only your post");
            }
        }catch(err){
             res.status(500).json(err)
        }
})
//like a post
router.put("/:id/like" , async(req,res) =>{
     try{
      const likedPost=await post.findById(req.params.id);
      if(!likedPost.likes.includes(req.body.userId)){
        await likedPost.updateOne({$push: {likes:req.body.userId}})
        res.status(200).json("the post has been liked")
      }else{
        await likedPost.updateOne({$pull:{likes:req.body.userId}})
        res.status(200).json("the post has been disliked")
      }

     }catch(err){
        res.status(500).json(err);
     }
})
//get a posts

router.get("/:id" , async(req,res) =>{
    try{
      const getPosts=await post.findById(req.params.id);
      res.status(200).json(getPosts);
    }catch(err){
        res.status(500).json(err)
    }
})
//get timeline posts
router.get("/timeline/:userId" , async(req,res) =>{ 
    try{
        const currentUser=await User.findById(req.params.userId);
        const userPosts=await post.findById({userId:currentUser._id});
        const friendPosta=await Promise.all(
            currentUser.followings.map((friend) =>{
                return post.find({userId:friend});
            })
        )
    }catch(err){
        res.status(500).json(err);
    }
})




module.exports=router;