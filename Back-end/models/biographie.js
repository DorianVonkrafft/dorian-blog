const mongoose = require('mongoose');

const bio = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    nom_article: {
        type: String,
        required: true
    },
    detail_biographie: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

//On définit un objet 'Musique' avec les caractéristiques qu'on a décrit juste avant
module.exports = mongoose.model('Biographie', bio);
