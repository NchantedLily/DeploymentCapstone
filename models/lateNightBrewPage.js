const Mongoose = require('mongoose');


const Schema = Mongoose.Schema;


const lateNightBrewSchema = new Schema({
    title: {
        name: String,
    },
    description: {
        type: String,
        },
        imageURL: {
        type: String,
        }
        });

    const LateNightBrew = Mongoose.model('LateNightBrew', lateNightBrewSchema);

    module.exports = LateNightBrew;