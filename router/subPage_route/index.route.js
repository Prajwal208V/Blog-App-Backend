const express = require('express');
const subpageRoute = express.Router();

const bollywoodRoute = require('./bollywood.route');
const fitnessRoute = require('./fitness.route');
const foodRoute = require('./food.route');
const technologyRoute = require('./technology.route');
const tourismRoute = require('./tourism.route');


subpageRoute.route('/category', (bollywoodRoute, fitnessRoute, foodRoute, technologyRoute, tourismRoute));
module.exports = subpageRoute;