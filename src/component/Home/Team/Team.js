import React from 'react';
import JosephAustin from '../../../images/Joseph Austin.jpg';
import davidHannan from '../../../images/David Hannan.jpg';
import cherylHarris from '../../../images/Cheryl Harris.jpg';

const Team = () => {
    return (
        <div className="container mt-5 mb-3">
            <div className="row">
            <div className="text-center mb-5">
                <h3 className="text-center mb-3">EXPERIENCED<span style={{ color: '#FF817E' }}>TEAM</span></h3>
                <p>To doesn't his appear replenish together called he of mad place won't<br/> wherein blessed second every wherein were meat kind wherein and martcin</p>
            </div>
            <div className="col-md-4">
                <div className="card rounded shadow p-3 mb-5 bg-body" style={{ width: "20rem" }}>
                    <img src={JosephAustin} className="card-img-top" alt="..."></img>
                    <div className="card-body text-center">
                        <h4 className="card-title">Joseph Austin</h4>
                        <div className="">
                            <p>Thai Message</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            <div className="card rounded shadow p-3 mb-5 bg-body" style={{ width: "20rem" }}>
                    <img src={davidHannan} className="card-img-top" alt="..."></img>
                    <div className="card-body text-center">
                        <h4 className="card-title">David Hannan</h4>
                        <div className="">
                            <p>Thai Message</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            <div className="card rounded shadow p-3 mb-5 bg-body" style={{ width: "20rem" }}>
                    <img src={cherylHarris} className="card-img-top" alt="..."></img>
                    <div className="card-body text-center">
                        <h4 className="card-title">Cheryl Harris</h4>
                        <div className="">
                            <p>Thai Message</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Team;