const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

app.use(bodyParser.json());

app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});