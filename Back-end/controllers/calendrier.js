const Calendrier = require('../models/biographie.js');
const Article = require('../models/article.js');

exports.createCal = (req, res) => {
    const cal = new Calendrier(req.body);

    cal.save()
    .then((calendrier) => { res.status(201).json({calendrier}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getOneCal = (req, res) => {
    const id = req.params.id;

    Calendrier.findOne({_id: id})
    .then((calendrier) => { return res.status(200).json({calendrier}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getAllCals = (req, res) => {
    Calendrier.find()
    .then((calendrier) => { return res.status(200).json({calendrier}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.modifyCal = (req, res) => {
    const id = req.params.id;
    const cal = req.body;

    Calendrier.findOneAndUpdate({_id: id}, cal)
    .then((calendrier) => { return res.status(200).json({calendrier}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.deleteCal = (req, res) => {
    const id = req.params.id;

    Calendrier.findOneAndDelete({_id: id})
    .then((calendrier) => {
        Article.findOneAndDelete({_id: calendrier.article})
        .then((art) => { console.log(art); });
        return res.status(200).json({calendrier});
    })
    .catch((error) => { return res.status(400).json({error}); });
};
