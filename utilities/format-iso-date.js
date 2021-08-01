const formatPubDate = require('./format-pub-date');

module.exports = function(isoDate, pubDate) {
  if (!isoDate || typeof isoDate !== 'string') return '';
  if (!pubDate || typeof pubDate !== 'string') return '';

  let isoDateTrim = isoDate.split('T'),
      date = isoDateTrim[0].split('-').reverse().join('.'),
      time = formatPubDate(pubDate);

  return date + ' ' + time;
}