const express = require('express');
const router = express.Router();
const SousPartieController = require('../controllers/sous_partie.js');

router.post('/', SousPartieController.createSousPart);
router.get('/:id', SousPartieController.getOneSousPart);
router.get('/', SousPartieController.getAllSousParts);
router.put('/:id', SousPartieController.modifySousPart);
router.delete('/:id', SousPartieController.deleteSousPart);

module.exports = router;
