const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage ({
    destination: function(req, file, cb){
        cb(null, 'uploads');
    },
    filename: function(req, file, cb){
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

var upload = multer ({
    storage: storage,
    fileFilter: function(req, file, callback){
        if (file.mimetype == "video/mp4" || file.mimetype == "video/wav" || file.mimetype == "video/flac" || file.mimetype == "video/aiff" || file.mimetype == "video/mov" || file.mimetype == "image/png" || file.mimetype == "image/jpg"){
            callback(null, true);
        } else {
            console.log("Pas le bon format de fichier, (.mp4, .wav, .flac, .aiff, .mov, .png, .jpg supportés)");
            callback(null, false);
        }
    },
    limits: { //Taille max d'un fichier vidéo
        fileSize: 50000000
    }
});

module.exports = upload;
