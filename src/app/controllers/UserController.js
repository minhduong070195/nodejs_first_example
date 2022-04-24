const User = require('../models/User');
const { singleMongooseToObject } = require('../../util/mongoose');
const express = require('express');
const app = express();
app.use(express.urlencoded({
    extended: true
}));

class UserController {

    // [GET] /user/:slug
    show(req, res, next) {
        User.findOne({ slug: req.params.slug })
            .then(user => {
                res.render('../../resources/views/user/show.hbs', { user: singleMongooseToObject(user) });
            })
            .catch(next);
    }

    // [GET] /user/create
    create(req, res) {
        res.render('../../resources/views/user/create.hbs');
    }

    // [POST] /user/store
    store(req, res) {
        const formData = req.body;
        formData.image = `https://www.youtube.com/watch?v=${formData.video_id}&list=RDMM&index=12`;
        formData.videoId = formData.video_id;
        const user = new User(formData);
        user.save()
            .then(() => res.redirect('/me/stored'))
            .catch(error => {

            });
    }

    // [POST] /handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                User.delete({ _id: { $in: req.body.userIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invalid' });
        }
    }

}

module.exports = new UserController();