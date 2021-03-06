'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use('/data', express.static('data'));

app.use('/', express.static('web'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/web/index.html')));

app.listen(3000);
