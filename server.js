/**************************
***** Requirements  *******
***************************/
const express = require('express');
const app = express();
const mongodb = require('./database');

require('dotenv').config();


/*****************
***** routes  ****
******************/
app.use('/', require('./routes'));


/*****************
******* env  *****
******************/
const port = process.env.PORT || 10000;


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


