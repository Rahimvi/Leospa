import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Services = (props) => {

    const { name, price, imageURL, description, _id } = props.service;
    const history = useHistory();
    const handleClick = (orderId) => {
        const url = `/order/${orderId}`
        history.push(url);
    }
    
    return  (
        <div className="col-md-4 col-sm-12">
            <div className="card rounded shadow p-3 mb-5 bg-body" style={{ width: "20rem" }}>

                <img src={imageURL} className="card-img-top" alt="..."></img>
                <div className="card-body text-center">
                    <h4 className="card-title">{name}</h4>
                    <div className="">
                        <h5 className="card-text">Price: ${price}</h5>
                        <p><small>{description}</small></p>
                        <button className="btn btn-brand text-white" onClick={() => handleClick(_id)}>Order Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;