const { prisma } = require('../prismaClient');

const createParcel = async (data) => {
  return await prisma.parcel.create({
    data,
  });
};

const getAllParcels = async () => {
  return await prisma.parcel.findMany();
};

const getParcelById = async (id) => {
  return await prisma.parcel.findUnique({
    where: { id },
  });
};

const updateParcel = async (id, data) => {
  return await prisma.parcel.update({
    where: { id },
    data,
  });
};

const deleteParcel = async (id) => {
  return await prisma.parcel.delete({
    where: { id },
  });
};

const markParcelAsWaiting = async (id) => {
  return await prisma.parcel.update({
    where: { id },
    data: { status: 'WAITING' },
  });
};

const withdrawParcel = async (id, userId) => {
  return await prisma.parcel.update({
    where: { id },
    data: { status: 'WITHDRAWN', responsibleId: userId },
  });
};

const markParcelAsDelivered = async (id, userId, photo) => {
  return await prisma.parcel.update({
    where: { id, responsibleId: userId },
    data: { status: 'DELIVERED', photo },
  });
};

const markParcelAsReturned = async (id, userId) => {
  return await prisma.parcel.update({
    where: { id, responsibleId: userId },
    data: { status: 'RETURNED' },
  });
};

  const getParcelsNearby = async (location) =>{
    
    //logica 
    
    
    
    return await prisma.parcel.findMany({
      where:{
        location:{
          contains: location,
        },
      },
    });
  };

  const getParcelByUser = async (userId) => {
    return await prisma.parcel.findMany({
      where:{
        responsibleId: userId,
      },
    });
  };



module.exports = {
  createParcel,
  getAllParcels,
  getParcelById,
  updateParcel,
  deleteParcel,
  markParcelAsWaiting,
  withdrawParcel,
  markParcelAsDelivered,
  markParcelAsReturned,
  getParcelsNearby,
  getParcelByUser
};