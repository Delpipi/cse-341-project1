/**************************
***** Requirements  *******
***************************/
const express = require('express');
const app = express();
require('dotenv').config();


/*****************
***** routes  ****
******************/
app.use('/', require('./routes'));


/*****************
******* env  *****
******************/
const port = process.env.PORT
const host = process.env.HOST


/* *****************************************
 * Log statement to confirm server operation
 *******************************************/
app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
});
