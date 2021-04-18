import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const OurService = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('https://desolate-stream-48500.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div className="container mt-5 pt-3">
            <h3 className="text-center">OUR <span style={{color: '#FF817E'}}>SERVICES</span></h3>
            <div className="row mt-5">
                {
                    services.map(service => <Services service={service}></Services>)
                }
            </div>
        </div>
    );
};

export default OurService;