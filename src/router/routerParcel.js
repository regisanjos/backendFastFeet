const express = require('express');
const router = express.Router();
const { create, getAll, getById, update, remove, markAsWaiting, markAsDelivered, markAsReturned, withdrawParcel } = require('../controllers/ParcelController');
const { isAdmin, isAuthenticated, isDeliveryman } = require('../middlewares/authMiddleware');

router.use(isAuthenticated);

router.post('/', isAdmin, create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', isAdmin, update);
router.delete('/:id', isAdmin, remove);

router.put('/:id/waiting', isAdmin, markAsWaiting);