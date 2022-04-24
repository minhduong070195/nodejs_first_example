const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/', meController.stored);
router.get('/edit/:id', meController.edit);
router.put('/update/:id', meController.update);
router.delete('/delete/:id', meController.delete);
router.delete('/delete/:id/force', meController.forceDelete);
router.get('/trash/', meController.trash);
router.patch('/restore/:id', meController.restore);

module.exports = router;