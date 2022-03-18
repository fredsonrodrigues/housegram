const express = require('express');
const { User } = require('../models');

const loginController = express.Router();

const EXPIRE = 300 * 1000 // tempo para expirar os cookies, em segundos, multiplicado por mil (porque estão em milisegundos)


loginController.get('/', (req, res) => {
    res.render('pages/login', { error: false });
});

loginController.get('/register', (req, res) => {
    res.render('pages/register', { error: false });
});

loginController.post('/login/submit', async (req, res) => {
    // função que vai tratar o login , verificando na base.
    const { username, password } = req.body
    var user = await User.findOne(({
        where: { apelido: username, senha: password }
    }));
    if (user) { // verificando se a query não retornará nula
        req.session.usuario = user.toJSON()

        return res.cookie('user_data', req.session.usuario, {
            httpOnly: true,
            signed: true,
            maxAge: EXPIRE,
            expires: new Date(Date.now() + EXPIRE)
        })
        .redirect('/home');
    }
    return res.render('pages/login', { error: true });
});

loginController.post('/submit/register', (req, res) => {
    // função que vai salvar o novo usuario na base.
    // User.save({ username: 'username', password: bycript(password) })
    // depois que salvar, loga o usuario dentro da sessão.
    res.redirect('/home');
});

module.exports = loginController;
