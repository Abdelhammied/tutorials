const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostsSchema = new Schema({

    title: {
        type: String, 
        required: true, 
        maxlength: 255
    }, 

    content: {
        type: String, 
        required: true, 
    }, 

    image: {
        type: String, 
    } ,
    
    registeredAt: { type: Date, index: true }

});

module.exports = mongoose.model('Posts', PostsSchema)