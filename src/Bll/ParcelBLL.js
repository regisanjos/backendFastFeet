const { sendNotification } = require('../services/notificationService');

const {
  createParcel,
  getAllParcels,
  getParcelById,
  updateParcel,
  deleteParcel,
  markParcelAsWaiting,
  markParcelAsDelivered,
  markParcelAsReturned,
  withdrawParcel,
} = require('../DAO/parcelDao');
const { Prisma } = require('@prisma/client');

const createParcel = async (data) => {
  return await createParcel(data);
};

const getParcels = async () => {
  return await getAllParcels();
};

const getParcelById = async (id) => {
  return await getParcelById(id);
};

const updateParcel = async (id, data) => {
  return await updateParcel(id, data);
};

const deleteParcel = async (id) => {
  return await deleteParcel(id);
};

const markParcelAsWaiting = async (id) => {
  const parcel = await markParcelAsWaiting(id);
  const recipient = await prisma.recipient.findUnique({where:{ id: parcel.recipientId}});
  await sendNotification(recipient.email, 'Parcel Waiting', 'Your parcel is available for withdrawal.');
  return parcel;
};

const withdrawParcel = async (id, userId) => {
  const parcel = await withdrawParcel(id, userId);
  const recipient = await prisma.recipient.findUnique({ where: { id: parcel.recipientId } });
  await sendNotification(recipient.email, 'Parcel Withdrawn', 'Your parcel has been withdrawn.');
  return parcel;
};

const markParcelAsDelivered = async (id, userId, photo) => {
  const parcel = await markParcelAsDelivered(id, userId, photo);
  const recipient = await prisma.recipient.findUnique({ where: { id: parcel.recipientId } });
  await sendNotification(recipient.email, 'Parcel Delivered', 'Your parcel has been delivered.');
  return parcel;
};

const markParcelAsReturned = async (id, userId) => {
  const parcel = await markParcelAsReturned(id, userId);
  const recipient = await prisma.recipient.findUnique({ where: { id: parcel.recipientId } });
  await sendNotification(recipient.email, 'Parcel Returned', 'Your parcel has been returned.');
  return parcel;
};

const getParcelNearby = async (location) =>{
  return await getParcelNearby(location);

};

const getParcelByUser = async (userId) =>{
  return await getParcelByUser(userId)

};

module.exports = {
  createParcel,
  getParcels,
  getParcelById,
  updateParcel,
  deleteParcel,
  markParcelAsWaiting,
  withdrawParcel,
  markParcelAsDelivered,
  markParcelAsReturned,
  getParcelNearby,
  getParcelByUser

};