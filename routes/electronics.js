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
/* GET detail costume page */
router.get('/detail', electronics_controlers.electronics_view_one_Page);
/* GET create costume page */
router.get('/create', electronics_controlers.electronics_create_Page);
/* GET create update page */
router.get('/update', electronics_controlers.electronics_update_Page);
/* GET delete costume page */
router.get('/delete', electronics_controlers.electronics_delete_Page);
module.exports = router;