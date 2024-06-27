const prismaClient = require('../prismaClient');
const { getParcelsNearby } = require('../Bll/ParcelsBLL');
const { getParcelsByUser } = require('../Bll/ParceslBLL');

const { createParcel, getParcels, getParcelById, updateParcel, deleteParcel, markParcelAsWaiting, markParcelAsDelivered, markParcelAsReturned, withdrawParcel} = require('../BLL/parcelBLL');

const create = async (req, res) => {

  const parcel = await createParcel(req.body);
  res.status(201).json(parcel);
};

const getAll = async (req, res) => {
  const parcels = await getParcels();
  res.json(parcels);
};

const getById = async (req, res) => {
  const parcel = await getParcelById(req.params.id);
  if (parcel) {
    res.json(parcel);
  } else {
    res.status(404).json({ message: 'Parcel not found' });
  }
};

const update = async (req, res) => {
  const parcel = await updateParcel(req.params.id, req.body);
  res.json(parcel);
};

const remove = async (req, res) => {
  await deleteParcel(req.params.id);
  res.status(204).send();
};

const markAsWaiting = async (req, res) => {
  const parcel = await markParcelAsWaiting(req.params.id);
  res.json(parcel);
};

const withdrawParcel = async (req, res) => {
  const parcel = await withdrawParcel(req.params.id, req.user.id);
  res.json(parcel);
};

const markAsDelivered = async (req, res) => {
  const { photo } = req.body;
  if (!photo) {
    return res.status(400).json({ message: 'Photo is required to mark as delivered' });
  }
  const parcel = await markParcelAsDelivered(req.params.id, req.user.id, photo);
  res.json(parcel);
};

const markAsReturned = async (req, res) => {
  const parcel = await markParcelAsReturned(req.params.id, req.user.id);
  res.json(parcel);
};

const ListNearby = async (req, res) =>{
  const location = req.query.location;
  const parcels = await getParcelsNearby(location);
  res.json(parcels);
};

const listByUser = async (req, res) =>{
  const userId = req.query.location;
  const parcels = await getParcelByUser(userId);
  res.json(parcels);

}



module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  markAsWaiting,
  withdrawParcel,
  markAsDelivered,
  markAsReturned,
  ListNearby,
  listByUser
};