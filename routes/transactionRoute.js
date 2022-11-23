const express = require("express");
const { initialize } = require("../controllers/transactionController");


const router = express.Router();

router.get('/');

router.post('/initialize', initialize);

module.exports = router;