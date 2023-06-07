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
