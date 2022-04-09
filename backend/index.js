const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const { port } = require('./config');
const {
  logError,
  wrapError,
  errorHandler,
} = require('./utils/middlewares/errorHandler');
const notFoundHandler = require('./utils/middlewares/notFoundHandler');
const hotelsAPI = require('./routes/hotels.routes');
const path = require('path');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/static', express.static(path.join(__dirname, './public/images')));

hotelsAPI(app);

app.use(notFoundHandler);

app.use(logError);
app.use(wrapError);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening in http://localhost:${port}`);
});
