const Blog = require("./blog_model");

Blog.sync();

module.exports = { Blog };
