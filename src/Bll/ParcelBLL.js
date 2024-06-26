const parcelDAO = require('../DAO/parcelDAO');
const notificationService = require('./notificationService');

// Create Parcel
const createParcel = async (parcelData) => {
  const parcel = await parcelDAO.createParcel({
    ...parcelData,
    status: 'awaiting',
  });
  await notificationService.sendNotification(parcelData.recipientId, `Your parcel with tracking code ${parcel.trackingCode} has been created and is awaiting pickup.`);
  return parcel;
};

// Get All Parcels
const getParcels = async () => {
  return await parcelDAO.getParcels();
};

// Update Parcel Status
const updateParcelStatus = async (id, status) => {
  const parcel = await parcelDAO.updateParcel(id, { status });
  await notificationService.sendNotification(parcel.responsibleId, `Your parcel with tracking code ${parcel.trackingCode} status has been updated to ${status}.`);
  return parcel;
};

// Withdraw Parcel
const withdrawParcel = async (id, deliverymanId) => {
  const parcel = await parcelDAO.updateParcel(id, {
    status: 'withdrawn',
    responsibleId: deliverymanId,
  });
  await notificationService.sendNotification(parcel.responsibleId, `Your parcel with tracking code ${parcel.trackingCode} has been withdrawn by the deliveryman.`);
  return parcel;
};

// Deliver Parcel
const deliverParcel = async (id, photoUrl) => {
  const parcel = await parcelDAO.updateParcel(id, {
    status: 'delivered',
    photoUrl,
  });
  await notificationService.sendNotification(parcel.responsibleId, `Your parcel with tracking code ${parcel.trackingCode} has been delivered.`);
  return parcel;
};

// Return Parcel
const returnParcel = async (id) => {
  const parcel = await parcelDAO.updateParcel(id, { status: 'returned' });
  await notificationService.sendNotification(parcel.responsibleId, `Your parcel with tracking code ${parcel.trackingCode} has been returned.`);
  return parcel;
};

module.exports = {
  createParcel,
  getParcels,
  updateParcelStatus,
  withdrawParcel,
  deliverParcel,
  returnParcel,
};