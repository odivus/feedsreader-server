const express = require('express');
const cheerio = require('cheerio');
const needle = require('needle');
const router = express.Router();

const formatSourceTextImgUrl = require('../utilities/format-source-text-relative-urls');

module.exports = router.post('/text', function (req, res) {
  const feedLink = req.body.feedLink;

  needle('get', feedLink)
    .then(data => {
      const $ = cheerio.load(data.body, { decodeEntities: false });
      const result = $.html('p');
      
      res.set('Access-Control-Allow-Origin', '*');
      res.json( formatSourceTextImgUrl(result, feedLink) );
    })
    .catch(error => console.log(error.message));
});