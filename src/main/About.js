import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Image, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from "axios";
import './Home.css';
import './About.css';

const About = () => {
  const [showAside, setShowAside] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const toggleAside = () => {
    setShowAside(!showAside);
  };

  // Obtener datos del usuario logueado
  useEffect(() => {
    const userId = localStorage.getItem('id'); // Verificamos si el ID está en localStorage

    if (!userId) return; // Si no hay ID, no hacemos la petición

    const fetchUserById = async () => {
      try {
        // Obtener la información del usuario desde el backend
        const response = await axios.get(`http://localhost:8080/api/user/byId/${userId}`, {
          withCredentials: true, // Importante para enviar cookies automáticamente
        });

        setUser(response.data); // Almacenamos la info del usuario en el estado

      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to fetch user data. Please check the backend server.');
      }
    };

    fetchUserById();
  }, []);

  // Obtener imagen de perfil
  const getImageSrc = () => {
    return user?.image
      ? `data:image/jpeg;base64,${user.image}`
      : '/assets/imagen_defecto.jpeg';
  };

  return (
    <div className="about-page">
      {/* NAVBAR */}
      <Navbar expand="lg" className="navbar-scroll custom-navbar shadow-sm py-3">
        <Container>
          <Navbar.Brand as={Link} to="/class" className="fw-bold text-white">
            Third Class: A
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
              <NavDropdown title="Subjects" id="subjects-dropdown" menuVariant="dark">
                <NavDropdown.Item as={Link} to="/math">Math</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/spanish">Spanish</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/natural">Natural Sciences</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/social">Social Sciences</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/english">English</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/art">Art</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="User Access" id="user-dropdown" menuVariant="dark">
                <NavDropdown.Item as={Link} to="/userLogin">Login</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/userRegister">Register</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact" className="text-white">Contact</Nav.Link>
              <Button variant="link" onClick={toggleAside} className="p-0 ms-4 small-button">
                <Image src={getImageSrc()} roundedCircle className="small-avatar" />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ASIDE PANEL */}
      {showAside && (
        <aside className="user-aside">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="m-0">User Panel</h5>
            <button className="btn-close" onClick={toggleAside}></button>
          </div>
          <div className="text-center">
            <Image src={getImageSrc()} roundedCircle width="80" height="80" className="mb-3" />
            {user ? (
              <>
                <h6>{user.username}</h6>
                <p className="text-muted small">{user.email}</p>
                <hr />
                <Link to="/profile" className="btn btn-primary btn-sm w-100 mb-2">Profile</Link>
                <Button variant="outline-danger" size="sm" className="w-100">Logout</Button>
              </>
            ) : (
              <>
                <Link to="/userLogin" className="btn btn-success btn-sm w-100 mb-2">Login</Link>
                <Link to="/userRegister" className="btn btn-outline-primary btn-sm w-100">Register</Link>
              </>
            )}
          </div>
        </aside>
      )}

      {/* HERO */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <h1 className="display-4 fw-bold text-white">Welcome to Edunova</h1>
      </section>

      {/* ABOUT SECTION */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5 text-primary">About Us</h2>
        <Row xs={1} md={2} lg={2} className="g-4">
          <Col>
            <Card className="about-card shadow-sm h-100">
              <Card.Body className="text-center">
                <i className="bi bi-book-half text-primary display-3 mb-3"></i>
                <Card.Text>
                  Edunova is a platform that provides a wide range of educational resources to students and teachers,
                  including entertaining, interactive, and informative content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="about-card shadow-sm h-100">
              <Card.Body className="text-center">
                <i className="bi bi-laptop text-info display-3 mb-3"></i>
                <Card.Text>
                  Our system is designed to be user-friendly and easy to navigate, making it perfect for primary students. 
                  It fosters creativity, imagination, and critical thinking skills through videos, images, and games.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="about-card shadow-sm h-100">
              <Card.Body className="text-center">
                <i className="bi bi-person-lines-fill text-warning display-3 mb-3"></i>
                <Card.Text>
                  Additionally, our system is a great tool for teachers to create engaging lesson plans and activities
                  that cater to the needs of their students.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="about-card shadow-sm h-100">
              <Card.Body className="text-center">
                <i className="bi bi-cloud-arrow-down text-success display-3 mb-3"></i>
                <Card.Text>
                  We are still developing our system and applying it in schools. We are confident it will make a positive 
                  impact on education and make learning enjoyable for everyone.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>



      {/* Footer */}
      <footer className="bg-primary text-white py-3 mt-0">
        <div className="container text-center">
          <p className="mb-0">
            &copy; 2025 Third Class A | Designed with ❤️ for enthusiastic learners.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
