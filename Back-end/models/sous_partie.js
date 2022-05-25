const mongoose = require('mongoose');

const sous_partie = mongoose.Schema({
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
    }
});

//On définit un objet 'SousPartie' avec les caractéristiques qu'on a décrit juste avant
module.exports = mongoose.model('SousPartie', sous_partie);
