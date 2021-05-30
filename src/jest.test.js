const { sum, subtractionAsync } = require('./utils/math')

// test("adds number", () => {
//     expect(sum(1, 2)).toBe(3);
// })

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