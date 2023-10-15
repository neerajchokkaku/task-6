
import React from 'react';

const Header = () => {
    return (
        <div className="bg-dark text-white py-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center" style={{ textAlign: 'center' }}>
                    <h1 className="mb-0">My Portfolio</h1>
                    <ul className="list-unstyled mb-0 d-flex">
                        <li className="nav-item mx-3">
                            <a href="#About" className="nav-link text-white">
                                <i className="fas fa-user mr-2"></i>About
                            </a>
                        </li>
                        <li className="nav-item mx-3">
                            <a href="#projects" className="nav-link text-white">
                                <i className="fas fa-laptop-code mr-2"></i>Projects
                            </a>
                        </li>
                        <li className="nav-item mx-3">
                            <a href="#Contacts" className="nav-link text-white">
                                <i className="fas fa-envelope mr-2"></i>Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;