const express = require('express');
const router = express.Router();
const {mainList,topList,advisement}=require('../../controller/subpage_controller/technology.controller');

router.use('/technology/list', mainList);
router.use('/technology/toplist', topList);
router.use('/technology/advisement', advisement);

module.exports = router;