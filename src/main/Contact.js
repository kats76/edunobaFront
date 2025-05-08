import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Image, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from "axios";
import './Home.css';
import './Contact.css';
import CustomNavbar from "../components/CustomNavbar";

const Contact = () => {
  const [user, setUser] = useState(null);
  const [showAside, setShowAside] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setSuccessMessage('');
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    try {
      // Enviar los datos del formulario al backend
      const response = await axios.post('http://localhost:8080/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setSuccessMessage('¡Tu mensaje se ha enviado correctamente!');
        setErrorMessage('');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (err) {
      setErrorMessage('Error al enviar el mensaje. Por favor, intenta nuevamente.');
      setSuccessMessage('');
    }
  };

  const getImageSrc = () =>
    user?.image
      ? `data:image/jpeg;base64,${user.image}`
      : '/assets/imagen_defecto.jpeg';

  return (
    <div>
      {/* NAVBAR */}
      <CustomNavbar user={user} toggleAside={toggleAside} getImageSrc={getImageSrc} />

      {/* ASIDE DERECHO */}
      {showAside && (
        <aside
          className="position-fixed top-0 end-0 bg-light border-start shadow"
          style={{
            width: '280px',
            height: '100vh',
            zIndex: 1050,
            padding: '1.5rem'
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="m-0">User Panel</h5>
            <button className="btn btn-close" onClick={toggleAside}></button>
          </div>
          <div className="text-center">
            <img
              src={getImageSrc()}
              alt="User avatar"
              className="rounded-circle mb-3"
              width="40"
              height="40"
            />
            {user ? (
              <>
                <h6>{user.username}</h6>
                <p className="text-muted">{user.email}</p>
                <hr />
                <Link to="/profile" className="btn btn-primary btn-sm w-100 mb-2">Profile</Link>
                <button className="btn btn-outline-danger btn-sm w-100">Logout</button>
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

      {/* Contact Section */}
      <div className="container mt-5">
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-6">
            <div className="p-4 bg-light rounded shadow">
              <h3 className="text-primary">Contact Information</h3>
              <p><strong>Address:</strong> Alcala Street, Madrid, Spain</p>
              <p><strong>Telephone Number:</strong> +34 913 456 789</p>
              <p><strong>Email:</strong> Edunova@gmail.org</p>
              <p><strong>Schedule:</strong> Monday to Friday, 9:00 AM - 6:00 PM</p>
            </div>
            <div className="mt-5">
              <img className="rounded image-logo" src="logo.jpg" alt="logo" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="p-4 bg-light rounded shadow">
              <h3 className="text-primary">Contact Us</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Send</button>
                </div>
              </form>
              {successMessage && <p className="text-success mt-3">{successMessage}</p>}
              {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-3 mt-5">
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 Third Class A | Designed with ❤️ for enthusiastic learners.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
