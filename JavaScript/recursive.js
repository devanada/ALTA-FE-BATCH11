function recursiveSolution(n) {
  if (n == 1) {
    console.log("Nilai n:", n);
    return n;
  } else {
    console.log("Nilai n:", n);
    const result = recursiveSolution(n - 1);
    console.log("hasil:", result);
    return n * result;
  }
}

function recursive(n) {
  console.time("recursive");
  const result = recursiveSolution(n);
  console.timeEnd("recursive");
  return result;
}

function iterativeSolution(n) {
  console.time("iterative");
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i; // result = result * i
  }
  console.timeEnd("iterative");
  return result;
}

console.log(recursive(5));
// console.log(iterativeSolution(5));
