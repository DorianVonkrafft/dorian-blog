const Biographie = require('../models/biographie.js');
const Image = require('../models/image.js');

exports.createBio = (req, res) => {
    const bio = new Biographie(req.body);

    bio.save()
    .then((biographie) => { res.status(201).json({biographie}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getOneBio = (req, res) => {
    const id = req.params.id;

    Biographie.findOne({_id: id})
    .then((biographie) => { return res.status(200).json({biographie}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getAllBios = (req, res) => {
    Biographie.find()
    .then((biographie) => { return res.status(200).json({biographie}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.modifyBio = (req, res) => {
    const id = req.params.id;
    const bio = req.body;

    Biographie.findOneAndUpdate({_id: id}, bio)
    .then((biographie) => { return res.status(200).json({biographie}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.deleteBio = (req, res) => {
    const id = req.params.id;

    Biographie.findOneAndDelete({_id: id})
    .then((biographie) => {
        Image.findOneAndDelete({_id: biographie.image})
        .then((image) => { console.log(image); });
        return res.status(200).json({biographie});
    })
    .catch((error) => { return res.status(400).json({error}); });
};
