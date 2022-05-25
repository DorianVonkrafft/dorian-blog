const PlaylistVideo = require('../models/playlist_video.js');

exports.createPVideo = (req, res) => {

    const p_video = new PlaylistVideo(req.body);
    if (req.files){
        let path = '';
        req.files.forEach((files, index, arr) => {
            path = path + files.path + ',';
        });
        path = path.substring(0, path.lastIndexOf(","));
        p_video.videos = path.split('\\').join('\/');
    }

    p_video.save()
    .then((playlist_video) => { res.status(201).json({playlist_video}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getOnePVideo = (req, res) => {
    const id = req.params.id;

    PlaylistVideo.findOne({_id: id})
    .then((playlist_video) => { return res.status(200).json({playlist_video}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getAllPVideos = (req, res) => {
    PlaylistVideo.find()
    .then((playlist_video) => { return res.status(200).json({playlist_video}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.modifyPVideo = (req, res) => {
    const id = req.params.id;
    const p_video = req.body;

    PlaylistVideo.findOneAndUpdate({_id: id}, p_video)
    .then((playlist_video) => { return res.status(200).json({playlist_video}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.deletePVideo = (req, res) => {
    const id = req.params.id;

    PlaylistVideo.findOneAndDelete({_id: id})
    .then((playlist_video) => { return res.status(200).json({playlist_video}); })
    .catch((error) => { return res.status(400).json({error}); });
};
