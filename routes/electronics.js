// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('electronics', { title: 'Search Results by electronics' });
// });

// module.exports = router;

var express = require('express');
const electronics_controlers= require('../controllers/electronics');
var router = express.Router();
/* GET costumes */
router.get('/', electronics_controlers.electronics_view_all_Page );
module.exports = router;