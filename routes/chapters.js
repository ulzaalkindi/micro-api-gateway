const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');


const chaptersHandler = require('./handler/chapters');
router.get('/',chaptersHandler.getAll);
router.get('/:id',chaptersHandler.get);
router.post('/',chaptersHandler.create);
router.put('/:id',chaptersHandler.update);
router.delete('/:id',chaptersHandler.destroy);


module.exports = router;
