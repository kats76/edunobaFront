import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Home.css';

// Hacer que Axios use cookies en todas las solicitudes
axios.defaults.withCredentials = true;

const MarkList = () => {
  const [user, setUser] = useState(null);
  const [marks, setMarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAside, setShowAside] = useState(false);
  const userId = Cookies.get('id');

  const navigate = useNavigate();

  const toggleAside = () => {
    setShowAside(!showAside);
  };

  const getImageSrc = () =>
    user?.image
      ? `data:image/jpeg;base64,${user.image}`
      : '/assets/imagen_defecto.jpeg';

  const fetchMarks = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:8080/api/mark/list');
      setMarks(response.data);
    } catch (err) {
      if (err.response?.status === 401) {
        setError('You must be logged in to view this data.');
      } else {
        setError('Failed to fetch marks.');
      }
      console.error('Error fetching marks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarks();
  }, []);

  const handleDeleteMark = async (id) => {
    if (!id || !window.confirm('Are you sure you want to delete this mark?')) return;

    try {
      await axios.delete(`http://localhost:8080/api/mark/delete/${id}`);
      setMarks((prev) => prev.filter((mark) => mark.id !== id));
    } catch (err) {
      if (err.response?.status === 401) {
        setError('You must be logged in to delete a mark.');
      } else {
        setError('Failed to delete mark. Please try again.');
      }
    }
  };

  const handleUpdateMark = (id) => {
    navigate(`/update-mark/${id}`);
  };

  const handleNavigate = (id) => {
    navigate(`/mark-info/${id}`);
  };

  const handleAddMark = () => {
    navigate('/create-mark');
  };

  useEffect(() => {
    if (!userId) return;

    const fetchUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/user/byId/${userId}`);
        setUser(response.data);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to fetch user data. Please check the backend server.');
      }
    };

    fetchUserById();
  }, [userId]);

  useEffect(() => {
    if (error?.includes('logged in')) {
      navigate('/userLogin');
    }
  }, [error, navigate]);

  return (
    <div>
      {/* NAVBAR */}
      <Navbar expand= "lg" className="navbar-scroll custom-navbar shadow">
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
      
      

      {loading && (
        <div className="text-center mt-4" aria-live="polite">
          <div className="spinner-border text-primary" role="status" aria-label="Loading mark data"></div>
          <p className="mt-2">Loading Marks...</p>
        </div>
      )}

      {error && !loading && (
        <div className="text-center mt-4" aria-live="assertive">
          <p className="text-danger">{error}</p>
          <button onClick={fetchMarks} className="btn btn-warning">Try Again</button>
        </div>
      )}

      {!loading && !error && (
        <div className="container mt-5">
          <h1 className="text-center mb-4" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
            Marks List
          </h1>
          <button onClick={handleAddMark} className="btn btn-info d-block mx-auto mb-5">
            Add
          </button>
          <table className="table table-bordered table-striped text-center table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Marks</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {marks?.length > 0 ? (
                marks.map((mark) => (
                  <tr key={mark.id} onClick={() => handleNavigate(mark.id)}>
                    <td>{mark.id}</td>
                    <td>{mark.score}</td>
                    <td>{mark.date}</td>
                    <td>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUpdateMark(mark.id);
                        }}
                        className="btn btn-warning me-2 my-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteMark(mark.id);
                        }}
                        className="btn btn-danger"
                        disabled={!mark.id}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center">No marks found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <footer className="mt-5 bg-primary text-white py-3">
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 Third Class A | Designed with ❤️ for enthusiastic learners.</p>
        </div>
      </footer>
    </div>
  );
};

export default MarkList;
