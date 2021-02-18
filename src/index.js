const { sum } =  require('./utils/math.js');

// 自制minijest。
let result, expected;

result = sum(1, 2);
expected = 3;

if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}
