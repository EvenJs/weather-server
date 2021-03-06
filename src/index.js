const express = require('express');
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const routes = require('./routes');
const logger = require('./utils/logger');

const swaggerDoc = require('./utils/swagger');
const notFoundHandler = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const PORT = process.env.PORT || 9000;

const app = express();

app.use(helmet());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('common'));
}

app.use(routes);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  logger.info(`server working...... on port ${PORT}`);
});
