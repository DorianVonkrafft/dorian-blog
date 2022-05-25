const mongoose = require('mongoose');
const Video = require(__dirname +'/video.js').schema;


const play = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    videos: {
        type: String,
        required: true
    }
});

//On définit un objet 'Musique' avec les caractéristiques qu'on a décrit juste avant
module.exports = mongoose.model('PlaylistVideo', play);
