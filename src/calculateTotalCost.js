/**
 * The calculateTotalCost function calculates the total cost of an order
 * based on the quantity of each type of shirt and the applicable discounts.
 *
 * The function uses a group discounting strategy. It repeatedly groups
 * together one shirt of each type until there are no more shirts that can
 * be added to the group. For each group, it applies a discount rate
 * corresponding to the size of the group, and then adds the cost of the group
 * to the total cost. The group discount rates are defined as follows:
 * - 1 shirt: No discount, i.e., the price is the base price.
 * - 2 shirts: 5% discount
 * - 3 shirts: 10% discount
 * - 4 shirts: 15% discount
 * - 5 shirts: 20% discount
 *
 * @param {Array<number>} shirtCounts An array representing the number of each type of shirt.
 * This function supports up to 5 different types of shirts, each represented by an integer
 * count at the corresponding index of the array. For instance, [1, 2, 0, 0, 0] represents
 * an order of 1 shirt of the first type and 2 shirts of the second type.
 *
 * @returns {number} The total cost of the order, applying the best discount available for each group of shirts.
 * The cost is a floating point number representing the total cost in monetary units (for instance, in dollars if
 * the base price of a shirt is in dollars).
 *
 * @example
 * calculateTotalCost([2, 2, 2, 1, 1]); // returns 53.60
 */
export const calculateTotalCost = (shirtCounts) => {
    const discounts = [1, 0.95, 0.9, 0.85, 0.8];
    let totalCost = 0;

    while (shirtCounts.some(count => count > 0)) {
        let groupSize = 0;
        for (let i = 0; i < shirtCounts.length; i++) {
            if (shirtCounts[i] > 0) {
                shirtCounts[i]--;
                groupSize++;
            }
        }
        totalCost += 8 * groupSize * discounts[groupSize - 1];
    }

    return totalCost;
}
