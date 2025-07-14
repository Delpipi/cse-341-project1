const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contact Api',
    description: 'Contact Api'
  },
  host: 'localhost:9090',
  schemes: ['https','http']
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

//This will generate swagger.json
swaggerAutogen(outputFile, routes, doc);