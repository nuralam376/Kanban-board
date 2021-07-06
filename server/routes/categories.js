const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/category.controller');

router.get('/', categoryController.getAll);
router.post('/', categoryController.create);
router.get('/:id/tasks', categoryController.getTasks);

module.exports = router;
