const express = require('express');
const router = express.Router();

const parser = require('../utilities/rss-parser');
const getRssData = require('./get-rss-data');

module.exports = router.post('/info', function (req, res) {
  const rssData = req.body;
  const rssUrl = rssData.rssUrl;

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