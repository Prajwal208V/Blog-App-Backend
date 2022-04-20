const express = require('express');
const router = express.Router();
const {mainList,topList,advisement}=require('../../controller/subpage_controller/tourism.controller');

router.use('/tourism/list', mainList);
router.use('/tourism/toplist', topList);
router.use('/tourism/advisement', advisement);

module.exports = router;