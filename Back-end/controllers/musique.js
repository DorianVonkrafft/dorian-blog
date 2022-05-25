const Musique = require('../models/musique.js');
const Image = require('../models/image.js');
const fs = require('fs');

exports.createMusique = (req, res) => {
    const music = new Musique(req.body);
    if (req.file){
        music.file = req.file.path.replace('\\', '\/');
    }
    music.save()
    .then((musique) => { return res.status(201).json({musique}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getOneMusique = (req, res) => {
    const id = req.params.id;

    Musique.findOne({_id: id})
    .then((musique) => { return res.status(200).json({musique}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getAllMusiques = (req, res) => {
    Musique.find()
    .then((musiques) => { return res.status(200).json({musiques}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.modifyMusique = (req, res) => {
    const id = req.params.id;
    const music = req.body;

    if (req.file){
        music.file = req.file.path.replace('\\', '\/');
    }

    Musique.findOneAndUpdate({_id: id}, music)
    .then((musique) => { return res.status(200).json({musique}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.deleteMusique = (req, res) => {
    const id = req.params.id;

    Musique.findOneAndDelete({_id: id})
    .then((musique) => {
        fs.unlinkSync(musique.file);
        Image.findOneAndDelete({_id: musique.image})
        .then((image) => { console.log(image); });
        return res.status(200).json({musique});
    })
    .catch((error) => { return res.status(400).json({error}); });
};
