const getRssData = require('./get-rss-data');

module.exports = function(app, parser) {
  app.post('/info', function (req, res) {
    const rssData = req.body,
          rssUrl = rssData.rssUrl;

    getRssData(parser, rssUrl)
      .then(data => {
        res.json({
          link: data.link,
          title: data.title,
        });
      })
      .catch(err => {
        res.send({ error: true });
      });
  });
}