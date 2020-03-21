const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Parses incoming request body before your handlers 
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

const routes = require('./routes/index');
// const cookbooks = require('./routes/cookbooks');

const app = express();
let dbURI = 'mongodb://localhost/contactsappdb';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MLAB_URI;
}
mongoose.connect(dbURI, {
    useMongoClient: true
}, (err, res) => {
    if (err) {
        console.log(`ERROR connecting to ${dbURI}. ${err}`);
    } else {
        console.log(`Successfully connected to ${dbURI}.`);

    }
});

const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // only parse json bodies
// make parsing simple and secure
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'public/png')));

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// app.use('/', routes);
// app.use('/cookbooks', cookbooks);

app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

