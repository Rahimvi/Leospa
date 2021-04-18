import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const ServiceEdit = (props) => {
    const {name, price, _id} = props.allService;
    const handleDeleteService = id => {
        fetch('https://desolate-stream-48500.herokuapp.com/deleteService/'+id, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log('delete success', data);
        })

    }
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th style={{color: "#FF817E"}} scope="col">Name</th>
                        <th style={{color: "#FF817E"}} scope="col">Price</th>
                        <th style={{color: "#FF817E"}} scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{name}</th>
                        <td>${price}</td>
                        <td><FontAwesomeIcon onClick={() => handleDeleteService(_id)} style={{color: "#FF817E", cursor: "pointer"}} icon={faTrashAlt} /></td>
                    </tr>
                    
                </tbody>
            </table>

        </div>
    );
};

export default ServiceEdit;