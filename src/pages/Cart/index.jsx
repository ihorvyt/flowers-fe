import './Cart.scss'
import CartBasketHolder from "../Components/CardBasketHolder/index.jsx";
import {Header} from "../Components/Header/Index.jsx";

const Cart = () => {
    const cartItems = []

    return (
        <>
            <Header />
            <div className="order-wrapper">
                <div className="scroll-container">
                    <div className="item-wrapper">
                        <CartBasketHolder/>
                    </div>
                </div>
                <div className="order-menu">
                    <div className="total-price">
                        <span>Total: 2</span>
                    </div>
                    <button>Buy</button>
                </div>
            </div>
        </>
    );
};

export default Cart;
