import './Cart.scss'
import CartBasketHolder from "../Components/CardBasketHolder/index.jsx";
import {Header} from "../Components/Header/Index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {postOrder} from "../../redux/slices/ordersSlice.js";

const Cart = () => {
    const {items} = useSelector((state) => state.cart);
    const {id, token} = useSelector((state) => state.user);


    const dispatch = useDispatch()
    const itemsAmount = items.reduce((acc, current) => acc + current.count, 0);

    console.log(items)

    const handleOrderFlowers = () => {
        const itemsArray = items.map(item => ({
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            count: item.count
        }));

        const data = {
            "user": {
                id: id
            },
            "products": itemsArray
        }

        console.log(data)
        dispatch(postOrder({token, data}))
    }

    return (
        <>
            <Header />
            <div className="order-wrapper">
                <div className="scroll-container">
                    <div className="item-wrapper">
                        {
                            items && items.map((item) => (
                                <CartBasketHolder key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
                <div className="order-menu" onClick={handleOrderFlowers}>
                    <div className="total-price">
                        <span>Total: {itemsAmount}</span>
                    </div>
                    <button>Buy</button>
                </div>
            </div>
        </>
    );
};

export default Cart;
