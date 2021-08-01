const getRssData = require('./get-rss-data');
const parsedDataModify = require('../utilities/parsed-data-modify');
const feedsDataModify = require('../utilities/feeds-data-modify');

module.exports = function(app, parser) {
  app.post('/data', function (req, res) {
    const rssSources = req.body.rssUrl;

    async function getParsedData(rssSources) {
      const parsedData = [];
        
      await rssSources.forEach(item => {
        const data = getRssData(parser, item);
        parsedData.push(data);
        });
        
      return parsedData;
    }

    getParsedData(rssSources)
      .then(data => {
        Promise.allSettled(data)
          .then(result => {
            const resultFulfilled = result.filter(item => {
              return item.status === 'fulfilled';
            });

            const parsedData = parsedDataModify(resultFulfilled);

            const feedsData = feedsDataModify(parsedData);

            if (parsedData) {
              res.json({ parsedData: feedsData });
            } else {
              res.json({ parsedData: null });
            }
          })
          .catch(error => console.error(error.message));
        })
      })
}