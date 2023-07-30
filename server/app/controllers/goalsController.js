// goalController.js

const goalModel = require('../models/goalModel');
const taskModel = require('../models/taskmodel');
const userModel = require('../models/userModel')

async function getGoalsByPhoneNumber(req, res) {
  try {
    const phoneNumber = req.query.phoneNumber;
    console.log(phoneNumber);

    // Retrieve the user based on the phone number from the database
    const user = await userModel.getUserByPhoneNumber(phoneNumber);
    console.log("user", user)

    if (user) {
      const userId = user.id;

      // Retrieve the goals from the database based on the user ID
      const goals = await goalModel.getGoalsByUserId(userId);

      if (goals.length > 0) {
        console.log(goals);

        // Handle the retrieved goals as needed
        res.status(200).json({ goals });
      } else {
        // No goals found for the given user ID
        console.log('No goals found');
        res.status(404).json({ error: 'Goals not found' });
      }
    } else {
      // No user found for the given phone number
      console.log('User not found');
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error during retrieving goals:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// New function to get tasks for a specific goal
async function getTasksForGoal(req, res) {
  try {
    const goalId = req.query.goalId;
    const currentDayOrder = req.query.day; // You can pass the current day order as a parameter
    console.log("goaldId",goalId)

    // Fetch tasks for the specific goal and day order
    const tasks = await taskModel.getTasksByGoalIdAndDayOrder(goalId, currentDayOrder);
    console.log("tasks",tasks)

    // Handle the retrieved tasks as needed
    res.status(200).json({ tasks });
  } catch (error) {
    console.error('Error during retrieving tasks for goal:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getGoalsByPhoneNumber,
  getTasksForGoal,
};
