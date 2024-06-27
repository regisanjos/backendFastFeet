const express = require('express');
const router = express.Router();
const { create, getAll, getById, update, remove, markAsWaiting, markAsDelivered, markAsReturned, withdrawParcel, ListNearby, listByUser } = require('../controllers/ParcelController');
const { isAdmin, isAuthenticated, isDeliveryman } = require('../middlewares/authMiddleware');

router.use(isAuthenticated);

router.post('/', isAdmin, create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', isAdmin, update);
router.delete('/:id', isAdmin, remove);
router.get('/nearby/', isDeliveryman, ListNearby);
router.get('/mydeliveries', isDeliveryman, listByUser);

router.put('/:id/waiting', isAdmin, markAsWaiting);
router.put('/:id/withdraw', isDeliveryman, withdrawParcel);
router.put('/:id/delivered', isDeliveryman, markAsDelivered);
router.put('/:id/returned', isDeliveryman, markAsReturned);

module.exports = router;