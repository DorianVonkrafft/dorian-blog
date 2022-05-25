const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/video.js');
const upload = require('../middleware/upload.js');

router.post('/', upload.single('file'), VideoController.createVideo);
router.get('/:id', VideoController.getOneVideo);
router.get('/', VideoController.getAllVideos);
router.put('/:id', VideoController.modifyVideo);
router.delete('/:id', VideoController.deleteVideo);

module.exports = router;
