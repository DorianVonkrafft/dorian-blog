const mongoose = require('mongoose');

const calendrier = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date_concert: {
        type: Date,
        required: true
    },
    lieu: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    lien_facebook: {
        type: String,
        required: true
    }
});

//On définit un objet 'Calendrier' avec les caractéristiques qu'on a décrit juste avant
module.exports = mongoose.model('Calendrier', calendrier);
