const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const otpGenerator = require('otp-generator');
const app = express();
const twilio = require('twilio');
const cors = require('cors');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);
app.use(bodyParser.json());
app.use(cors());

// Database configuration
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Send OTP to phone number
app.post('/login', (req, res) => {
  const phoneNumber = req.body.phone_number;
  const otp = generateOTP();

  // Insert phone number into 'users' table
  const userQuery = `INSERT INTO users (phone_number) VALUES ('${phoneNumber}')`;
  connection.query(userQuery, (userError, userResults) => {
    if (userError) {
      console.error('Error inserting phone number:', userError);
      res.status(500).send('Internal server error');
      return;
    }

    const userId = userResults.insertId;

    // Insert OTP into 'otps' table
    const otpQuery = `INSERT INTO otps (user_id, otp) VALUES (${userId}, '${otp}')`;
    connection.query(otpQuery, (otpError, otpResults) => {
      if (otpError) {
        console.error('Error inserting OTP:', otpError);
        res.status(500).send('Internal server error');
        return;
      }

      sendOTPviaSMS(phoneNumber, otp);
      console.log(`OTP sent to ${phoneNumber}`);
      res.send('OTP sent');
    });
  });
});

// Verify OTP
app.post('/verify', (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const otp = req.body.otp
  console.log(`The otp is ${otp} and ${phoneNumber}`)

  const query = `
    SELECT * FROM otps
    WHERE otp = '${otp}' AND user_id IN (
      SELECT id FROM users WHERE phone_number = '${phoneNumber}'
    );`

  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error('Error verifying OTP:', error);
      res.status(500).send('Internal server error');
      return;
    }

    if (results.length > 0) {
      console.log(`OTP verified for ${phoneNumber}`);
      res.send('OTP verified');
    } else {
      console.log(`Invalid OTP for ${phoneNumber}: ${otp}`);
      res.status(400).send('Invalid OTP');
    }
  });
});

// Helper function to generate OTP
function generateOTP() {
  const min = 1000; // Minimum OTP value (inclusive)
  const max = 9999; // Maximum OTP value (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Helper function to send OTP via Twilio SMS
function sendOTPviaSMS(phoneNumber, otp) {
  client.messages
    .create({
      body: `Your OTP is: ${otp}`,
      from: twilioPhoneNumber,
      to: phoneNumber
    })
    .then(message => {
      console.log(`OTP sent to ${phoneNumber}: ${otp}`);
    })
    .catch(error => {
      console.error('Error sending OTP:', error);
    });
}

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});


