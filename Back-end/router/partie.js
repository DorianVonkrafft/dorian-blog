const express = require('express');
const router = express.Router();
const PartieController = require('../controllers/partie.js');

router.post('/', PartieController.createPart);
router.get('/:id', PartieController.getOnePart);
router.get('/', PartieController.getAllParts);
router.put('/:id', PartieController.modifyPart);
router.delete('/:id', PartieController.deletePart);

module.exports = router;
