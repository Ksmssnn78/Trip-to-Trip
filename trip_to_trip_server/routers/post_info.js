const express = require('express');

const { Router } = require("express");
const  postInfo  = require('../controllers/post_info.js');
const router = Router();

router.get('/',postInfo.postInfo)

module.exports = router;