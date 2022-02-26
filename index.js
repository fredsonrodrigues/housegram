const express = require('express');
const homeController = require('./controller/homeController');
const loginController = require('./controller/loginController');
const app = express();
const port = 3000

// configs -> what makes possible access body POST.
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.use('/', express.static('views'));
app.set('view engine', 'ejs');

app.use('/', loginController);

app.use('/home', homeController)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})