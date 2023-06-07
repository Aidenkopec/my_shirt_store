import {calculateTotalCost} from './calculateTotalCost';

describe('calculateTotalCost correctly calculates the total cost', () => {
    const testCases = [
        {input: [0, 0, 0, 0, 0], expected: 0},
        {input: [30, 0, 0, 0, 0], expected: 240},
        {input: [1, 1, 1, 1, 1], expected: 32},
        {input: [2, 2, 2, 2, 2], expected: 64},
        {input: [-1, 0, 0, 0, 0], expected: 0},
        {input: [1.5, 0, 0, 0, 0], expected: 8}, // Will fail due to double values not being able to be compared to integers
        {input: [1000000, 0, 0, 0, 0], expected: 8000000},
        {input: [2, 2, 2, 1, 1], expected: 53.60}, // 1 group of 5 shirts and 1 group of 3 shirts
        {input: [2, 2, 2, 1, 1], expected: 54.40}, // 2 groups of 4 shirts, will fail because application always provides the best discount.
    ];

    testCases.forEach((testCase, index) => {
        it(`test case ${index + 1}`, () => {
            const result = calculateTotalCost([...testCase.input]);
            expect(Math.abs(result - testCase.expected)).toBeLessThan(0.01);
        });
    });
});
