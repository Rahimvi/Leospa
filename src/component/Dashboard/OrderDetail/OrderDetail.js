import React from 'react';
// import Sidebar from '../Sidebar/Sidebar';
import './OrderDetail.css';
const OrderDetail = (props) => {
    const { name, email, photo, book } = props.order;
    return (
            
                <div>
                    <div className="card rounded shadow mt-5 mb-3 align-items-center" style={{ width: "18rem" }}>
                        <img style={{width: "200px"}} src={photo} className="card-img-top" alt="..."></img>
                        <div className="card-body text-center">
                            <h5 className="card-title">User Name: {name}</h5>
                            <div className="">
                                <p className="card-text">Email: {email}</p>
                                <p className="card-text">{book.name}</p>
                                <p className="card-text">Price: ${book.price}</p>

                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default OrderDetail;