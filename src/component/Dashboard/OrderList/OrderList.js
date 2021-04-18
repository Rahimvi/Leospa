import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderDetail from '../OrderDetail/OrderDetail';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const [orders, setOrders] = useState([]);
        useEffect(() => {
            fetch('https://desolate-stream-48500.herokuapp.com/orderDetails?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
        },[])
    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="order-container col-md-8 justify-content-around">
        
                    {
                        orders.map(order => <OrderDetail order={order}></OrderDetail>)
                    }
            
            </div>
        </div>
    );
};

export default OrderList;