const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, enum: ['student', 'driver'], required: true },
    stop: { type: String, required: true },
    status: { type: String, enum: ['waiting', 'not coming'], default: 'waiting' },
});

module.exports = mongoose.model('User', UserSchema);
