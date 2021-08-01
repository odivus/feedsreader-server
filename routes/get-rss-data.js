module.exports = async (parser, source) => {
  return await parser.parseURL(source);
}