const express = require('express');

const homeController = express.Router();

homeController.get('/', (req, res) => {
    res.render('pages/index');
})

homeController.get('/profile', (req, res) => {
    res.render('pages/profile');
})

module.exports = homeController;