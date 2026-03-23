
// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

calculateTax = (price, taxRate) => {
    return price * (taxRate / 100);
}   

convertToUpperCase = (str) => {
    return str.toUpperCase();
}   

findMaximum = (arr) => {
    return Math.max(...arr);
}   
isPalindrome = (str) => {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}   
calculateDiscountedPrice = (price, discount) => {
    return price - (price * (discount / 100));
}   














