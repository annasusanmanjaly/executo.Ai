const connection = require('../../config/dbConfig');

function getUserByPhoneNumber(phoneNumber) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE phone_number = ?';
    connection.query(query, [phoneNumber], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(null);
        }
      }
    });
  });
}

function insertUser(phoneNumber) {
  return new Promise((resolve, reject) => {
    const userQuery = 'INSERT INTO users (phone_number) VALUES (?)';
    connection.query(userQuery, [phoneNumber], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
}

function updateUserDetails(name, email, phoneNumber) {
  return new Promise((resolve, reject) => {
    const userQuery = 'UPDATE users SET name = ?, email = ? WHERE phone_number = ?';
    connection.query(userQuery, [name, email, phoneNumber], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows);
      }
    });
  });
}




module.exports = {
  getUserByPhoneNumber,
  insertUser,
  updateUserDetails
};
