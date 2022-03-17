const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const homeController = require('./controller/homeController');
const loginController = require('./controller/loginController');
const estaLogado = require('./middlewares/estaLogado');
const app = express();
const port = 3000

// configs -> what makes possible access body POST.
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.use('/', express.static('views'));
app.set('view engine', 'ejs');
app.use(cookieParser('xc bvhzksfgvbhgjbmknjlhdbfgkjfdnmklfdngjhdsbkeyboard cat', {
    httpOnly: true,
    secure: false,
    expires: new Date('2022-03-10T00:05:00'),
    maxAge: 300
}));

app.use(session({
    secret: 'xc bvhzksfgvbhgjbmknjlhdbfgkjfdnmklfdngjhdsbkeyboard cat',
    resave: false,
    saveUninitialized: false,
    name: 'vb zdfgkljh mtyçjl,grenhkjdvui',
    cookie: {
        httpOnly: true,
        secure: false,
    }
}));

app.use('/', loginController);

app.use('/home', estaLogado, homeController)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})