const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create Recipient
const createRecipient = async (recipientData) => {
  const recipient = await prisma.recipient.create({
    data: {
      name: recipientData.name,
      address: recipientData.address,
      phone: recipientData.phone,
      email: recipientData.email
    },
  });
  return recipient;
};

// Get All Recipients
const getRecipients = async () => {
  const recipients = await prisma.recipient.findMany();
  return recipients;
};

// Get Recipient by ID
const getRecipientById = async (id) => {
  const recipient = await prisma.recipient.findUnique({
    where: { id },
  });

  if (!recipient) {
    throw new Error('Recipient not found');
  }

  return recipient;
};

// Update Recipient
const updateRecipient = async (id, recipientData) => {
  const recipient = await prisma.recipient.update({
    where: { id },
    data: {
      name: recipientData.name,
      address: recipientData.address,
      phone: recipientData.phone,
      email: recipientData.email
    },
  });

  return recipient;
};

// Delete Recipient
const deleteRecipient = async (id) => {
  await prisma.recipient.delete({
    where: { id },
  });
};

module.exports = {
  createRecipient,
  getRecipients,
  getRecipientById,
  updateRecipient,
  deleteRecipient,
};