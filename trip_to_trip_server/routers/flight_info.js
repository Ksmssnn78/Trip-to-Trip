const express = require('express');

const { Router } = require("express");
const  flight  = require('../controllers/flight_info.js');
const router = Router();

router.get('/',flight.flight)

module.exports = router;