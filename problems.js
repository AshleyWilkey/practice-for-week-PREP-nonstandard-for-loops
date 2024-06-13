function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here

  return arr.filter((_num, i) => i % 2 === 1);
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here

  return arr.filter((_num, i) => i % 2 === 1).reverse();
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  return arr.filter((_num, i) => isPowerOf(2, i));
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  return arr.filter((_num, i) => isPowerOf(n, i));
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  return arr;
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
}

function isPowerOf(x, y) {
  // The only power of 1 is 1 itself
  if (x == 1) return y == 1;

  // Repeatedly compute power of x
  let pow = 1;
  while (pow < y) pow = pow * x;

  // Check if power of x becomes y
  return pow == y;
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
