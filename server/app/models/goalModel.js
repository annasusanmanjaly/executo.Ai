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

// Function to retrieve a goal by goal ID
function getGoalById(goalId) {
  return new Promise((resolve, reject) => {
    // Perform the necessary database query to retrieve the goal based on goal ID
    const query = 'SELECT * FROM goals WHERE id = ?';
    connection.promise().query(query, [goalId])
      .then(([rows]) => {
        const goal = rows[0]; // Assuming goalId is unique, so there will be only one goal or none
        console.log(goal); // Print the goal (optional)
        resolve(goal);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
function updateGoal(goalId, incrementBy) {
  return new Promise((resolve, reject) => {
    // Perform the necessary database query to update days_completed based on goal ID
    const query = `
      UPDATE goals
      SET days_completed = days_completed + ?
      WHERE id = ?
    `;

    connection.promise().query(query, [incrementBy, goalId])
      .then(([result]) => {
        if (result.affectedRows === 1) {
          console.log(`Days completed updated successfully for Goal with ID ${goalId}.`);
          resolve();
        } else {
          reject(new Error(`Failed to update days completed for Goal with ID ${goalId}.`));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = {
  getGoalsByUserId,
  getGoalById, 
  updateGoal,// Add the new function to the exported module
};
