const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create Parcel
const createParcel = async (parcelData) => {
  return await prisma.parcel.create({
    data: parcelData,
  });
};

// Get All Parcels
const getParcels = async () => {
  return await prisma.parcel.findMany();
};

// Get Parcel by ID
const getParcelById = async (id) => {
  return await prisma.parcel.findUnique({
    where: { id },
  });
};

// Update Parcel
const updateParcel = async (id, updateData) => {
  return await prisma.parcel.update({
    where: { id },
    data: updateData,
  });
};

// Delete Parcel
const deleteParcel = async (id) => {
  return await prisma.parcel.delete({
    where: { id },
  });
};

module.exports = {
  createParcel,
  getParcels,
  getParcelById,
  updateParcel,
  deleteParcel,
};