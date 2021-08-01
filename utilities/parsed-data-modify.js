const formatIsoDate = require('./format-iso-date');
const formatCategories = require('./format-categories');
const formatContentSnippet = require('./format-content-snippet');
const getContentImgSrc = require('./get-content-img-src');

module.exports = function(parsedData) {
  try {
    if (!Array.isArray(parsedData)) 
      throw new Error('Wrong argument type. It must be an Array');

    // Get only 'Value' field from Data Object
    let parsedDataModify = parsedData.map((item) => item.value);

    // Limit news feeds to 20 items
    parsedDataModify
      .map(item => {
        return (item.items.length > 20)
          ? item.items = item.items.slice(0, 20)
          : item;
      })

    // Clear 'Categories' from Array and Object and convert to string 
    // Other data fields corrections
    parsedDataModify
      .map(item => {
        return item.items.map(item => {
          if (item.isoDate && typeof item.isoDate === 'string') {
            item.date = formatIsoDate(item.isoDate, item.pubDate);
          }

          if (item.categories) {
            item.categories = formatCategories(item.categories);
          }

          if (!item.enclosure && item.content) {
            item.enclosure = {
              url: getContentImgSrc(item.content)
            };
          }

          if (item.contentSnippet) {
            item.contentFormatted = formatContentSnippet(item.contentSnippet);
          } else {
            item.contentFormatted = '';
          }
        })
      });

      return parsedDataModify;
  }

  catch(error) {
    console.error(error.message);
  }
}