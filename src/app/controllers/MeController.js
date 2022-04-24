const User = require('../models/User');
const { singleMongooseToObject, mutilpleMongooseToObject } = require('../../util/mongoose');
const express = require('express');
const app = express();
app.use(express.urlencoded({
    extended: true
}));

class MeController {

    // [GET] /stored
    stored(req, res, next) {
        Promise.all([User.find({}), User.countDocumentsDeleted()])
            .then(([users, deleteCount]) => res.render('me/stored', {
                deleteCount,
                users: mutilpleMongooseToObject(users)
            }))
            .catch(next);
    }

    // [GET] /edit/:id
    edit(req, res, next) {
        User.findById(req.params.id)
            .then(user => res.render('user/edit', {
                user: singleMongooseToObject(user)
            }))
            .catch(next);
    }

    // [PUT] /update/:id
    update(req, res, next) {
        User.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored'))
            .catch(next);
    }

    // [DELETE] /delete/:id
    delete(req, res, next) {
        User.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /delete/:id/force
    forceDelete(req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [GET] /trash/:id
    trash(req, res, next) {
        User.findDeleted({})
            .then(users => res.render('me/trash', {
                users: mutilpleMongooseToObject(users)
            }))
            .catch(next);
    }

    // [PATCH] /restore
    restore(req, res, next) {
        User.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /handle-form-actions
    handleFormActions(req, res, next) {
        res.json(req.body);
    }
}

module.exports = new MeController();