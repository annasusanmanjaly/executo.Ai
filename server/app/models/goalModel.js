const connection = require('../../config/dbConfig');

// Function to retrieve goals by user ID
function getGoalsByUserId(userId) {
  return new Promise((resolve, reject) => {
    // Perform the necessary database query to retrieve goals based on user ID
    const query = 'SELECT * FROM goals WHERE user_id = ?';
    connection.promise().query(query, [userId])
      .then(([rows]) => {
        const goals = rows;
        console.log(goals); // Print the goals (optional)
        resolve(goals);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = {
  getGoalsByUserId,
};
