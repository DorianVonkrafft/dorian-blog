const Video = require('../models/video.js');
const Image = require('../models/image.js');
const fs = require('fs');

exports.createVideo = (req, res) => {
    const video = new Video(req.body);
    if (req.file){
        video.file = req.file.path.replace('\\', '\/');
    }
    video.save()
    .then((vid) => { res.status(201).json({vid}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getOneVideo = (req, res) => {
    const id = req.params.id;

    Video.findOne({_id: id})
    .then((video) => { return res.status(200).json({video}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getAllVideos = (req, res) => {
    Video.find()
    .then((videos) => { return res.status(200).json({videos}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.modifyVideo = (req, res) => {
    const id = req.params.id;
    const video = req.body;

    if (req.file){
        video.file = req.file.path.replace('\\', '\/');
    }

    Video.findOneAndUpdate({_id: id}, video)
    .then((vid) => { return res.status(200).json({vid}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.deleteVideo = (req, res) => {
    const id = req.params.id;

    Video.findOneAndDelete({_id: id})
    .then((video) => {
        fs.unlinkSync(video.file);
        Image.findOneAndDelete({_id: musique.image})
        .then((image) => { console.log(image); });
        return res.status(200).json({video});
    })
    .catch((error) => { return res.status(400).json({error}); });
};
