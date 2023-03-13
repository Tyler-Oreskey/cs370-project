const express = require('express');
const config = require('./src/config');
const bootstrap = require('./src/bootstrap');

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

bootstrap(app, router);

app.listen(config.port);