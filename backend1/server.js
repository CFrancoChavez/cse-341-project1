// const express = require('express');
// const mongodb = require('./data/database');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json()); // Para analizar el cuerpo de la solicitud JSON

// app.use('/', require('./routes'));

// mongodb.initdb((err) => {
//   if (err) {
//     console.log(err);
//   }
//   else{
//     app.listen(port, () => {console.log(`Database is listening and node running on port ${port}`)});
//     }
//   });
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const { connectToDatabase } = require('./data/database');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', require('./routes'));

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Database is listening and node running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
  });