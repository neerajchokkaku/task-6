import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-5 bg-primary text-white">
            <div className="container">
                <h2 className="text-center mb-4 bg-success text-white p-2">About me</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card bg-dark text-white mb-3">
                            <div className="card-body">
                                <h5 className="card-title text-center">Who Am I?</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, labore. A quidem deserunt dolorem
                                    aliquid ad maiores asperiores hic ipsum, molestiae aperiam provident officiis
                                    ex voluptatum doloribus praesentium accusantium modi quo esse temporibus. Adipisci veniam obcaecati
                                    iure natus quam corrupti incidunt officiis quibusdam cum veritatis, in labore repellendus illum earum?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card bg-dark text-white mb-3">
                            <div className="card-body">
                                <h5 className="card-title">My Skills</h5>
                                <p className="card-text">
                                    - HTML, CSS, JavaScript <br />
                                    - React, Node.js, Express <br />
                                    - Database Management (SQL, MongoDB) <br />
                                    - UI/UX Design <br />
                                    - Version Control (Git) <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;