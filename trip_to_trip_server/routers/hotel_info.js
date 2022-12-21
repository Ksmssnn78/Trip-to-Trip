const express = require('express');

const { Router } = require("express");
const  hotel  = require('../controllers/hotel_info.js');
const router = Router();

router.get('/',hotel.hotel)

module.exports = router;