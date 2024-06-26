const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const authenticateUser = async (cpf, password) => {
  const user = await prisma.user.findUnique({
    where: { cpf },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid CPF or password');
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { token, user };
};

router.post('/login', async (req, res) => {
  try {
    const { cpf, password } = req.body;
    const { token, user } = await authenticateUser(cpf, password);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;