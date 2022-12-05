function compareString(a, b) {
  if (b.length > a.length && b.includes(a)) {
    return a;
  }
  if (a.includes(b)) {
    return b;
  }
  return "";
}

module.exports = compareString;
