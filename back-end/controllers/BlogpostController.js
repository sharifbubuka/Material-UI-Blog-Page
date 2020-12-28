// Module imports

// Model(s) imports
const Blogpost = require('../models/BlogpostModel')

// Controllers
const Blogposts = {
  // Handle errors efficiently with Next
  getAllBlogposts: (req, res, next) => {
    Blogpost.find()
    .then(blogposts => {
      res.json({
        code: 'DATA',
        status: 'SUCCESS',
        message: 'Database query ***RETURN ALL BLOG POSTS*** succeeded.',
        data: blogposts
      })
    })
    .catch(error => {
      res.json({
        code: 'ERROR',
        status: 'FAILED',
        message: 'Database query ***RETURN ALL BLOG POSTS*** failed.',
        error: error
      })
    })
  }
}

// Controllers exports
module.exports = Blogposts