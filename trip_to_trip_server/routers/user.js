const express = require('express');

const { Router } = require("express");
const  user  = require('../controllers/user.js');
const router = Router();

router.get('/',user.userdata)

module.exports = router;