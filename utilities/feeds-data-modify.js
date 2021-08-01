module.exports = function(parsedData) {
  const feeds = [];

  parsedData.forEach(outer => {
    outer.items.forEach(inner => {
      let feedItem = {};
      
      if (inner.enclosure) {
        if (inner.enclosure.url) feedItem.enclosure = inner.enclosure;
      }
      
      feedItem.id = inner.id;

      feedItem.sourceTitle = outer.title ? outer.title : '',
      feedItem.sourcelink = outer.link ? outer.link : '',
      feedItem.sourceImg = outer.image ? outer.image : '',
      feedItem.feedUrl = outer.feedUrl ? outer.feedUrl : '',
      feedItem.title = inner.title ? inner.title : '',
      feedItem.link = inner.link ? inner.link : '',
      feedItem.pubDate = inner.pubDate ? inner.pubDate : '',
      feedItem.fulltext = inner.fulltext ? inner.fulltext : '',
      feedItem.content = inner.content ? inner.content : '',

      feedItem.contentSnippet = inner.contentSnippet 
                              ? inner.contentSnippet : '',

      feedItem.categories = inner.categories ? inner.categories : '',
      feedItem.isoDate = inner.isoDate ? inner.isoDate : '',
      feedItem.date = inner.date = inner.date ? inner.date : '',

      feedItem.contentFormatted = inner.contentFormatted 
                                ? inner.contentFormatted : '',
      
      feeds.push(feedItem);
    });
  });

  feeds.sort((a, b) => {
    if (a.isoDate && b.isoDate) {
      return Date.parse(b.isoDate) - Date.parse(a.isoDate);
    }
  });

  return feeds;
}