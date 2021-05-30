const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;

const sumAsync = (...args) => Promise.resolve(sum(...args));
const subtractionAsync = (...args) => Promise.resolve(subtraction(...args));

module.exports = {sum, subtraction, sumAsync, subtractionAsync};