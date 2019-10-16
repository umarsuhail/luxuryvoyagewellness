/**
 * Router config for express JS and node mailer inside router
 * @Author : Umar Suhail
 */
const express = require("express");
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const router = express.Router();
router.get("/save", function(req, res, next) {
  res.status(200).json({ statusCode: 200, message: "Send Successfully" });
});

router.post("/submitForm", function(req, res, next) {
  console.log(req.body.email);
  console.log(req.body.contact);
  console.log(req.body.feedback);

  const output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>  
    <li>Name: <strong>${req.body.name}</strong></li>
    <li>Email: ${req.body.email}</li>
    <li>Contact No: ${req.body.contact}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.feedback}</p>
`;
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'info@luxuryvoyagewellness.com', // TODO: your gmail account
        pass: process.env.PASSWORD || 'Harisreepavi@123' // TODO: your gmail password
    }
}));

// Step 2
let mailOptions = {
    from: 'info@luxuryvoyagewellness.com', // TODO: email sender
    to: 'luxuryvoyagewellness@gmail.com', // TODO: email receiver
    subject: 'Luxury Voyage Wellness- Queries',
    text: 'New message from luxuryvoyagewellness.com',
    html:output
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});

  res
    .status(200)
    .json({ statusCode: 200, message: "Send Successfully" +''+ req.body.email });
    console.log(req.body);
    
});
module.exports = router;
