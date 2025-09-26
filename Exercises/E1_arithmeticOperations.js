// ===============================================================================
// EXERCISE #1
// Create a simple program with javascript function then use arithmetic operations
// ===============================================================================

// FUNCTION: Perform addition for n numbers and return its sum
const add = (...nums) => {
    let sum = 0;

    for (let i of nums) {
        sum += i;
    } return sum
}

// FUNCTION: Perform subtraction for n numbers and return its difference
const subtract = (...nums) => {
    let difference = nums[0];

    for (let i = 1; i < nums.length; ++i) {
        difference -= nums[i];
    } return difference;
}

// FUNCTION: Perform multiplication for n numbers and return its product
const multiply = (...nums) => {
    let product = 1;

    for (let i of nums) {
        product *= i;
    } return product;
}

// FUNCTION: Perform division for n numbers and return its quotient
const divide = (...nums) => {
    let quotient = nums[0];

    for (let i = 1; i < nums.length; ++i) {
        quotient /= nums[i];
    } return quotient;
}

// FUNCTION: Perform modulo operation for n numbers and return its remainder
const modulo = (...nums) => {
    let remainder = nums[0];

    for (let i = 1; i < nums.length; ++i) {
        remainder %= nums[i];
    } return remainder;
}

console.log(add(3, 4, 5));
console.log(subtract(3, 4, 5));
console.log(multiply(3, 4, 5));
console.log(divide(10, 2, 2));
console.log(modulo(10, 2, 2));