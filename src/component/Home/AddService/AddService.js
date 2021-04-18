import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AllService from '../../Dashboard/AllService/AllService';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './AddService.css';

const AddService = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            price: data.number,
            description: data.text,
            imageURL: imageURL
        }
        const url = `https://desolate-stream-48500.herokuapp.com/addService`;

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(serviceData)
        })
    }
    const handleImageUpload = event => {
        console.log(event.target.files)
        const imageData = new FormData();
        imageData.set('key', '771368773d117114d2c99c89564cde08');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-8 d-flex justify-content-center">
            <div className="form-container border mt-5 p-5">
                <h3 className="text-center mb-4">Add Service</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control" name="name" placeholder="Service Name" ref={register} />

                    <input className="form-control mt-4" name="number" type="number" placeholder="Price" ref={register}/>

                    <input className="form-control mt-4" name="text" type="textField" placeholder="Description" ref={register}/>

                    <input className="form-control mt-4" name="exampleRequired" type="file" onChange={handleImageUpload} />

                    <input className="btn btn-brand text-white mt-4" type="submit" />
                </form>
            </div>
                <AllService></AllService>
            </div>

        </div>
    );
};

export default AddService;