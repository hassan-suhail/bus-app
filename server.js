const express = require('express');  // Import express
const mongoose = require('mongoose');  // Import mongoose
const bodyParser = require('body-parser');  // Import body-parser
const apiRoutes = require('./routes/api');  // Import your routes

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));  // Use body-parser for form data
app.use(bodyParser.json());  // Use body-parser for JSON data

// Set up the database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/busapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api', apiRoutes);

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
