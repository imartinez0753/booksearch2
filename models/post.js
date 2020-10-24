const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  descript: {type: String, required: false },
  pic: {type: String, required: false},
  id: {type: String, required: true}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
