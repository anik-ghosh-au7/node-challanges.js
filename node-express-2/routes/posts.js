const express = require('express');
const router = express.Router();
const Post = require('../models/Post');



// Routes
router.get('/', (req, res) => {
    res.send('we are on posts');
});

router.get('/specific', (req, res) => {
        res.send('specific post');
    });

router.post('/', (req, res)=>{
     const post = new Post({
         title: req.body.title,
         description: req.body.description
     });

     post.save()
     .then(data => {
         res.json(data);
     })
     .catch(err => {
        //  res.status(200);
        res.json({message: err});
     })
})

module.exports = router;