const router = require('express').Router();
let Food = require('../models/foodPage');

router.route('/').get((req, res) => {
    Food.find()
        .then(food => res.json(food))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageURL = req.body.imageURL;

    const newFood = new Food({
        title, 
        description, 
        imageURL
    });

    newFood.save()
        .then(() => res.json('Food added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;