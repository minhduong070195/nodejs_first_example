const express = require('express');
// const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes'); // mặc định nạp vào file index

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: __dirname + '/resources/views/layouts/main.hbs'
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, 'resources/views'));

// Route init
route(app);

// app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});