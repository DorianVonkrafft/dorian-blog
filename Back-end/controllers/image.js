const Image = require('../models/image.js');
const fs = require('fs');

exports.createImage = (req, res) => {
    const image = new Image(req.body);
    if (req.file){
        image.file = req.file.path.replace('\\', '\/');
    }
    image.save()
    .then((im) => { return res.status(201).json({im}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getOneImage = (req, res) => {
    const id = req.params.id;

    Image.findOne({_id: id})
    .then((image) => { return res.status(200).json({image}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.getAllImages = (req, res) => {
    Image.find()
    .then((images) => { return res.status(200).json({images}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.modifyImage = (req, res) => {
    const id = req.params.id;
    const image = req.body;

    if (req.file){
        image.file = req.file.path.replace('\\', '\/');
    }

    Image.findOneAndUpdate({_id: id}, image)
    .then((im) => { return res.status(200).json({im}); })
    .catch((error) => { return res.status(400).json({error}); });
};

exports.deleteImage = (req, res) => {
    const id = req.params.id;

    Image.findOneAndDelete({_id: id})
    .then((image) => {
        fs.unlinkSync(image.file);
        return res.status(200).json({image});
    })
    .catch((error) => { return res.status(400).json({error}); });
};
