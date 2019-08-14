const Post = require("../models/PostMongo").Post;
const initPost = require("../models/PostMongo").initPost;

exports.create_post = (request, response, next) => {
  if (!request.body.title || !request.body.author || !request.body.posttext) {
    response
      .status(400)
      .json({ error: "posts must have title, name and posttext" });
  } else {
    const newpost = new Post(initPost(request));
    newpost
      .save()
      .then(doc => response.json({ msg: "new post added", doc }))
      .catch(err => response.status(400).json({ error: err }));
  }
};
exports.get_all_posts = (request, response, next) => {
  Post.find({})
    .sort({ date: -1 })
    .exec()
    .then(doc => response.json(doc))
    .catch(err => response.status(400).json({ error: err }));
};

exports.get_post_by_id = (request, response, next) => {
  Post.findById(request.params.id)
    .exec()
    .then(doc => response.json(doc))
    .catch(err => response.status(400).json({ error: err }));
};

exports.update_post = (request, response, next) => {
  Post.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
    useFindAndModify: false
  })
    .exec()
    .then(doc => response.json({ msg: "post updated", doc }))
    .catch(err => response.status(400).json({ error: err }));
};

exports.delete_post = (request, response, next) => {
  Post.findByIdAndDelete(request.params.id, { useFindAndModify: false })
    .exec()
    .then(doc => response.json({ msg: "deleted post", doc }))
    .catch(err => response.status(400).json({ error: err }));
};
