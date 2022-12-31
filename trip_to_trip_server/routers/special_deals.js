const express = require('express');

const { Router } = require("express");
const  specialDealtInfo  = require('../controllers/special_deals.js');
const router = Router();

router.get('/',specialDealtInfo.special_Deals);

module.exports = router;