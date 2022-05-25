const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/article.js');

router.post('/', ArticleController.createArt);
router.get('/:id', ArticleController.getOneArt);
router.get('/', ArticleController.getAllArts);
router.put('/:id', ArticleController.modifyArt);
router.delete('/:id', ArticleController.deleteArt);

module.exports = router;
