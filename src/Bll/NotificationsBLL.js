const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const nodemailer = require('nodemailer');

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send Notification
const sendNotification = async (recipientId, message) => {
  const recipient = await prisma.recipient.findUnique({
    where: { id: recipientId },
  });

  if (!recipient) {
    throw new Error('Recipient not found');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient.email,
    subject: 'Parcel Status Update',
    text: message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendNotification,
};