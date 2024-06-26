const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

const userRouter = require('./router/userRouter');
const deliverymanRouter = require('./router/deliverymanRouter');
const recipientRouter = require('./router/recipientRouter');
const parcelRouter = require('./router/parcelRouter');
const authRouter = require('./controllers/authController'); // Novo

app.use('/auth', authRouter); // Novo
app.use('/users', userRouter);
app.use('/deliverymen', deliverymanRouter);
app.use('/recipients', recipientRouter);
app.use('/parcels', parcelRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});