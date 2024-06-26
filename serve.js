const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./router/userRouter');
const deliverymanRouter = require('./router/deliverymanRouter');
const recipientRouter = require('./router/recipientRouter');
const parcelRouter = require('./router/parcelRouter');
const authRouter = require('./controllers/authController');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/deliverymen', deliverymanRouter);
app.use('/recipients', recipientRouter);
app.use('/parcels', parcelRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})