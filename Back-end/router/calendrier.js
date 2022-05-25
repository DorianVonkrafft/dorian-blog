const express = require('express');
const router = express.Router();
const CalController = require('../controllers/calendrier.js');

router.post('/', CalController.createCal);
router.get('/:id', CalController.getOneCal);
router.get('/', CalController.getAllCals);
router.put('/:id', CalController.modifyCal);
router.delete('/:id', CalController.deleteCal);

module.exports = router;
