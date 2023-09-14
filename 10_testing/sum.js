exports.sum = (...args) => {
  return args.reduce((sum, currentValue) => sum + currentValue, 0);
};
