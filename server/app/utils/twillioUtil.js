const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

function sendSMS(phoneNumber, message) {
  return client.messages.create({
    body: message,
    from: twilioPhoneNumber,
    to: phoneNumber
  });
}

module.exports = {
  sendSMS
};
