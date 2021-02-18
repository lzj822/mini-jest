const { sum } = require('./utils/math')

test("adds number", () => {
    expect(sum(1, 2)).toBe(3);
})