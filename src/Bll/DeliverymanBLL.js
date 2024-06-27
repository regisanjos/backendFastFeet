const { PrismaClient } = require('@prisma/client');



const createDeliveryman = async (data) => {
  return await prisma.deliveryman.create({
        data,
  });
  };


const getDeliverymen = async () => {
   return await prisma.deliveryman.findMany();
  
};


const getDeliverymanById = async (id) => {
  return await prisma.deliveryman.findUnique({
    where: { id },
  });
  };


const updateDeliveryman = async (id, deliverymanData) => {
  return await prisma.deliveryman.update({
    where: { id },
    data,
  });
  return deliveryman;
};


const deleteDeliveryman = async (id) => {
  return await prisma.deliveryman.delete({
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