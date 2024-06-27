const { changePassword } = require('../BLL/userBLL');
const { createUser,  getUsers,  getUserById,  updateUser,  deleteUser,} = require('../BLL/userBLL');

const create = async (req, res) => {
  const user = await createUser(req.body);
  res.status(201).json(user);
};

const getAll = async (req, res) => {
  const users = await getUsers();
  res.json(users);
};

const getById = async (req, res) => {
  const user = await getUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const update = async (req, res) => {
  const user = await updateUser(req.params.id, req.body);
  res.json(user);
};

const remove = async (req, res) => {
  await deleteUser(req.params.id);
  res.status(204).send();
};

const updatePassword = async (req, res) => {
const {id} = req.parms;
const { newPassword } = req.body

const user = await changePassword(id, newPassword);
res.json(user);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  updatePassword
};