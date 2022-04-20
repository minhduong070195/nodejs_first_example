const express = require('express');
const morgan = require('morgan');
const path = require('path');
//Loads the handlebars module
const { engine } = require('express-handlebars');
const app = express();
//set up handlebars
app.engine('hbs', engine({ 
    extname: '.hbs', 
    defaultLayout: __dirname +'/resources/views/layouts/main.hbs',
    // partialsDir   : __dirname +'resources/views/partials',
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, 'resources/views'));
const port = 3000;
// http logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});