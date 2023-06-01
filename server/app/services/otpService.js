const connection = require('../../config/dbConfig');
const twilioUtil = require('../utils/twillioUtil');

function generateOTP() {
  const min = 1000; // Minimum OTP value (inclusive)
  const max = 9999; // Maximum OTP value (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function insertOTP(userId, otp) {
  return new Promise((resolve, reject) => {
    const otpQuery = 'INSERT INTO otps (user_id, otp) VALUES (?, ?)';
    connection.query(otpQuery, [userId, otp], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

function sendOTPviaSMS(phoneNumber, otp) {
  return twilioUtil.sendSMS(phoneNumber, `Your OTP is: ${otp}`);
}

function verifyOTP(phoneNumber, otp) {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT * FROM otps
      WHERE otp = ? AND user_id IN (
        SELECT id FROM users WHERE phone_number = ?
      );
    `;
    connection.query(query, [otp, phoneNumber], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.length > 0);
      }
    });
  });
}

module.exports = {
  generateOTP,
  insertOTP,
  sendOTPviaSMS,
  verifyOTP
};
