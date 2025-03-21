const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;
    // create a commen object
    const comment = new Comment({
      post,
      user,
      body,
    });

    // save the comment into the db
    const savedComment = await comment.save(); 

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } }, 
      { new: true  }
    )
      .populate("comments")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(500).json({
      error: 'Error while creating comment',
    });
  }
};
