const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const otpGenerator = require('otp-generator');

const app = express();
app.use(bodyParser.json());

// Database configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
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

  const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
  const query = `INSERT INTO otps (phone_number, otp) VALUES ('${phoneNumber}', '${otp}')`;

  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error('Error sending OTP:', error);
      res.status(500).send('Internal server error');
      return;
    }

    console.log(`OTP sent to ${phoneNumber}: ${otp}`);
    res.send('OTP sent');
  });
});

// Verify OTP
app.post('/verify', (req, res) => {
  const phoneNumber = req.body.phone_number;
  const otp = req.body.otp;

  const query = `SELECT * FROM otps WHERE phone_number = '${phoneNumber}' AND otp = '${otp}'`;

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

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

d
//database design 
// CREATE TABLE users (
//     id INT NOT NULL AUTO_INCREMENT,
//     phone_number VARCHAR(20) NOT NULL,
//     otp VARCHAR(10) NOT NULL,
//     otp_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     PRIMARY KEY (id),
//     UNIQUE KEY (phone_number)
//   );
  