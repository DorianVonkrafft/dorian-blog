const Corpus = require('../models/corpus_sous_partie.js');

exports.createCorp = (req, res) => {
    const corp = new Corpus(req.body);

    corp.save()
    .then((corpus) => { res.status(201).json({corpus}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getOneCorp = (req, res) => {
    const id = req.params.id;

    Corpus.findOne({_id: id})
    .then((corpus) => { return res.status(200).json({corpus}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getAllCorps = (req, res) => {
    Corpus.find()
    .then((corpus) => { return res.status(200).json({corpus}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.modifyCorp = (req, res) => {
    const id = req.params.id;
    const corp = req.body;

    Corpus.findOneAndUpdate({_id: id}, corp)
    .then((corpus) => { return res.status(200).json({corpus}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.deleteCorp = (req, res) => {
    const id = req.params.id;

    Corpus.findOneAndDelete({_id: id})
    .then((corpus) => {
        Image.findOneAndDelete({_id: corpus.image})
        .then((image) => { console.log(image); });
        return res.status(200).json({corpus});
    })
    .catch((error) => { return res.status(400).json({error}); });
};
