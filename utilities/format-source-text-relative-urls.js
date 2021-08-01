module.exports = function(feedText, feedLink) {
  let http = feedLink.split('/')[0];
  let domain = feedLink.split('/')[2];

  return feedText
    .replace(/src="\//g, 'src="' + http + '//' + domain + '/')
    .replace(/href="\//g, 'href="' + http + '//' + domain + '/');
}