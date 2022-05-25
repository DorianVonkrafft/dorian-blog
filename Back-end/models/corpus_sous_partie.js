const mongoose = require('mongoose');

const corpus = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    texte: {
        type: String,
        required: true
    }
});

//On définit un objet 'Corpus' avec les caractéristiques qu'on a décrit juste avant
module.exports = mongoose.model('Corpus', corpus);
