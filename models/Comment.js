const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Assuming blogPostSchema is defined in BlogPost.js and exported
const BlogPost = require('./BlogPost'); // Adjust the path as necessary

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  blogPost: {
    type: Schema.Types.ObjectId,
    ref: 'BlogPost', // Make sure this matches the model name in BlogPost.js
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
