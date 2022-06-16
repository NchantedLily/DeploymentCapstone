const router = require('express').Router();
let Attractions = require('../models/attractionsPage');

router.route('/').get((req, res) => {
    Attraction.find()
        .then(attraction => res.json(attraction))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageURL = req.body.imageURL;

    const newAttraction = new Attraction({
        title, 
        description, 
        imageURL
    });

    newAttraction.save()
        .then(() => res.json('Attraction added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;