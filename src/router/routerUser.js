const express = require('express');
const router = express.Router();
const { create, getAll, getById, update, remove, updatePassword } = require('../controllers/UserController');
const { isAdmin, isAuthenticated } = require('../middlewares/authMiddleware');

router.use(isAuthenticated);
router.use(isAdmin);

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);
router.put('/id/password', isAdmin, updatePassword);

module.exports = router;