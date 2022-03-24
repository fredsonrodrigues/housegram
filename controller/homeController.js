const express = require('express');

const uploadMiddlware = require('../middlewares/upload');

const homeController = express.Router();

homeController.get('/', (req, res) => {
    const { nome, apelido } = req.session.usuario
    res.render('pages/index', { nome, apelido });
})

homeController.get('/profile', (req, res) => {
    const { nome, apelido } = req.session.usuario
    res.render('pages/profile', { nome, apelido });
})

homeController.post('/profile', uploadMiddlware, (req, res) => {
    const { nome, apelido } = req.session.usuario
    res.redirect('/profile');
})

module.exports = homeController;