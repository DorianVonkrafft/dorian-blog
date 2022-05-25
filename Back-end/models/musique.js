const mongoose = require('mongoose');

const music = mongoose.Schema({
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
        type: String, //ID de l'image qui se trouve dans la bdd
        required: true
    }
});

//On définit un objet 'Musique' avec les caractéristiques qu'on a décrit juste avant
module.exports = mongoose.model('Musique', music);
