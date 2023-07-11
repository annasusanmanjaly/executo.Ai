const userModel = require('../models/userModel');

async function saveUserDetails(req, res) {
  try {
    const { name, email ,phoneNumber} = req.body;

    // Insert the user details into the database
    const userId = await userModel.insertUserDetails(name, email,phoneNumber);

    console.log(`User details saved for User ID: ${userId}`);
    res.status(200).json({ message: 'User details saved' });
  } catch (error) {
    console.error('Error during saving user details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  saveUserDetails,
};
