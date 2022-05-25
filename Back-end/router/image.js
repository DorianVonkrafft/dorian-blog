const express = require('express');
const router = express.Router();
const ImageController = require('../controllers/image.js');
const upload = require('../middleware/upload.js');

router.post('/', upload.single('file'), ImageController.createImage);
router.get('/:id', ImageController.getOneImage);
router.get('/', ImageController.getAllImages);
router.put('/:id', ImageController.modifyImage);
router.delete('/:id', ImageController.deleteImage);

module.exports = router;
