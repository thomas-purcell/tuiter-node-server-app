import mongoose from 'mongoose';

const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  replies: Number,
  retuits: Number,
  dislikes: Number,
  disliked: Boolean,
  title: String,
  time: String,
  handle: String,
  username: String,
  image: String,
  topic: String
}, {collection: 'tuits'});

export default schema;