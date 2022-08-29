const Parser = require('rss-parser');

module.exports = new Parser({
  customFields: {
    feed: ['otherTitle'],
    item: ['fulltext']
  }
});