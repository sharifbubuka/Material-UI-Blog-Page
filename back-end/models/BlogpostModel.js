// Module imports
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema creation
const BlogpostSchema = new Schema({
    // title, avatar, author, dateOfCreated, dateModified, topics, bookmarked
    header: {
      title: { type: String },
      subtitle: { type: String },
      description: { type: String },
      image: { 
        src: { type: String }
      }
    },
    body: [{
      subheader: {  type: String },
      paragraphs: [{
        text: { type: String }
      }],
      images: [{
        src: { type: String },
        height: { type: String },
        width: { type: String },
        position: { type: String }
      }]
    }],
    author: {
        name: { type: String },
        avatar: { type: String },
        author_id: { type: String }
    },
    dateCreated: { type: Date },
    dateModified: { type: Date },
    bookmarked: { type: Boolean }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: 'blogposts'
})

// Create Model
const PostModel = mongoose.model('Blogpost', BlogpostSchema)

//  Model export
module.exports = PostModel