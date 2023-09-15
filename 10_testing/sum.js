exports.sum = (...args) => {
  return args.reduce((sum, currentValue) => round(sum + currentValue, 5), 0);
};

function round(value, mantissaPoint) {
  const discharge = Math.pow(10, mantissaPoint);

  return Math.round(value * discharge) / discharge;
}
