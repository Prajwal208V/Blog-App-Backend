const express = require('express');
const router = express.Router();
const { mainList, topList, advisement } = require('../../controller/subpage_controller/bollywood.controller');

router.use('/bollywood/list', mainList);
router.use('/bollywood/toplist', topList);
router.use('/bollywood/advisement', advisement);

module.exports = router;
