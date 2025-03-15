const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
  try {
    const {post , user} = req.body;
    // create a like object
    const like =new Like({
        post,
        user,
    });
    // save the like into the db
    const savedLike = await like.save();
    const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true}).populate("likes").exec();
    res.json({
        post:updatedPost,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Error while liking post",
    });
  }
};


// unlike post

exports.unlikePost = async (req, res) => {
    try{
        const {post, like} = req.body;
        // delete the like from the db
        const deletedLike = await Like.findOneAndDelete({post, _id:like});

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true}).populate("likes").exec();
        res.json({
            post:updatedPost,
        });


    }
    catch(err){
        return res.status(500).json({
            error: "Error while unliking post",
          });
    }
}