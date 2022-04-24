const express = require('express');
// const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
var methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes'); // mặc định nạp vào file index
const db = require('./config/db/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.connect(); // Connect DB

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: __dirname + '/resources/views/layouts/main.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(methodOverride('_method'));

// app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

// Route init
route(app);

// app.get('/search', (req, res) => {
//     res.render('search')
// });

// app.post('/search', (req, res) => {
//     res.send('home - ' + res.json(req.body))
// });

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});