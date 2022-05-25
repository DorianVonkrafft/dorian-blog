const mongoose = require('mongoose');

const article = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    corpus: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    musique: {
        type: String,
        required: true
    }
});

//On définit un objet 'Musique' avec les caractéristiques qu'on a décrit juste avant
module.exports = mongoose.model('Article', article);
