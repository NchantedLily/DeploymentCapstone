const router = require('express').Router();
let LateNightBrewPlaces = require('../models/lateNightBrewPage');


router.route('/').get((req, res) => {
    LateNightBrewPlaces.find()
        .then(lateNightBrewPlaces => res.json(lateNightBrewPlaces))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const snippet = req.body.snippet;
    const imageURL = req.body.imageURL;
    const newLateNightBrewPlaces = new LateNightBrewPlaces({
        title,
        snippet,
        imageURL
    });

    newLateNightBrewPlaces.save()
        .then(() => res.json('Late Night Brew Places added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;