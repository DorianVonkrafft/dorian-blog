const SousPartie = require('../models/sous_partie.js');
const Corpus = require('../models/corpus_sous_partie.js');

exports.createSousPart = (req, res) => {
    const sous_part = new SousPartie(req.body);

    sous_part.save()
    .then((sous_partie) => { res.status(201).json({sous_partie}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getOneSousPart = (req, res) => {
    const id = req.params.id;

    SousPartie.findOne({_id: id})
    .then((sous_partie) => { return res.status(200).json({sous_partie}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getAllSousParts = (req, res) => {
    SousPartie.find()
    .then((sous_partie) => { return res.status(200).json({sous_partie}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.modifySousPart = (req, res) => {
    const id = req.params.id;
    const sous_part = req.body;

    SousPartie.findOneAndUpdate({_id: id}, sous_part)
    .then((sous_partie) => { return res.status(200).json({sous_partie}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.deleteSousPart = (req, res) => {
    const id = req.params.id;

    SousPartie.findOneAndDelete({_id: id})
    .then((sous_partie) => {
        Corpus.findOneAndDelete({_id: sous_partie.corpus})
        .then((corpus) => { console.log(corpus); });
        return res.status(200).json({sous_partie});
    })
    .catch((error) => { return res.status(400).json({error}); });
};
