const express = require('express');
const app = express();
const restRouter = require('./routes/rest');
const port = 3000;

app.use('/api/v1', restRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));