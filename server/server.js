const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail", // You can use other email services or SMTP
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
  });

  // Set up email data
  let mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Receiver email address
    subject: "New Contact Form Submission",
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ code: 200, message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, message: "Failed to send message" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
