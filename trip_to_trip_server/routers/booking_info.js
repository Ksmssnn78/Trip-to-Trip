const express = require('express');

const { Router } = require("express");
const  booking_info  = require('../controllers/booking_info');
const router = Router();

router.get('/',booking_info.bookingInfo)

module.exports = router;