const { prisma } = require( '../prismaClient');
const express = require('express');
const router = express.Router();
const { create, getAll, getById, update, remove } = require('../controllers/DeliverymanController');
const { isAdmin, isAuthenticated } = require('../middlewares/authMiddleware');

router.use(isAuthenticated);
router.use(isAdmin);

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;