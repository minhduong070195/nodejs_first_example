const User = require('../models/User');
const { mutilpleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /
    index(req, res, next) {
        User.find({})
            .then(users => {
                res.render('home', {
                    users: mutilpleMongooseToObject(users)
                });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();