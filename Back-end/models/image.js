const mongoose = require('mongoose');

const image = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    }
});

//On définit un objet 'Image' avec les caractéristiques qu'on a décrit juste avant
module.exports = mongoose.model('Image', image);
