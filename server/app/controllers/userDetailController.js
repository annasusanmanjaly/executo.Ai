const userModel = require('../models/userModel');

async function saveUserDetails(req, res) {
  try {
    const { name, email ,phoneNumber, previewImage} = req.body;
    console.log(phoneNumber)

    // Insert the user details into the database
    const userId = await userModel.updateUserDetails(name, email,phoneNumber,previewImage);

    console.log(`User details saved for User ID: ${userId}`);
    res.status(200).json({ message: 'User details saved' });
  } catch (error) {
    console.error('Error during saving user details:', error);
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = {
  saveUserDetails,
};
