function exponentiation(x, n) {
  if (x < 0 || n < 0) return "wrong input";

  return x ** n;
}

module.exports = exponentiation;
