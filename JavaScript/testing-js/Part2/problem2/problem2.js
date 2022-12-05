function studentScore(score) {
  let result = "";

  if (score >= 0 && score <= 34) result = "D";
  else if (score >= 35 && score <= 49) result = "C";
  else if (score >= 50 && score <= 64) result = "B";
  else if (score >= 65 && score <= 79) result = "B+";
  else if (score >= 80 && score <= 100) result = "A";
  else result = "invalid";

  return result;
}

module.exports = studentScore;
