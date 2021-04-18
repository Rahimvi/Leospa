import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Review = (props) => {
    const {name, imageURL, description} = props.review;
    return (
        <div className="col-md-4">
            <div className="card rounded shadow p-3 mb-5 bg-body" style={{width: "20rem"}}>
                <img src={imageURL} className="card-img-top" alt="..."></img>
                    <div className="card-body text-center">
                        <h4 className="card-title">{name}</h4>
                        <div className="">
                            <p className="mb-3"><small>{description}</small></p>
                            <FontAwesomeIcon style={{color: "#FF817E", fontSize: "25px"}} icon={faStar} />
                            <FontAwesomeIcon style={{color: "#FF817E", fontSize: "25px"}} icon={faStar} />
                            <FontAwesomeIcon style={{color: "#FF817E", fontSize: "25px"}} icon={faStar} />
                        </div>
                    </div>
            </div>  

        </div>
    );
};

export default Review;