


import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-5 bg-warning">
            <div className="container">
                <h2 className="text-center mb-4 text-white">Contacts</h2>
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-4">
                        <div className="card text-center bg-primary text-white p-4">
                            <div className="card-body">
                                <h5 className="card-title">Email</h5>
                                <a href="mailto:your.email@example.com" className="text-white">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81zS5iQalaifkoCf9esjtwU2LpEIWxwSoGA&usqp=CAU" alt="Email" className="social-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card text-center bg-success text-white p-4">
                            <div className="card-body">
                                <h5 className="card-title">Instagram</h5>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81zS5iQalaifkoCf9esjtwU2LpEIWxwSoGA&usqp=CAU0" alt="Instagram" className="social-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card text-center bg-info text-white p-4">
                            <div className="card-body">
                                <h5 className="card-title">Facebook</h5>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81zS5iQalaifkoCf9esjtwU2LpEIWxwSoGA&usqp=CAU" alt="Facebook" className="social-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;