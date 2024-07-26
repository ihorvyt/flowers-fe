import './CardBasketHolder.scss'


const CartBasketHolder = () => {
    return (
        <div className="cart">
            <div className="cart-image-container">
                    <img
                        src={`http://localhost:8083/api/v1/products/images/`}
                    />
            </div>
            <div className="cart-content">
                <div className="cart-title">name</div>

                <div className="cart__price-and-counter">
                    <div className="cart__price">2</div>
                    <div className="cart__counter">
                        <div className="cart__counter-inner">
                            <div className="cart__counter-controls">
                                <button
                                    className="cart__counter-control cart__counter-control--minus"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                        <path d="M27.7169 18.7874L10.6052 18.7874" stroke="#FF4693" stroke-width="2.77488" stroke-linecap="round"/>
                                        <path d="M27.7169 18.7874L10.6052 18.7874" stroke="black" stroke-opacity="0.2" stroke-width="2.77488" stroke-linecap="round"/>
                                    </svg>
                                </button>
                                <div className="cart__counter-num">2</div>
                                <button
                                    className="cart__counter-control cart__counter-control--plus"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
                                        <rect x="0.00158691" y="0.287964" width="36.9984" height="36.9984" rx="11.789" fill="#FF4693"/>
                                        <rect x="0.00158691" y="0.287964" width="36.9984" height="36.9984" rx="11.789" fill="black" fill-opacity="0.2"/>
                                        <path d="M26.8256 18.7874L9.71379 18.7874" stroke="#FCFCFC" stroke-width="2.77488" stroke-linecap="round"/>
                                        <path d="M18.2703 27.3431L18.2703 10.2314" stroke="#FCFCFC" stroke-width="2.77488" stroke-linecap="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-remove-button">
                <button className="remove-button">
                    Remove
                </button>
            </div>
        </div>
    );
};


export default CartBasketHolder;
