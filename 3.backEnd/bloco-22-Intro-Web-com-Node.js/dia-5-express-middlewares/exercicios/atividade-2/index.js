const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require("axios");

const PORT = 3000;
const API_URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json);';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/btc/price', async function(req, res){
  const token = req.headers.authorization;
  const tokenRegex = !/^[a-zA-Z0-9]{12}$/;

  const response_API = await axios.get(API_URL);

  if (!token || tokenRegex.test(token)) return res.status(401).json({message: 'Invalid Token!'});

  return res.status(200).json(response_API.data);
});

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(PORT, () => {
  console.log('Aplicação ouvindo na porta 3000');
});

