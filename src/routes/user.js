const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.get('/create', userController.create);
router.post('/handle-form-actions', userController.handleFormActions)
router.post('/store', userController.store);
router.get('/:slug', userController.show);
// router.get('/', userController.index);

module.exports = router;