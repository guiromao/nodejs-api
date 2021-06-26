exports.createPostValidator = (req, resp, next) => {
    req.check('band', "Write a band name").notEmpty();
    req.check("band", "Band name must have at least 3 letters").isLength({
        min: 3, 
        max: 150
    });

    req.check('track', "Write a track name").notEmpty();
    req.check("track", "Track name must have at least 3 letters").isLength({
        min: 3, 
        max: 2000
    });

    //check for errors
    const errors = req.validationErrors();

    if(errors){
        const firstError = errors.map((error) => error.msg)[0];

        return resp.status(400).json({
            error: firstError
        });
    }

    next();
}