const { sum, subtractionAsync } =  require('./utils/math.js');
// const { expect, test } = require('../lib/index');

// 自制minijest。

// 核心就是 当actual result和expected output不一致的时候 throws error


// let result, expected;

// result = sum(1, 2);
// expected = 3;

// if (result !== expected) {
//     throw new Error(`${result} is not equal to ${expected}`);
// }

// result = subtraction(2, 1)
// expected = 1;

// if (result !== expected) {
//     throw new Error(`${result} is not equal to ${expected}`)
// }
test("adds number", () => {
    expect(sum(1, 2)).toBe(3);
})

test("adds number", async () => {
    const result = await subtractionAsync(3, 1);
    const expected = 2;
    expect(result).toBe(expected);
})

test("adds number", () => {
    expect(sum(1, 5)).toBe(6);
})
