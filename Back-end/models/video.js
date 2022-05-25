const mongoose = require('mongoose');

const video = mongoose.Schema({
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
    },
    image: {
        type: String,
        required: true
    }
});

//On définit un objet 'Video' avec les caractéristiques qu'on a décrit juste avant
module.exports = mongoose.model('Video', video);
