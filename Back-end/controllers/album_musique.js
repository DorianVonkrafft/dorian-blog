const AlbumMusique = require('../models/album_musique.js');

exports.createAlbum = (req, res) => {

    const alb = new AlbumMusique(req.body);
    if (req.files){
        let path = '';
        req.files.forEach((files, index, arr) => {
            path = path + files.path + ',';
        });
        path = path.substring(0, path.lastIndexOf(","));
        alb.musiques = path.split('\\').join('\/');
    }

    alb.save()
    .then((album_musique) => { res.status(201).json({album_musique}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getOneAlbum = (req, res) => {
    const id = req.params.id;

    AlbumMusique.findOne({_id: id})
    .then((album_musique) => { return res.status(200).json({album_musique}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getAllAlbums = (req, res) => {
    AlbumMusique.find()
    .then((album_musique) => { return res.status(200).json({album_musique}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.modifyAlbum = (req, res) => {
    const id = req.params.id;
    const alb = req.body;

    AlbumMusique.findOneAndUpdate({_id: id}, alb)
    .then((album_musique) => { return res.status(200).json({album_musique}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.deleteAlbum = (req, res) => {
    const id = req.params.id;

    AlbumMusique.findOneAndDelete({_id: id})
    .then((album_musique) => { return res.status(200).json({album_musique}); })
    .catch((error) => { return res.status(400).json({error}); });
};
