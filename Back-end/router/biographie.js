const express = require('express');
const router = express.Router();
const BioController = require('../controllers/biographie.js');

router.post('/', BioController.createBio);
router.get('/:id', BioController.getOneBio);
router.get('/', BioController.getAllBios);
router.put('/:id', BioController.modifyBio);
router.delete('/:id', BioController.deleteBio);

module.exports = router;
