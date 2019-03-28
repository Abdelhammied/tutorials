const express = require('express');
const bodyPaser = require('body-parser');

const routes = require('./app/routes/routes');
const app = express();
app.use(bodyPaser.json());
app.use(routes);

app.listen(3000);