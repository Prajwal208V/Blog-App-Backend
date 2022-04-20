const express = require('express');
const router = express.Router();
const {mainList,topList,advisement}=require('../../controller/subpage_controller/fitness.controller');


router.use('/fitness/list', mainList);
router.use('/fitness/toplist', topList);
router.use('/fitness/advisement', advisement);

module.exports = router;