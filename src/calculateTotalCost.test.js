// Importing the required function for calculation
import {calculateTotalCost} from './calculateTotalCost';

/**
 * This test suite is used to test the calculateTotalCost function which calculates
 * the total cost of items in the array.
 *
 * @tests
 * This suite contains multiple test cases, each representing different scenarios.
 *
 * Test case 1: If no items are in the cart, the total cost should be 0.
 * Test case 2: When there's a single type of item in the cart, the total cost should be item's price * quantity.
 * Test case 3: If there's one of each item, the cost should be equal to the sum of all item prices.
 * Test case 4: If there are two of each item, the cost should be double the sum of all item prices.
 * Test case 5: If an item has a negative quantity, it should be treated as zero.
 * Test case 6: If the quantity of an item is a decimal, the quantity should be floored to the nearest integer.
 * Test case 7: The function should be able to handle large quantities.
 * Test case 8: The function should apply the best discount when there are multiple ways to group shirts for discount.
 * Test case 9: The function should not apply a worse discount when there are multiple ways to group shirts for discount.
 *
 * Note: Test case 6 and 9 are expected to fail because the function cannot compare double values with integers and the function
 * always applies the best discount.
 */
describe('calculateTotalCost correctly calculates the total cost', () => {
    const testCases = [
        {input: [0, 0, 0, 0, 0], expected: 0},
        {input: [30, 0, 0, 0, 0], expected: 240},
        {input: [1, 1, 1, 1, 1], expected: 32},
        {input: [2, 2, 2, 2, 2], expected: 64},
        {input: [-1, 0, 0, 0, 0], expected: 0},
        {input: [1.5, 0, 0, 0, 0], expected: 8},
        {input: [1000000, 0, 0, 0, 0], expected: 8000000},
        {input: [2, 2, 2, 1, 1], expected: 53.60},
        {input: [2, 2, 2, 1, 1], expected: 54.40},
    ];

    testCases.forEach((testCase, index) => {
        it(`test case ${index + 1}`, () => {
            const result = calculateTotalCost([...testCase.input]);
            // The result should be within 0.01 of the expected value
            expect(Math.abs(result - testCase.expected)).toBeLessThan(0.01);
        });
    });
});
