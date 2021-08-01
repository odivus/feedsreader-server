// rss-parser
// https://www.npmjs.com/package/rss-parser
const express = require('express'),
      Parser = require('rss-parser'),
      cheerio = require('cheerio'),
      needle = require('needle'),
      cors = require('cors'),
      app = express();

const getSourceInfo = require('./routes/get-source-info'),
      getSourceData = require('./routes/get-source-data');
      getSourceText = require('./routes/get-source-text');

let corsOptions = {
  origin: 'http://127.0.0.1:3000',
  optionsSuccessStatus: 200,
  maxAge: 3600,
  credentials: true
};

const parser = new Parser({
  customFields: {
    feed: ['otherTitle'],
    item: ['fulltext']
  }
});

app.use(cors(corsOptions));
app.use(express.json());

getSourceInfo(app, parser);
getSourceData(app, parser);
getSourceText(app, cheerio, needle);

app.disable('x-powered-by');
app.listen(process.env.PORT || 8080, () => console.log('Server start'));

