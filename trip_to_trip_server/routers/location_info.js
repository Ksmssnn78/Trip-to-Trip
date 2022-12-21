const express = require('express');

const { Router } = require("express");
const  location  = require('../controllers/location_info.js');
const router = Router();

router.get('/',location.location)

module.exports = router;