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

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
/* GET create costume page */
router.get('/create',secured, electronics_controlers.electronics_create_Page);
/* GET create update page */
router.get('/update',secured, electronics_controlers.electronics_update_Page);
/* GET delete costume page */
router.get('/delete',secured, electronics_controlers.electronics_delete_Page);
module.exports = router;