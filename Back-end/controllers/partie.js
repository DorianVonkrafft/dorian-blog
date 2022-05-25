const Partie = require('../models/partie.js');
const SousPartie = require('../models/sous_partie.js');

exports.createPart = (req, res) => {
    const part = new Partie(req.body);

    part.save()
    .then((partie) => { res.status(201).json({partie}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getOnePart = (req, res) => {
    const id = req.params.id;

    Partie.findOne({_id: id})
    .then((partie) => { return res.status(200).json({partie}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getAllParts = (req, res) => {
    Partie.find()
    .then((partie) => { return res.status(200).json({partie}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.modifyPart = (req, res) => {
    const id = req.params.id;
    const part = req.body;

    Partie.findOneAndUpdate({_id: id}, part)
    .then((partie) => { return res.status(200).json({partie}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.deletePart = (req, res) => {
    const id = req.params.id;

    Partie.findOneAndDelete({_id: id})
    .then((partie) => {
        SousPartie.findOneAndDelete({_id: partie.sous_partie})
        .then((sous) => { console.log(sous); });
        return res.status(200).json({partie});
    })
    .catch((error) => { return res.status(400).json({error}); });
};
