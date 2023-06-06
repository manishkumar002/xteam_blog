const mongoose = require('mongoose');
const blogSchema =new mongoose.Schema({
    "post_title":String,
    "post_content":String,
    "meta_title":String,
    "meta_description":String,
    "meta_keywords":String,
    "created_date":String,
    "updated_date":String,

})

module.exports = mongoose.model('blog',blogSchema)