const mongoose = require('mongoose');

const partie = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sous_partie: {
        type: String,
        required: true
    }
});

//On définit un objet 'Partie' avec les caractéristiques qu'on a décrit juste avant
module.exports = mongoose.model('Partie', partie);
