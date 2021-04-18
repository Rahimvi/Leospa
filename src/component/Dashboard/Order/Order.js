import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Order = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [book, setBook] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {orderId} = useParams();
    const onSubmit = () => {
        const newOrder = {
            ...loggedInUser,
            book
        }
        const url = `https://desolate-stream-48500.herokuapp.com/addOrder`;

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newOrder)
        })
    }
    useEffect(() => {
        fetch('https://desolate-stream-48500.herokuapp.com/order/'+orderId)
        .then(res => res.json())
        .then(data => setBook(data))
    },[orderId])
    
    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 d-flex justify-content-center">
            <div className="form-container border mt-5 p-5">
                <h3 className="mb-4 text-center">Place Your Order</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label class="form-label">Your Name</label>
                    <input className="form-control" name="name" placeholder={loggedInUser.name}/>
                    
                    <label class="form-label mt-4">Your Email</label>
                    <input className="form-control mb-4" name="number" type="email" placeholder={loggedInUser.email}/>
                    <Elements stripe={stripePromise}>
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#000',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                    </Elements>
                    <p className="mt-4">Your Service Charged Will Be ${book.price}</p>
                    <input className="btn btn-brand text-white mt-4" type="submit" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default Order;