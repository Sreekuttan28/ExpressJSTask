const express = require('express');
const  router = express.Router();


const StudentController        =    require('../controller/StudentController');

router.get('/',StudentController.index);
router.post('/',StudentController.store);
router.put('/',StudentController.update);
router.delete('/',StudentController.destroy);

module.exports = router