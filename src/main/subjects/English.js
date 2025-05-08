import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Home.css';
import './English.css'

const English = () => {
  const [showAside, setShowAside] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

    const toggleAside = () => {
      setShowAside(!showAside);
    };
  
    // Obtener datos del usuario logueado
    useEffect(() => {
      const userId = Cookies.get('id'); // Verificamos si el ID está en localStorage
  
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
  
      fetchUserById(); // Llamamos a la función para obtener los datos del usuario
    }, []); // Ejecutamos el useEffect solo una vez
  
    const getImageSrc = () =>
      user?.image
        ? `data:image/jpeg;base64,${user.image}`
        : '/assets/imagen_defecto.jpeg';
  
    const handleGoBack = () => {
      navigate("/subjects"); 
    };

  return (
    <div className="english-container">
      {/* NAVBAR */}
      <Navbar expand="lg" className="navbar-scroll custom-navbar shadow">
        <Container>
          <Navbar.Brand as={Link} to="/class" className="fw-bold text-white">
            Third Class: A
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
              <NavDropdown title="Subjects" id="subjects-dropdown" className="text-white">
                <NavDropdown.Item as={Link} to="/math">Math</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/spanish">Spanish</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/natural">Natural Sciences</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/social">Social Sciences</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/english">English</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/art">Art</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="User Access" id="user-dropdown" className="text-white">
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

      {/* English Content */}
      <div className="math-content text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bold">English - Content Blocks</h1>
        <p className="text-center">
          Welcome to the exciting world of English! Let's explore the key topics we'll cover in this course.
        </p>
        <ul className="list-group list-group-flush bg-transparent text-white">
          <li className="list-group-item bg-transparent text-white">
            <i className="bi bi-check-circle"></i> {' '}
              <Link className="text-white text-decoration-none" to="/listening">
                Listening Comprehension
              </Link>
          </li>
          <li className="list-group-item bg-transparent text-white">
            <i className="bi bi-check-circle"></i> {' '}
              <Link className="text-white text-decoration-none" to="/speaking">
                Oral Expression
              </Link>
          </li>
          <li className="list-group-item bg-transparent text-white">
            <i className="bi bi-check-circle"></i> {' '}
              <Link className="text-white text-decoration-none" to="/reading">
                Reading Comprehension
              </Link>
          </li>
          <li className="list-group-item bg-transparent text-white">
            <i className="bi bi-check-circle"></i> {' '}
              <Link className="text-white text-decoration-none" to="/written">
                Written Expression
              </Link>
          </li>
          <li className="list-group-item bg-transparent text-white">
            <i className="bi bi-check-circle"></i> {' '}
              <Link className="text-white text-decoration-none" to="/sociocultural">
                Sociocultural Aspects and Intercultural Awareness
              </Link>
          </li>
          <li className="list-group-item bg-transparent text-white">
            <i className="bi bi-check-circle"></i> {' '}
              <Link className="text-white text-decoration-none" to="/awareness">
                Language Awareness and Reflection on Learning
              </Link>
          </li>
        </ul>
      </div>

      {/* Botón para regresar */}
      <div class="container text-center">
        <button onClick={handleGoBack} className="rounded bg-warning p-1 ">Go Back</button>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-3">
        <div className="container text-center">
          <p className="mb-0">
            &copy; 2025 Third Class A | Designed with ❤️ for enthusiastic learners.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default English;