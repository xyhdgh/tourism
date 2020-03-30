var express = require('express');
var router = express.Router();
const User = require('../controllers/user.js')
let fs = require('fs')
/* 文件上传 */
var multer = require('multer')

var createFolder = function (folder) {
  try {
    fs.accessSync(folder);
  } catch (e) {
    fs.mkdirSync(folder);
  }
};

var uploadFolder = './upload/';
createFolder(uploadFolder);
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({
  storage: storage
})


/* GET captcha page. */
router.get('/captcha', User.captcha)

/* POST loginInput */
router.post('/verify_have_name', User.verify_have_name)

/* POST loginPass */
router.post('/verify_have_pass', User.verify_have_pass)

/* POST register page. */
router.post('/register', User.do_register)

/* POST login page.  */
router.post('/login', User.do_login)

/* POST verify same name */
router.post('/verify_same_name', User.verify_same_name)

/* POST verify same code */
router.post('/verify_same_code', User.verify_same_code)

/* POST getMessage */
router.post('/getMessage', User.getMessage)

/* POST updateImg */
router.post('/profile', upload.single('file'), User.update_img)

module.exports = router;