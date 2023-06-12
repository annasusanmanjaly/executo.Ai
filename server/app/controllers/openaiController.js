const { formatResponse } = require('../utils/openaiUtil');
const { callOpenAI } = require('../services/openaiService');
const connection = require('../../config/dbConfig')


function saveTaskInDatabase(task, goalId, day) {
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
    const sql = 'INSERT INTO goals (goal_name, duration, start_date) VALUES (?, ?, ?)';
    const values = [goal, day, new Date()];

    pool.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
}

async function generateOpenAIResponse(req, res) {
  try {
    const goal = req.body.goal;
    const day = req.body.day;
    console.log(goal);

    // Call the OpenAI service function
    const response = await callOpenAI(goal, day);

    // Log the OpenAI response
    console.log('OpenAI Response:', response);

    // Format the response as needed
    const formattedResponse = formatResponse(response);

    // Store the learning plan in the database
    for (let i = 0; i < formattedResponse.length; i++) {
      const dayTasks = formattedResponse[i];
      const goalId = await createGoalInDatabase(goal, day);

      for (let j = 0; j < dayTasks.length; j++) {
        const task = dayTasks[j];
        const taskId = await saveTaskInDatabase(task, goalId, i + 1);
        console.log(`Saved task ${taskId} for day ${i + 1}`);
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
