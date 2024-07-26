import { useState, useEffect } from 'react';
import axios from 'axios';


import './Order.scss'
import CardOrderHolder from "../Components/CardOrderHolder/index.jsx";
import {Header} from "../Components/Header/Index.jsx";

const OrderConfirmation = () => {
    const [orders, setOrders] = useState([]);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const fetchOrders = async () => {
        try {
            const ordersResponse = await axios.get(`http://localhost:8083/api/v1/order/user/2`);
            setOrders(ordersResponse.data.body);
            console.log('Orders:', ordersResponse.data.body); // Logging orders
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };


    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            <Header />
            <div className="orders-wrapper">
                <div className="order-items">
                    {orders.map((order) => (
                        <CardOrderHolder key={order.id} order={order}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OrderConfirmation;
