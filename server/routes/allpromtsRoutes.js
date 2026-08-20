const express = require("express");
const router = express.Router();
const { getAllpromts } = require('../controllers/allPromtsController');

// gettin all promts
router.get("/", getAllpromts);


module.exports = router;
