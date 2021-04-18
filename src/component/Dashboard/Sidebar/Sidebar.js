import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faLock, faSignOutAlt, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://desolate-stream-48500.herokuapp.com/isAdmin', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {
                  isAdmin &&  <div>
                        <li>
                            <Link to="/addService" className="text-white">
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/allOrder" className="text-white">
                                <FontAwesomeIcon icon={faLock} /> <span>All Orders</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin" className="text-white" >
                                <FontAwesomeIcon icon={faCog} /> <span>Add Admin</span>
                            </Link>
                        </li>

                    </div>
                }
                <li>
                    <Link to="/order" className="text-white">
                        <FontAwesomeIcon icon={faCartArrowDown} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faLock} /> <span>Order list</span>
                    </Link>
                </li>

                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faEnvelope} /> <span>Review</span>
                    </Link>
                </li>

            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;