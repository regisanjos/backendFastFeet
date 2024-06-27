const { prisma } = require( '../prismaClient');
const { authenticateUser } = require('../BLL/userBLL');

const login = async (req, res) => {
  const { cpf, password } = req.body;
  const user = await authenticateUser(cpf, password);
  if (user) {
    // Gerar token JWT (exemplo básico, considere usar uma biblioteca como jsonwebtoken)
    const token = generateToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'CPF ou senha incorretos' });
  }
};

const generateToken = (user) => {
  // Implementar geração de token JWT
  return 'token-placeholder';
};

module.exports = {
  login,
};