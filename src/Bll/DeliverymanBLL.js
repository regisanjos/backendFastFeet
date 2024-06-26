const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create Deliveryman
const createDeliveryman = async (deliverymanData) => {
  const deliveryman = await prisma.deliveryman.create({
    data: deliverymanData,
  });
  return deliveryman;
};

// Get All Deliverymen
const getDeliverymen = async () => {
  const deliverymen = await prisma.deliveryman.findMany();
  return deliverymen;
};

// Get Deliveryman by ID
const getDeliverymanById = async (id) => {
  const deliveryman = await prisma.deliveryman.findUnique({
    where: { id },
  });
  return deliveryman;
};

// Update Deliveryman
const updateDeliveryman = async (id, deliverymanData) => {
  const deliveryman = await prisma.deliveryman.update({
    where: { id },
    data: deliverymanData,
  });
  return deliveryman;
};

// Delete Deliveryman
const deleteDeliveryman = async (id) => {
  await prisma.deliveryman.delete({
    where: { id },
  });
};

module.exports = {
  createDeliveryman,
  getDeliverymen,
  getDeliverymanById,
  updateDeliveryman,
  deleteDeliveryman,
};