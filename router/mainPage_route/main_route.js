const express = require('express');
const app =express();
const { headeList, latestList, latestArticalList, toplList, advisement }=require('../../controller/mainpage_controller/mainpage.controller');

app.use('/header',headeList);
app.use('/latest',latestList);
app.use('/latestArtical',latestArticalList);
app.use('/top',toplList);
app.use('/advisement',advisement);

module.exports =app;