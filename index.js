const express = require('express');
const cors = require('cors');
const app = express();

const getSourceInfo = require('./routes/get-source-info');
const getSourceData = require('./routes/get-source-data');
const getSourceText = require('./routes/get-source-text');

let corsOptions = {
  origin: false,
  optionsSuccessStatus: 200,
  maxAge: 3600,
  credentials: true
};

// app.use(cors(corsOptions));
app.use(express.json());

app.use(getSourceInfo);
app.use(getSourceData);
app.use(getSourceText);

app.disable('x-powered-by');
app.listen(process.env.PORT || 8080, () => console.log('Server start'));