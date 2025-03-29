const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API de Contactos',
    description: 'Documentación de la API de contactos',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js']; // Ruta al archivo de rutas principal

swaggerAutogen(outputFile, endpointsFiles, doc);