const express = require('express');
const bodyParser = require('body-parser');

const teamsRouter = require('./teamsRouter');
const errors = require('./routerNotFound');
const PORT = 3001;

const app = express();
app.use(bodyParser.json());

app.get('/', teamsRouter);

/* app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(errors.routerNotFound);
no gabarito, não tinha */
 
app.listen(PORT, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

