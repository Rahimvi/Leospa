import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const AllOrdersDetail = (props) => {
    const { name, book, _id } = props.allOrder;

    const handleDelete = id => {
        fetch('https://desolate-stream-48500.herokuapp.com/deleteOrder/'+id, {
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
                        <th style={{color: "#FF817E"}} scope="col">Service Name</th>
                        <th style={{color: "#FF817E"}} scope="col">Price</th>
                        <th style={{color: "#FF817E"}} scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{name}</th>
                        <td>{book.name}</td>
                        <td>${book.price}</td>
                        <td><FontAwesomeIcon onClick={() => handleDelete(_id)} style={{color: "#FF817E", cursor: "pointer"}} icon={faTrashAlt} /></td>
                    </tr>
                    
                </tbody>
            </table>

        </div>
    );
};

export default AllOrdersDetail;