const express = require('express');

const { Router } = require("express");
const  spot  = require('../controllers/spot_location.js');
const router = Router();

router.get('/',spot.spot)

module.exports = router;