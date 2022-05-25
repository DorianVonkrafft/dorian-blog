const express = require('express');
const router = express.Router();
const PVideoController = require('../controllers/playlist_video.js');
const upload = require('../middleware/upload.js');

router.post('/', upload.array('videos[]'), PVideoController.createPVideo);
router.get('/:id', PVideoController.getOnePVideo);
router.get('/', PVideoController.getAllPVideos);
router.put('/:id', PVideoController.modifyPVideo);
router.delete('/:id', PVideoController.deletePVideo);

module.exports = router;
