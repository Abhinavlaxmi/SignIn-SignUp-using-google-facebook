const { connection } = require('../config/connection');

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        googleId VARCHAR(255) DEFAULT NULL,
        facebookId VARCHAR(255) DEFAULT NULL,
        displayName VARCHAR(255) DEFAULT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) DEFAULT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating table: ', err);
    } else {
      console.log({"msg":'Table created successfully', result: result});
    }

  });

  module.exports = { connection, }