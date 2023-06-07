/**
 * This is the main App component of the application.
 *
 * The component imports the ShirtForm component, which represents a form for
 * calculating the total cost of an order based on the quantity of each type of shirt.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 *
 * @returns The App component returns a container div that houses two other divs. The first div with className 'main'
 * contains a div with className 'gradient' which can be used to apply a CSS gradient background.
 *
 * The second div with className 'app' is used to contain and display the ShirtForm component. This div can be
 * styled to present the form in a specific way, such as centering it on the page or applying a specific margin or padding.
 *
 * The overall structure of the component allows for a main section that can be used for general application or
 * page styling and an app section for the specific display of the ShirtForm.
 */

import React from 'react';
import ShirtForm from "./components/ShirtForm";
import DiscountHero from "./components/DiscountHero";
import './App.css';

function App() {
    return (
        <div>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <div className='app'>
                <DiscountHero />
                <ShirtForm/>
            </div>
        </div>
    );
}


export default App;
