require('dotenv').config();

const express = require('express');
const app = express();
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index')
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');

const url = process.env.DATABASEURL;
mongoose.connect(url, { useNewUrlParser: true });

app.use(express.static(path.join(__dirname, '../public')));
app.use ('/', indexRouter);
app.use('/api/v1', restRouter);

app.use('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));