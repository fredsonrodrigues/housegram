const express = require('express');

const homeController = express.Router();

homeController.get('/', (req, res) => {
    const { nome, apelido } = req.session.usuario
    res.render('pages/index', { nome, apelido });
})

homeController.get('/profile', (req, res) => {
    const { nome, apelido } = req.session.usuario
    res.render('pages/profile', { nome, apelido });
})

module.exports = homeController;