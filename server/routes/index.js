const express = require('express');
const router = express.Router();

// const ctrlHome = require('../controllers/homepage');
// const ctrlAuth = require('../controllers/login');
// const ctrlBlog = require('../controllers/blog');
// const ctrlAdmin = require('../controllers/admin');

/* GET home page. */

router.get('/', function(req, res, next){
res.render('server/pages/index', {title: 'Express'});
});


// router.get('/', ctrlHome.getIndex);
// router.post('/contact', ctrlHome.sendEmail);

// router.get('/login', ctrlAuth.getLoginpage);
// router.post('/login', ctrlAuth.authorization);

// router.get('/blog', ctrlBlog.getBlogpage);

// router.get('/admin', ctrlAdmin.getAdminpage);
// router.post('/admin/avatar', ctrlAdmin.uploadAvatar);

module.exports = router;