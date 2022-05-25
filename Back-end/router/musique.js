const express = require('express');
const router = express.Router();
const MusicController = require('../controllers/musique.js');
const upload = require('../middleware/upload.js');

router.post('/', upload.single('file'), MusicController.createMusique); //Agit sur l'attribut nommé file dans le model
router.get('/:id', MusicController.getOneMusique);
router.get('/', MusicController.getAllMusiques);
router.put('/:id', MusicController.modifyMusique);
router.delete('/:id', MusicController.deleteMusique);

module.exports = router;
