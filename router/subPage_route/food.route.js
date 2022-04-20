const express = require('express');
const router = express.Router();
const { mainList, topList, advisement } = require('../../controller/subpage_controller/food.controller');

router.use('/food/list', mainList);
router.use('/food/toplist', topList);
router.use('/food/advisement', advisement);

module.exports = router;