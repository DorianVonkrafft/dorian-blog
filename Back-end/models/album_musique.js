const mongoose = require('mongoose');
const Musique = require(__dirname +'/musique.js').schema;


const album = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    musiques: {
        type: String,
        required: true
    }
});

//On définit un objet 'Musique' avec les caractéristiques qu'on a décrit juste avant
module.exports = mongoose.model('AlbumMusique', album);
