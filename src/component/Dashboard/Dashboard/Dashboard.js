import React from 'react';
import Order from '../Order/Order';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 d-flex justify-content-center">

                </div>
            </div>
            
        </section>
    );
};

export default Dashboard;