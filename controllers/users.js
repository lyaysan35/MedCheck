const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');
const User = require('../models/user');
const Timeframe = require('../models/timeframe')
const bcrypt = require('bcryptjs');

// LOGIN 
router.post('/login', async (req, res) => {
    try {
        const foundUser = await User.findOne({username: req.body.username});
        if(foundUser) {
            if(bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.message = '';
                req.session.username = foundUser.username;
                req.session.userId = foundUser._id;
                req.session.logged = true;

                res.redirect('/users');
            } else {
                req.session.message = 'Username or Password is Incorrect';
                res.redirect('/');
            }
        } else {
            req.session.message = 'Username or Password is Incorrect';
            res.redirect('/');
        }
    } catch(err) {
        res.send(err);
    }
})

// LOGOUT
router.get('/logout', async (req, res) => {
    try {
        req.session.destroy;
        res.redirect('/');
    } catch (err) {
        res.send(err)
    }
})

// NEW ROUTE
router.get('/new', async (req, res) => {
    try {
        res.render('users/new.ejs');
    } catch(err) {
        res.send(err);
    }
})
router.post('/registration', async (req, res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        const newUser = {
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email
        }
        const createdUser = await User.create(newUser);
        req.session.username = createdUser.username;
        req.session.userId = createdUser._id;
        req.session.logged = true;
        console.log(createdUser);
        res.redirect('/users');
    } catch(err) {
        res.send(err);
    }
})

// EDIT ROUTE
router.get('/:id/edit', async (req, res) => {
    try {
        const foundUser = await User.findOne({_id: req.session.userId});
        res.render('users/edit.ejs', {
            user: foundUser
        })
    } catch(err) {
        res.send(err);
    }
})
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.session.userId, req.body, {new: true});
        req.session.username = updatedUser.username;
        res.redirect('/users')
    } catch (err) {
        res.send(err);
    }
    
})

// SHOW ROUTE
router.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findOne(req.session.userId);
        res.render('users/show.ejs', {
            user: foundUser
        })
    } catch(err) {
        res.send(err);
    }
})

// INDEX ROUTE
router.get('/', async (req, res) => {
    try {
        const foundUser = await User.findOne({_id: req.session.userId});
        console.log(foundUser, 'this is the found user')
        res.render('users/index.ejs', {
            user: foundUser
        })
    } catch(err) {
        res.send(err);
    }
});

// DELETE ROUTE
router.delete('/:id', async (req, res) => {
    try {
        const foundUser = await User.findByIdAndRemove(req.params.id);
        res.redirect('/users');
    } catch(err) {
        res.send(err);
    }
    
})



module.exports = router;