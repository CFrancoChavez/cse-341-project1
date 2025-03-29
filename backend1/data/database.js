const dotenv = require('dotenv');
dotenv.config();
//const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
//let database;

// const initdb = (callback) => {
//     if(database){
//         console.log('Db is already initialized!');
//         return callback(null, database);    
//       }
//       MongoClient.connect(process.env.MONGODB_URI)
//         .then(client => {
//             database = client.db('Project1');
//             console.log('Database is connected');
//             return callback(null, database);
//         })  
//         .catch(err => {
//             console.log(err);
//             return callback(err);
//         });
// };

// const getDatabase = () => { 
//     if (!database) {
//         throw new Error('Database is not initialized');
//     }
//     return database;
// };

// module.exports = {
//     initdb,
//     getDatabase
// };
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // Sin opciones adicionales
    console.log('Database Connected...');
  } catch (err) {
    console.error('Error connecting to database:', err);
    throw err;
  }
}

module.exports = {
  connectToDatabase,
};