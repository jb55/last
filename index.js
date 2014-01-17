module.exports = function(xs) {
  return xs && xs.length && xs.length > 0 ? xs[xs.length - 1] : null;
};
