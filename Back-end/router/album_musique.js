const express = require('express');
const router = express.Router();
const AlbumController = require('../controllers/album_musique.js');
const upload = require('../middleware/upload.js');

router.post('/', upload.array('musiques[]'), AlbumController.createAlbum);
router.get('/:id', AlbumController.getOneAlbum);
router.get('/', AlbumController.getAllAlbums);
router.put('/:id', AlbumController.modifyAlbum);
router.delete('/:id', AlbumController.deleteAlbum);

module.exports = router;
