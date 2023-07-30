// taskModel.js

const pool = require('../../config/dbConfig');
// Function to get tasks by goal ID and day order
async function getTasksByGoalIdAndDayOrder(goalId, currentDayOrder) {
  console.log(goalId,currentDayOrder)
  const sql = 'SELECT * FROM tasks WHERE goal_id = ? AND day = ?';
  const values = [goalId, currentDayOrder]

  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  getTasksByGoalIdAndDayOrder,
};
