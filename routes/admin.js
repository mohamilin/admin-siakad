const express = require('express');
const router = express.Router();
const {viewDashboard} = require("../controllers/admin")

router.get('/dashboard', viewDashboard)

module.exports = router;