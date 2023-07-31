const userModel = require('../models/userModel');

async function saveUserDetails(req, res) {
  try {
    const { name, email ,phoneNumber} = req.body;
    console.log(phoneNumber)

    // Insert the user details into the database
    const userId = await userModel.updateUserDetails(name, email,phoneNumber);

    console.log(`User details saved for User ID: ${userId}`);
    res.status(200).json({ message: 'User details saved' });
  } catch (error) {
    console.error('Error during saving user details:', error);
    res.status(500).json({ error: 'Internal server error' })
  }
}
async function readUserDetails(req,res){
  try {
    const phone_number = req.query.phoneNumber;
    const user = await userModel.getUserByPhoneNumber(phone_number);
    
    if (user) {
      res.json(user); // Send the user details as JSON response to the frontend
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: 'Failed to fetch user details' });
  }
}
module.exports = {
  saveUserDetails,
  readUserDetails
};
