const express = require('express');
const router = express.Router();
const { create } = require ('../coontrollers/post');

router.post('/post', create);

module.exports = router;