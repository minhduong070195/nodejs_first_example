const newsRouter = require('./news');
const siteRouter = require('./site');
const userRouter = require('./user');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/user', userRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;