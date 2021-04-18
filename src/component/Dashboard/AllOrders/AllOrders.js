import React, { useEffect, useState } from 'react';
import AllOrdersDetail from '../AllOrdersDetail/AllOrdersDetail';
import Sidebar from '../Sidebar/Sidebar';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
        useEffect(() => {
            fetch('https://desolate-stream-48500.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
        },[])
    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 mt-5">
                <h3 className="mb-3 text-center">All Orders</h3>
        
                    {
                        allOrders.map(allOrder => <AllOrdersDetail allOrder={allOrder}></AllOrdersDetail>)
                    }
            
            </div>
            
        </div>
    );
};

export default AllOrders;