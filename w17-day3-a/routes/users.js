var express = require('express');
var router = express.Router();
var {UserController} = require('../controller/UserController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(404).send('Nothing available, use a proper route!!!');
});

router.post('/new', UserController.create);
router.get('/getall', UserController.getAll);
router.get('/getuser/:username', UserController.getUser);
router.put('/updateuser/:username', UserController.updateUser);
router.delete('/deleteuser/:username', UserController.deleteUser);

module.exports = router;
