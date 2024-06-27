const { prisma } = require('../prismaClient');

const createUser = async (data) => {
  return await prisma.user.create({
    data,
  });
};

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

const updateUser = async (id, data) => {
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

const getUserByCpf = async (cpf) => {
  return await prisma.user.findUnique({
    where: { cpf },
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByCpf,
};