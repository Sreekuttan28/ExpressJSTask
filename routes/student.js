const express = require('express');
const  router = express.Router();


const StudentController        =    require('../controller/StudentController');

router.get('/',StudentController.index);
router.post('/show',StudentController.show);
router.post('/store',StudentController.store);
router.put('/',StudentController.update);
router.delete('/',StudentController.destroy);

module.exports = router