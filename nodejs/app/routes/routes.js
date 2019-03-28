const express = require('express');
const router = express.Router();

router.post('/posts', (req, res, next)=>{
    res.send({
        message: "This Works !"
    })
})

module.exports =router;