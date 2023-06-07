import React, {useState} from 'react';

// This component represents the form for entering the number of each type of shirt and calculating the total cost.
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
        <div>
            <h1>Shirt Store Discounts</h1>
            <form>
                {shirtCounts.map((count, index) => (
                    <div key={index}>
                        <label>{`Shirt ${index + 1}:`}</label>
                        <input type="number" min="0" value={count}
                               onChange={(event) => handleShirtCountChange(index, event)}/>
                    </div>
                ))}
                <button type="button" onClick={calculateTotal}>Calculate Total</button>
            </form>
            <p>{`Total Cost: $${totalCost.toFixed(2)}`}</p>
        </div>
    );
}

export default ShirtForm;

