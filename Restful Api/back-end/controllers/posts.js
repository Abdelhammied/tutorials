const PostsModel = require('../models/posts');
exports.index = (req ,res, next) => {
    PostsModel.find().then(allPosts => {
        res.status(200).json(allPosts)
    })
}

exports.newPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    PostsModel.create({
        title: title, 
        content: content
    }).then(data => {
        res.status(201).json('created');
    }).catch(err =>{ 
        res.status(201).json('error');
    });
    
}