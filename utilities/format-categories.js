module.exports = function(categories) {
  let formatedCategories = categories.map(item => {
    if (item instanceof Object) {
      return item = Object.values(item)
        .filter(item => {
          return typeof item === 'string' && !item.includes('http')
        })
        .toString().split(',').join(', ');
    } else {
      return item.toString().split(',').join(', ');
    }
  }).toString().split(',').join(', ');

  return formatedCategories;
}
