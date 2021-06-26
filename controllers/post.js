const Post = require('../models/post');

exports.getPosts = (req, resp) => {
    const posts = Post.find().select("_id title body") //Select selects the info wanted from the DB
    .then((posts) => {
        resp/*.status(200)*/.json({
            posts: posts
        });
    })
    .catch(err => console.log(err));
};

exports.getMusic = (req, resp) => {
    resp.json({
        songs: [
            {
                band: "Arctic Moneys",
                track: "I bet you look good on the dancefloor"
            },

            {
                band: "Franz Ferdinand",
                track: "Take Me Out"
            }
        ]
    })
};

exports.createPost = (req, resp) => {
    const post = new Post(req.body);

    post.save()
    .then(result => {
        resp.status(200).json({
            post: result
        })
    });
    /*
    console.log("CREATING POST: ", req.body);

    post.save((err, result, next) => {
        if(err){
            console.log("Error: ", err);
            return resp.status(400).json({
                error: err
            });
        }
        resp.status(200).json({
            post: result
        });
    });*/
};