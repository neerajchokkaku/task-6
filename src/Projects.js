 

import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-5 bg-dark">
            <div className="container">
                <h2 className="text-center mb-4 bg-info text-white p-2">Projects</h2>
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100 border-0 shadow d-flex flex-column">
                            <img src="https://files.realpython.com/media/HTML-And-CSS-For-Python-Developers_Watermarked.e2604f40ef5b.jpg" className="card-img-top" alt="Project 1" />
                            <div className="card-body bg-info text-white flex-fill">
                                <h5 className="card-title">Project 1</h5>
                                <p className="card-text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero consequatur officia deleniti
                                    ab dicta veniam tempore dolor perspiciatis iste. Necessitatibus labore eveniet dolores doloribus
                                    deleniti, nobis accusamus harum? Consectetur perferendis quaerat magni quam! Vel nisi quod delectus
                                    fuga eveniet. Iure consectetur itaque recusandae nemo amet veritatis quasi maxime placeat fugit?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100 border-0 shadow d-flex flex-column">
                            <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" className="card-img-top" alt="Project 2" />
                            <div className="card-body bg-success text-white flex-fill">
                                <h5 className="card-title">Project 2</h5>
                                <p className="card-text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero consequatur officia deleniti
                                    ab dicta veniam tempore dolor perspiciatis iste. Necessitatibus labore eveniet dolores doloribus
                                    deleniti, nobis accusamus harum? Consectetur perferendis quaerat magni quam! Vel nisi quod delectus
                                    fuga eveniet. Iure consectetur itaque recusandae nemo amet veritatis quasi maxime placeat fugit?

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100 border-0 shadow d-flex flex-column">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfPX313Wtl5qNsqsL9LxIK4t1ZXFUmodgTVw&usqp=CAU" className="card-img-top" alt="Project 3" />
                            <div className="card-body bg-warning text-dark flex-fill">
                                <h5 className="card-title">Project 3</h5>
                                <p className="card-text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero consequatur officia deleniti
                                    ab dicta veniam tempore dolor perspiciatis iste. Necessitatibus labore eveniet dolores doloribus
                                    deleniti, nobis accusamus harum? Consectetur perferendis quaerat magni quam! Vel nisi quod delectus
                                    fuga eveniet. Iure consectetur itaque recusandae nemo amet veritatis quasi maxime placeat fugit?
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Add more cards for additional projects */}
                </div>
            </div>
        </section>
    );
};

export default Projects;