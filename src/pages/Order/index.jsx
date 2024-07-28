import { useEffect } from 'react';


import './Order.scss'
import CardOrderHolder from "../Components/CardOrderHolder/index.jsx";
import {Header} from "../Components/Header/Index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchOrder} from "../../redux/slices/ordersSlice.js";

const OrderConfirmation = () => {
    const dispatch = useDispatch()
    const { orders } = useSelector((state) => state.orders)

    useEffect(() => {
        dispatch(fetchOrder({id: 52}))
    }, []);

    return (
        <>
            <Header />
            <div className="orders-wrapper">
                <div className="order-items">
                    {orders && orders.map((order) => (
                        <CardOrderHolder key={order.id} order={order}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OrderConfirmation;
