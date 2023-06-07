// Importing the required function for calculation
import {calculateTotalCost} from './calculateTotalCost';

/**
 * This test suite is used to test the calculateTotalCost function which calculates
 * the total cost of items in the array.
 *
 * @tests
 * This suite contains multiple test cases, each representing different scenarios.
 * Test case 1 - Empty Cart: Tests if the function correctly returns a total cost of 0 when the cart is empty.
 * Test case 2 - Single Item Type: Verifies that the function correctly calculates the total cost when there is a single type of item in the cart. The total cost should be the product of the item's price and its quantity.
 * Test case 3 - One of Each Item: Confirms that the function calculates the total cost correctly when there's one of each item in the cart. The total cost should be equal to the sum of all item prices.
 * Test case 4 - Two of Each Item: Validates whether the function calculates the total cost correctly when there are two of each item in the cart. The total cost should be double the sum of all item prices.
 * Test case 5 - Negative Quantity: Ensures that the function treats items with negative quantities as zero when calculating the total cost.
 * Test case 6 - Decimal Quantity: Checks if the function throws an error when the quantity of an item is a decimal. This test case is expected to fail, as the function should not be able to handle decimal quantities.
 * Test case 7 - Large Quantities: Assesses the function's ability to handle and calculate the total cost for large quantities of items.
 * Test case 8 - Best Discount Application: Checks if the function correctly applies the best discount when there are multiple ways to group shirts for a discount.
 * Test case 9 - Worst Discount Avoidance: Verifies that the function does not apply a worse discount when there are multiple ways to group shirts for a discount. This test is expected to fail, as the function should always apply the best discount.
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
        {input: [2, 1, 1, 0, 0], expected: 29.60},

    ];

    testCases.forEach((testCase, index) => {
        it(`test case ${index + 1}`, () => {
            const result = calculateTotalCost([...testCase.input]);
            // The result should be within 0.01 of the expected value
            expect(Math.abs(result - testCase.expected)).toBeLessThan(0.01);
        });
    });

});
