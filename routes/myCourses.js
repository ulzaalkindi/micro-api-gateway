const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');


const myCoursesHandler = require('./handler/my-courses');

router.get('/',myCoursesHandler.getAll);
router.post('/',myCoursesHandler.create);



module.exports = router;
