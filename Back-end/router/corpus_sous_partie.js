const express = require('express');
const router = express.Router();
const CorpusController = require('../controllers/corpus_sous_partie.js');

router.post('/', CorpusController.createCorp);
router.get('/:id', CorpusController.getOneCorp);
router.get('/', CorpusController.getAllCorps);
router.put('/:id', CorpusController.modifyCorp);
router.delete('/:id', CorpusController.deleteCorp);

module.exports = router;
