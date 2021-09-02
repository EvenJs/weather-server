const express = require('express');
const cors = require('cors');
const logger = require('./utils/logger');

const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.listen(PORT, (err) => {
  if (err) {
    console.error('Something wrong!');
  }
  logger.info(`server working...... on port ${PORT}`);
});
