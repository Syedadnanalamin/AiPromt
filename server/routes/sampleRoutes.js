const express = require('express');
const { getHello } = require('../controllers/sampleController.js');

const router = express.Router();

router.get('/', getHello);

module.exports = router;

