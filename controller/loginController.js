const express = require('express');

const loginController = express.Router();

loginController.get('/', (req, res) => {
    res.render('pages/login', { error: false });
});

loginController.get('/register', (req, res) => {
    res.render('pages/register', { error: false });
});

loginController.post('/login/submit', (req, res) => {
    // função que vai tratar o login , verificando na base.
    // User.where({ username: 'username', password: bycript(password) });
    // se achar, loga o usuario dentro da sessão.
    const { username, password } = req.body
    console.log({ username, password });
    if (username === 'user1' && password === '123456') {
        res.redirect('/home');
    } else {
        res.render('pages/login', { error: true });
    }
});

loginController.post('/submit/register', (req, res) => {
    // função que vai salvar o novo usuario na base.
    // User.save({ username: 'username', password: bycript(password) })
    // depois que salvar, loga o usuario dentro da sessão.
    res.redirect('/home');
});

module.exports = loginController;
