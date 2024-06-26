const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create User
const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await prisma.user.create({
    data: {
      cpf: userData.cpf,
      password: hashedPassword,
    },
  });
  return user;
};

// Login
const login = async (userData) => {
  const user = await prisma.user.findUnique({
    where: { cpf: userData.cpf },
  });

  if (!user || !(await bcrypt.compare(userData.password, user.password))) {
    throw new Error('Invalid CPF or password');
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return token;
};

// Change Password
const changePassword = async (userId, newPassword) => {
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const user = await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword },
  });
  return user;
};

module.exports = {
  createUser,
  login,
  changePassword,
};
