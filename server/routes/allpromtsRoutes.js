const express = require("express");
const router = express.Router();
const { getAllpromts, getSinglePromt } = require('../controllers/allPromtsController');

// gettin all promts
router.get("/", getAllpromts);

// getting individual promts info;

router.get("/:id", getSinglePromt);


module.exports = router;
