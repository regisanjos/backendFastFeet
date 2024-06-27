const { prisma } = require('../prismaClient');

const createRecipient = async (data) => {
  return await prisma.recipient.create({
    data,
  });
};

const getAllRecipients = async () => {
  return await prisma.recipient.findMany();
};

const getRecipientById = async (id) => {
  return await prisma.recipient.findUnique({
    where: { id },
  });
};

const updateRecipient = async (id, data) => {
  return await prisma.recipient.update({
    where: { id },
    data,
  });
};

const deleteRecipient = async (id) => {
  return await prisma.recipient.delete({
    where: { id },
  });
};

module.exports = {
  createRecipient,
  getAllRecipients,
  getRecipientById,
  updateRecipient,
  deleteRecipient,
};