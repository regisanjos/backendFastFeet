const { prisma } = require('../prismaClient');

const createDeliveryman = async (data) => {
  return await prisma.deliveryman.create({
    data,
  });
};

const getAllDeliverymen = async () => {
  return await prisma.deliveryman.findMany();
};

const getDeliverymanById = async (id) => {
  return await prisma.deliveryman.findUnique({
    where: { id },
  });
};

const updateDeliveryman = async (id, data) => {
  return await prisma.deliveryman.update({
    where: { id },
    data,
  });
};

const deleteDeliveryman = async (id) => {
  return await prisma.deliveryman.delete({
    where: { id },
  });
};

module.exports = {
  createDeliveryman,
  getAllDeliverymen,
  getDeliverymanById,
  updateDeliveryman,
  deleteDeliveryman,
};