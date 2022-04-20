const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    app.use('/news', newsRouter)

    app.use('/', siteRouter)

    // app.get('/search', (req, res) => {
    //     console.log(req.body);
    //     res.render('search')
    // });

    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.render('search')
    // });
}

module.exports = route;