import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Subjects = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="container-fluid bg-gradient text-black text-center py-5" style={{ background: 'linear-gradient(90deg, #ff7b54, #ffcc29)', height: '60vh' }}>
                <h1 className="display-3 fw-bold">Explore Your Subjects</h1>
                <p className="lead mt-3">Learn, Grow, and Succeed with Edunova</p>
                <Link to="/about" className="btn btn-dark btn-lg mt-4 shadow-lg">
                    Learn More
                </Link>
            </div>

            {/* Image Section */}
            <div className="container text-center my-5">
                <img
                    src="/assets/alumnos.jpg"
                    alt="Students learning"
                    className="img-fluid shadow rounded-circle hover-effect mx-auto"
                    style={{ maxWidth: '50%' }}
                />
                <p className="mt-4 text-muted">Join a community of lifelong learners.</p>
            </div>

            {/* Subject Links */}
            <Container>
                <div className="row g-4">
                    {/* Maths */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow-lg">
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">Math</h5>
                                <p className="card-text">Explore the world of numbers and logic.</p>
                                <Link to="/math" className="btn btn-outline-warning">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Spanish */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow-lg">
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">Spanish</h5>
                                <p className="card-text">Master the language of culture and communication.</p>
                                <Link to="/spanish" className="btn btn-outline-danger">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Natural Science */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow-lg">
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">Natural Sciences</h5>
                                <p className="card-text">Discover the wonders of nature and biology.</p>
                                <Link to="/natural" className="btn btn-outline-success">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Social Science */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow-lg">
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">Social Sciences</h5>
                                <p className="card-text">Understand society and its dynamics.</p>
                                <Link to="/social" className="btn btn-outline-info">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* English */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow-lg">
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">English</h5>
                                <p className="card-text">Enhance your communication and literature skills.</p>
                                <Link to="/english" className="btn btn-outline-primary">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Art */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow-lg">
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">Art</h5>
                                <p className="card-text">Create art and let your imagination shine!</p>
                                <Link to="/art" className="btn btn-outline-primary">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Footer */}
            <footer className="mt-5 bg-primary text-white py-3">
                <div className="container text-center">
                <p className="mb-0">
                    &copy; 2025 Third Class A | Designed with ❤️ for enthusiastic learners.
                </p>
                </div>
            </footer>
        </>
    );
};

export default Subjects;
