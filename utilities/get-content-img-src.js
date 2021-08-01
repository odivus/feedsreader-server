module.exports = function(content) {
  if (content && typeof content === 'string') {
    let imgSrc = /.*?<img.*?src="(.*?)"[^\>]?|[^\/>]?>/,
        result = imgSrc.exec(content);

    return result ? result[1] : '';
  }
}
