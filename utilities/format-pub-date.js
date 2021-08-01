module.exports = function (pubDate) {
  let date = pubDate.split(' ');

  if (date.length === 1) return pubDate;
  
  date.splice(0, 1);
  date.pop();
  let time = date[3].split(':');
  time.pop();
  
  return time.join(':');
}
