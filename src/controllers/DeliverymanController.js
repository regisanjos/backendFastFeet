const {
  createDeliveryman,
  getDeliverymen,
  getDeliverymanById,
  updateDeliveryman,
  deleteDeliveryman,
} = require('../BLL/deliverymanBLL');

const create = async (req, res) => {
  const deliveryman = await createDeliveryman(req.body);
  res.status(201).json(deliveryman);
};

const getAll = async (req, res) => {
  const deliverymen = await getDeliverymen();
  res.json(deliverymen);
};

const getById = async (req, res) => {
  const deliveryman = await getDeliverymanById(req.params.id);
  if (deliveryman) {
    res.json(deliveryman);
  } else {
    res.status(404).json({ message: 'Deliveryman not found' });
  }
};

const update = async (req, res) => {
  const deliveryman = await updateDeliveryman(req.params.id, req.body);
  res.json(deliveryman);
};

const remove = async (req, res) => {
  await deleteDeliveryman(req.params.id);
  res.status(204).send();
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};