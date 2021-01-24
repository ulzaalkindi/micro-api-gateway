const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');


const imageCoursesHandler = require('./handler/image-courses');

router.post('/',imageCoursesHandler.create);
router.delete('/:id',imageCoursesHandler.destroy);


module.exports = router;
