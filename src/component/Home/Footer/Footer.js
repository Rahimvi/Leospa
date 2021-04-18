import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="container text-center mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="mb-4" style={{color: "#FF817E"}}>Leospa</h2>
                    <FontAwesomeIcon className="me-3" style={{color: "#FF817E", fontSize: "35px"}} icon={faFacebook} />
                    <FontAwesomeIcon className="me-3" style={{color: "#FF817E", fontSize: "35px"}} icon={faInstagram} />
                    <FontAwesomeIcon className="me-3" style={{color: "#FF817E", fontSize: "35px"}} icon={faGoogle} />
                    <FontAwesomeIcon style={{color: "#FF817E", fontSize: "35px"}} icon={faYoutube} />
                    <p className="mt-3 mb-5">ALL RIGHTS <span style={{color: "#FF817E"}}>RESERVED</span></p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;