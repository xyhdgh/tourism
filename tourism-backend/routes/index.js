var express = require('express');
var router = express.Router();
const Home = require('../controller/getPage.js') 

/* GET home page. */
router.get('/', Home.getPage);


module.exports = router;
