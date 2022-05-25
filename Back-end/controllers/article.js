const Article = require('../models/article.js');
const Image = require('../models/image.js');
const Video = require('../models/video.js');
const Musique = require('../models/musique.js');

exports.createArt = (req, res) => {
    const art = new Article(req.body);

    art.save()
    .then((article) => { res.status(201).json({article}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getOneArt = (req, res) => {
    const id = req.params.id;

    Article.findOne({_id: id})
    .then((article) => { return res.status(200).json({article}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getAllArts = (req, res) => {
    Article.find()
    .then((article) => { return res.status(200).json({article}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.modifyArt = (req, res) => {
    const id = req.params.id;
    const art = req.body;

    Article.findOneAndUpdate({_id: id}, art)
    .then((article) => { return res.status(200).json({article}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.deleteArt = (req, res) => {
    const id = req.params.id;

    Article.findOneAndDelete({_id: id})
    .then((article) => {
        Image.findOneAndDelete({_id: article.image})
        .then((image) => { console.log(image); });
        Video.findOneAndDelete({_id: article.video})
        .then((video) => { console.log(video); });
        Musique.findOneAndDelete({_id: article.musique})
        .then((musique) => { console.log(musique); });
        return res.status(200).json({article});
    })
    .catch((error) => { return res.status(400).json({error}); });
};
