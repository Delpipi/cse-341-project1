/**************************
***** Requirements  *******
***************************/
const express = require('express');
const app = express();
const mongodb = require('./database');
const bodyParser = require('body-parser');

require('dotenv').config();


/*********************
***** Middleware  ****
**********************/

//Aware collect value from request body functionality
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/*****************
***** routes  ****
******************/
app.use('/', require('./routes'));


/*****************
******* env  *****
******************/
const port = process.env.PORT || 3000;


/* *****************************************
 * Log statement to confirm server operation
 *******************************************/
mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`App listening on ${port}`);
        });
    }
});


