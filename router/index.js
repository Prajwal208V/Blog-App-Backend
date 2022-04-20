const express = require('express');
const app = express();
const mainPage_route=require('./mainPage_route/main_route');
const subPage_route=require('./subPage_route/index.route');

app.use(mainPage_route,subPage_route);


module.exports=app;
