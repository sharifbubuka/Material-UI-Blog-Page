// Module imports
const express = require('express')
const router = express.Router()

// Controller imports
const blogpostsControllers = require('../controllers/BlogpostController')

// Routes
router.get('/', blogpostsControllers.getAllBlogposts)

// Routes exports 
module.exports = router