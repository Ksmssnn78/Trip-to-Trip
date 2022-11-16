const express = require('express');

const { Router } = require("express");
const  home  = require('../controllers/home.js');
const router = Router();

router.get('/',home.hello)

module.exports = router;