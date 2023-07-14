const goalModel = require('../models/goalModel');
const userModel = require('../models/userModel');

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

module.exports = {
    getGoalsByPhoneNumber,
};
