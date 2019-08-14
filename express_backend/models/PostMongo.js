//setup mongoose
const mongoose = require("mongoose");
// define a schema for mongoose model
const postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  author: String,
  date: String,
  category: String,
  posttext: String
});

const Post = mongoose.model("Post", postSchema);

const initPost = request => {
  return {
    _id: mongoose.Types.ObjectId(),
    title: request.body.title,
    author: request.body.author,
    date: new Date().toLocaleString(),
    category: request.body.category ? request.body.category : "general",
    posttext: request.body.posttext
  };
};

exports.Post = Post;
exports.initPost = initPost;
