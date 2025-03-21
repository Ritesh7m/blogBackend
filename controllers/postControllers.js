const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    // create a post object
    const post = new Post({
      title,
      body,
    });
    // save the post into the db
    const savedPost = await post.save();

    res.json({
      post: savedPost,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Error while creating post",
    });
  }
};

exports.getAllPosts = async (req, res) => {

    try{
        const posts =await Post.find().populate("comments").exec();
        res.json({
            posts,
          });

    }
    catch(err){
        return res.status(500).json({
            error: "Error while fetching posts",
          });
    }
}