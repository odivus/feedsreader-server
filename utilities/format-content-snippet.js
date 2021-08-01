module.exports = function(contentSnippet) {
  if (contentSnippet && typeof contentSnippet === 'string') {
    let twoSentences = /^[а-яА-Яa-zA-Z]*[^.!?]*[.!?]*\s[а-яА-Яa-zA-Z]*[^.!?]*[.!?]/;
    let result = twoSentences.exec(contentSnippet);

    if (result) return result[0];
  }
}
