const {
  createRecipient,
  getRecipients,
  getRecipientById,
  updateRecipient,
  deleteRecipient,
} = require('../BLL/recipientBLL');

const create = async (req, res) => {
  const recipient = await createRecipient(req.body);
  res.status(201).json(recipient);
};

const getAll = async (req, res) => {
  const recipients = await getRecipients();
  res.json(recipients);
};

const getById = async (req, res) => {
  const recipient = await getRecipientById(req.params.id);
  if (recipient) {
    res.json(recipient);
  } else {
    res.status(404).json({ message: 'Recipient not found' });
  }
};

const update = async (req, res) => {
  const recipient = await updateRecipient(req.params.id, req.body);
  res.json(recipient);
};

const remove = async (req, res) => {
  await deleteRecipient(req.params.id);
  res.status(204).send();
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};