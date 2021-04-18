import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email: data.email
        }
        const url = `https://desolate-stream-48500.herokuapp.com/addAdmin`;

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(adminData)
        })
    }
    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 d-flex justify-content-center">
            <div className="form-container border mt-5 p-5">
            <h3 className="mb-4">Add Admin</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control" name="name" placeholder="Your Name" ref={register} />

                    <input className="form-control mt-4" name="email" type="email" placeholder="Email" ref={register}/>

                    <input className="btn btn-brand text-white mt-4" type="submit" />
                </form>
            </div>

            </div>
            
        </div>
    );
};

export default AddAdmin;