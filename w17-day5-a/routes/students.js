var express = require('express');
var router = express.Router();
var {StudentController} = require('../controller/StudentController');

/* Add student */
router.get('/', (req, res) => res.status(400).send('Please provide a valid route'));

/* Add student */
router.post('/add', StudentController.add);

/* Get all students list */
router.get('/all', StudentController.getAll);

/* Get all students list by state */
router.get('/all/:state', StudentController.getAllByState);

/* Get detail about single student */
router.get('/:firstName/:lastName', StudentController.getdetails);

module.exports = router;
