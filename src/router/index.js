const express = require('express');
const router = express.Router();

const authRouter = require('./routerAuth');
const userRouter = require('./routerUser');
const deliverymanRouter = require('./routerDeliveryman');
const recipientRouter = require('./routerRecipient');

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/deliverymen', deliverymanRouter);
router.use('/recipients', recipientRouter);

module.exports = router;