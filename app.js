const express = require('express');
const app = express();
const port = 3000;
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan')

app.use(morgan('conbine'));

app.get("/", (req, res) => {

    res.send("Hello");    
});

app.listen(port, () =>{

    debug("Listening on port: " + chalk.green(port));
});


