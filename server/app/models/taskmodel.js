// taskModel.js
const pool = require('../../config/dbConfig');

// Function to get tasks by goal ID and day order
async function getTasksByGoalIdAndDayOrder(goalId, currentDayOrder) {
  console.log('Fetching tasks for Goal ID:', goalId, 'and Day:', currentDayOrder);
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

async function updateTask(task) {
  try {
    const { id, taskname, goal_id, day, completed } = task;
    const query = 'UPDATE tasks SET taskname = ?, goal_id = ?, day = ?, completed = ? WHERE id = ?';
    await pool.promise().query(query, [taskname, goal_id, day, completed, id]);
    console.log(`Task with ID ${id} updated successfully.`);
  } catch (error) {
    console.error('Error while updating task:', error);
    throw error;
  }
}

module.exports = {
  getTasksByGoalIdAndDayOrder,
  updateTask,
};
