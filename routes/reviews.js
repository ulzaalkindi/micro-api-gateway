const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');


const reviewsHandler = require('./handler/reviews');
router.post('/',reviewsHandler.create);
router.put('/:id',reviewsHandler.update);
router.delete('/:id',reviewsHandler.destroy);


module.exports = router;
