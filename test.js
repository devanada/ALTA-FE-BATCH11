function primeNumber(number) {
  // your code here
  if (number === 1) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

// console.log(primeNumber(11)); // true
// console.log(primeNumber(13)); // true
// console.log(primeNumber(17)); // true
// console.log(primeNumber(20)); // false
// console.log(primeNumber(35)); // false

function palindrome(string) {
  // your code here
  let reversed = string.split("").reverse().join("");

  return string === reversed;
}

console.log(palindrome("civic")); // true
console.log(palindrome("katak")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("kupu-kupu")); // false
console.log(palindrome("lion")); // false
