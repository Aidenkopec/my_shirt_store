/**
 * This is a React component representing a form for calculating the cost of a shirt order.
 * It allows entering the number of each type of shirt, and it calculates the total cost
 * based on the quantity of each shirt type and their applicable discounts.
 *
 * The component has two states: `shirtCounts` and `totalCost`.
 * `shirtCounts` is an array of five integers, representing the quantity of each type of shirt.
 * `totalCost` is a floating point number, representing the total cost of the order.
 *
 * @component
 * @example
 * return (
 *   <ShirtForm />
 * )
 *
 * @returns A form with five input fields for the number of each type of shirt, a "Calculate Total" button,
 * and a message that displays the total cost. When the "Calculate Total" button is clicked,
 * the total cost is calculated based on the entered shirt counts and the applicable discounts,
 * and the total cost message is updated.
 *
 * Each input field is a number input field that accepts non-negative integers.
 * When the value of an input field changes, the corresponding element of the `shirtCounts` array is updated.
 *
 * The "Calculate Total" button triggers the calculation of the total cost,
 * which is done by the `calculateTotalCost` function, and then updates the `totalCost` state.
 */
import React, {useState} from 'react';

const ShirtForm = () => {
    // shirtCounts represents the number of each type of shirt. It's an array of five numbers.
    const [shirtCounts, setShirtCounts] = useState([0, 0, 0, 0, 0]);
    // totalCost represents the total cost of the shirts, calculated based on the number of each type of shirt and the corresponding discount.
    const [totalCost, setTotalCost] = useState(0);

    // This function calculates the total cost based on the number of each type of shirt and the corresponding discount.
    const calculateTotalCost = (shirtCounts) => {
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

    // This function is called when the "Calculate Total" button is clicked. It calculates the total cost and updates the totalCost state.
    const calculateTotal = () => {
        const totalCost = calculateTotalCost([...shirtCounts]);
        setTotalCost(totalCost);
    }

    // This function is called when the value of an input field changes. It updates the corresponding element of the shirtCounts array.
    const handleShirtCountChange = (index, event) => {
        const newShirtCounts = [...shirtCounts];
        newShirtCounts[index] = Math.max(0, parseInt(event.target.value) || 0);
        setShirtCounts(newShirtCounts);
    }

    // The component renders a form with five input fields for the number of each type of shirt, a "Calculate Total" button, and a message that displays the total cost.
    return (
        <div className="flex flex-col items-center justify-center mt-10 w-full  ">
            <form className="space-y-4 justify-center items-center">
                {shirtCounts.map((count, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <label className="text-lg">{`Shirt ${index + 1}:`}</label>
                        <input type="number" min="0" value={count}
                               onChange={(event) => handleShirtCountChange(index, event)}
                               className="border-2 rounded-md p-2"/>
                    </div>
                ))}
                <button type="button" onClick={calculateTotal}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Calculate Total
                </button>
            </form>
            <p className=" font-inter font-medium text-m text-gray-700 text-lg mt-4">{`Total Cost: $${totalCost.toFixed(2)}`}</p>
        </div>
    );
}

export default ShirtForm;

