const { callOpenAI } = require('../services/openaiService');
const connection = require('../../config/dbConfig');

async function saveTaskInDatabase(task, goalId, day) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO tasks (task_name, goal_id, day) VALUES (?, ?, ?)';
    const values = [task, goalId, day];

    connection.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
}

async function createGoalInDatabase(goal, day) {
  return new Promise((resolve, reject) => {
    const selectSql = 'SELECT id FROM goals WHERE goal_name = ?';
    const selectValues = [goal];

    connection.query(selectSql, selectValues, (selectError, selectResults) => {
      if (selectError) {
        reject(selectError);
      } else {
        if (selectResults.length > 0) {
          // Goal already exists in the database, return the existing goal ID
          resolve(selectResults[0].id);
        } else {
          // Goal doesn't exist, insert it into the database
          const insertSql = 'INSERT INTO goals (goal_name, duration, start_date) VALUES (?, ?, ?)';
          const insertValues = [goal, day, new Date()];

          connection.query(insertSql, insertValues, (insertError, insertResults) => {
            if (insertError) {
              reject(insertError);
            } else {
              resolve(insertResults.insertId);
            }
          });
        }
      }
    });
  });
}

async function generateOpenAIResponse(req, res) {
  try {
    const { goal, day } = req.body;

    // Call the OpenAI service function
    const response = await callOpenAI(goal, day);

    // Log the OpenAI response
    console.log('OpenAI Response:', response);

    // Store the learning plan in the database
    const goalId = await createGoalInDatabase(goal, day);

    for (let i = 0; i < response.length; i++) {
      const tasks = response[i][0]; // Get the tasks for the current day
      console.log('Day:', i + 1);
      console.log('Tasks:', tasks.join(', '));

      const taskDay = i + 1;
      for (let j = 0; j < tasks.length; j++) {
        const task = tasks[j];
        await saveTaskInDatabase(task, goalId, taskDay);
      }
    }

    // Send the success response to the client
    res.send('Learning plan stored successfully');
  } catch (error) {
    console.error('Error in generating OpenAI response:', error);
    res.status(500).send('Error in generating OpenAI response');
  }
}

module.exports = {
  generateOpenAIResponse,
};
