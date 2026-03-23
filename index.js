
// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };


function calculateTax(amount) {
  return amount * 0.10;
}


function convertToUpperCase(text) {
  return text.toUpperCase();
}


function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}


function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  return word === reversed;
}


function calculateDiscountedPrice(originalPrice, discountPercentage) {
  let discount = (discountPercentage / 100) * originalPrice;
  return originalPrice - discount;
}


// EXPORTING THE FUNCTIONS
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};










