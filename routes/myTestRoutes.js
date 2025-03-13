const express = require('express');
const router = express.Router();

const myTestController = require('../controller/myTestController');

router.get('/test', myTestController.test);
router.get('/test2', myTestController.test2);

module.exports = router;