const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Render the student page
router.get('/student', (req, res) => {
    res.render('student');
});

// Render the driver page
router.get('/driver', (req, res) => {
    User.find({ role: 'student' })
        .then(students => res.render('driver', { students }))
        .catch(err => res.status(500).send(err));
});

// Update student status
router.post('/update-status', (req, res) => {
    const { name, status } = req.body;

    User.findOneAndUpdate({ name, role: 'student' }, { status }, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).send('Student not found');
            }
            res.redirect('/student');
        })
        .catch(err => res.status(500).send(err));
});

module.exports = router;
