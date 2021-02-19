const myMap = (array, cb) => {
  let mapped = [];

  array.forEach((el) => {
  let modEl = cb(el)
  mapped.push(modEl)});
  return mapped;
};

module.exports = myMap;