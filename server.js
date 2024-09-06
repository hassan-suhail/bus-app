const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<solobirdacademy@gmail.com>:<Hassansuhailsan22@>@cluster0.xxxxx.mongodb.net/busapp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.log('Error connecting to MongoDB Atlas:', err));



// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/api'));

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
