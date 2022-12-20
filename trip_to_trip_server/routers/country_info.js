const express = require('express');

const { Router } = require("express");
const  countries  = require('../controllers/country_info.js');
const router = Router();

router.get('/',countries.countries)

module.exports = router;