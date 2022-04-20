const bollywoodList = require('../../module/bollywood.module');
const fitnessList = require('../../module/fitness.module');
const foodList = require('../../module/food.module');
const technologyList = require('../../module/technology.module');
const tourismList = require('../../module/tourism.module');
const advisementList = require('../../module/advisement.module');

const categoryList = [bollywoodList, fitnessList, foodList, technologyList, tourismList,];

function headeList(req, res) {
    const arr = [];
    let itr = 3;
    while (itr--) {
        const index1 = Math.floor(Math.random() * 5);
        const index2 = Math.floor(Math.random() * 15);
        arr.push(categoryList[index1][index2]);
    }
    res.status(200).json(arr);
}

function latestList(req, res) {
    const arr = [];
    let itr = 3;
    while (itr--) {
        const index1 = Math.floor(Math.random() * 5);
        const index2 = Math.floor(Math.random() * 14);
        arr.push(categoryList[index1][index2]);
    }
    res.status(200).json(arr);
}

function latestArticalList(req, res) {
    const arr = [];
    let itr = 5;
    while (itr--) {
        const index1 = Math.floor(Math.random() * 5);
        const index2 = Math.floor(Math.random() * 14);
        arr.push(categoryList[index1][index2]);
    }
    res.status(200).json(arr);
}

function toplList(req, res) {
    const arr = [];
    let itr = 8;
    while (itr--) {
        const index1 = Math.floor(Math.random() * 5);
        const index2 = Math.floor(Math.random() * 15);
        arr.push(categoryList[index1][index2]);
    }
    res.status(200).json(arr);
}

function advisement(req, res) {
    const arr = [];
    let itr = 2;
    while (itr--) {
        const index = Math.floor(Math.random() * 10);
        arr.push(advisementList[index]);
    }
    return res.status(200).json(arr);
}

module.exports = { headeList, latestList, latestArticalList, toplList, advisement };