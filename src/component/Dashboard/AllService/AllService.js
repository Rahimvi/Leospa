import React, { useEffect, useState } from 'react';
import ServiceEdit from '../ServiceEdit/ServiceEdit';

const AllService = () => {
    const [allServices, setAllService] = useState([]);
    useEffect(() => {
        fetch('https://desolate-stream-48500.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setAllService(data))
    }, [])
    return (
        <div className="container mt-5 pt-3">
            <h3 className="text-center">All <span style={{color: '#FF817E'}}>SERVICES</span></h3>
            <div className="row mt-5">
                {
                    allServices.map(allService => <ServiceEdit allService={allService}></ServiceEdit>)
                }
            </div>
        </div>
    );
};

export default AllService;