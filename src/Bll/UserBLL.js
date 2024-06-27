const { updateUserPassword} = require ('../DAO/UserDAO')
const { update } = require('../controllers/ParcelController');
const { prisma } = require('../prismaClient');
const bcrypt = require('bcryptjs');

const createUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;
  return await prisma.user.create({
    data,
  });
};

const getUsers = async () => {
  return await prisma.user.findMany();
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

const updateUser = async (id, data) => {
  if (data.password) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
  }
  return await prisma.user.update({
    where: { id },
    data,
  });
};

const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: { id },
  });
};

const authenticateUser = async (cpf, password) => {
  const user = await prisma.user.findUnique({
    where: { cpf },
  });
  if (user && (await bcrypt.compare(password, user.password))) {
    return user;
  }
  return null;
};

const changePassword = async(id, newPassword) =>{
  return await updateUserPassword(id, newPassword);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  authenticateUser,
  changePassword
};