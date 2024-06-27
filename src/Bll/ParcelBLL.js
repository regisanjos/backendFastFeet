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
  return await markParcelAsWaiting(id);
};

const withdrawParcel = async (id, userId) => {
  return await withdrawParcel(id, userId);
};

const markParcelAsDelivered = async (id, userId, photo) => {
  return await markParcelAsDelivered(id, userId, photo);
};

const markParcelAsReturned = async (id, userId) => {
  return await markParcelAsReturned(id, userId);
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
};