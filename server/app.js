require('dotenv').config();
const express = require('express');
const config = require('./config/serverConfig');
const indexRouter = require('./routes/indexRouter');

const PORT = process.env.PORT || 4000;

const app = express();

config(app);

app.use('/', indexRouter);

app.listen(PORT, async () => {
  console.log(`server work in ${PORT}`);
});
