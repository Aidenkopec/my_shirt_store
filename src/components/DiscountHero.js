import React from 'react';

const DiscountHero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>

            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <button
                    type='button'
                    onClick={() =>
                        window.open("https://github.com/Aidenkopec", "_blank")
                    }
                    className='black_btn'
                >
                    GitHub
                </button>
            </nav>

            <h1 className='head_text'>
                Score Big with Our <br className="max-md:hidden"/>
                <span className="orange_gradient">
                 Discounts!
                </span>
            </h1>
            <p className="desc">
                Unlock exciting savings with our popular 5-piece collection! Each unique shirt costs just $8, but the
                more you mix and match, the more you save. Get a 5% discount for two different shirts, 10% for three,
                15% for four, and a whopping 20% off when you buy all five! Just remember, the discount applies to
                unique shirts in your cart. Happy shopping!
            </p>
        </header>
    );
};

export default DiscountHero;
