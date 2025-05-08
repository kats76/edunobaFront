import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import './Class.css';

// Hacer que Axios use cookies en todas las solicitudes
axios.defaults.withCredentials = true;

const Class = () => {
  const [user, setUser] = useState(null);
  const [students, setStudents] = useState([]);
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

  const fetchStudents = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:8080/api/student/list', {
        withCredentials: true, 
      });
      setStudents(response.data);
    } catch (err) {
      if (err.response?.status === 401) {
        setError('You must be logged in to view this data.');
      } else {
        setError('Failed to fetch students.');
      }
      console.error('Error fetching students:', err);
    } finally {
      setLoading(false);
    }
  };    

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDeleteStudent = async (id) => {
    if (!id || !window.confirm('Are you sure you want to delete this student?')) return;

    try {
      await axios.delete(`http://localhost:8080/api/student/delete/${id}`, {
        withCredentials: true, // Aquí agregas withCredentials
      });
      setStudents((prev) => prev.filter((student) => student.id !== id));
    } catch (err) {
      if (err.response?.status === 401) {
        setError('You must be logged in to delete a student.');
      } else {
        setError('Failed to delete student. Please try again.');
      }
      console.error('Error deleting student:', err);
    }
  };    

  const handleUpdateStudent = (id) => {
    navigate(`/update-student/${id}`);
  };

  const handleNavigate = (id) => {
    navigate(`/student-info/${id}`);
  };

  const handleAddStudent = () => {
    navigate('/create-student');
  };

  useEffect(() => {
    if (!userId) return;

    const fetchUserById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/user/byId/${userId}`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
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
                <h6>{user?.username}</h6>
                <p className="text-muted">{user?.email}</p>
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

      {loading && (
        <div className="text-center mt-4" aria-live="polite">
          <div className="spinner-border text-primary" role="status" aria-label="Loading student data"></div>
          <p className="mt-2">Loading students...</p>
        </div>
      )}

      {error && !loading && (
        <div className="text-center mt-4" aria-live="assertive">
          <p className="text-danger">{error}</p>
          <button onClick={fetchStudents} className="btn btn-warning">Try Again</button>
        </div>
      )}

      {!loading && !error && (
        <div className="container mt-5">
          <h1 className="text-center mb-4" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
            Students List
          </h1>
          <button onClick={handleAddStudent} className="btn btn-info d-block mx-auto mb-5">
            Add
          </button>
          <table className="table table-bordered table-striped text-center table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Students</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students?.length > 0 ? (
                students.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <img
                        src={
                          student.image
                            ? `data:image/jpeg;base64,${student.image}`
                            : '/assets/imagen_defecto.jpeg'
                        }
                        alt="Student Profile"
                        className="d-block mx-auto rounded-circle"
                        style={{ cursor: 'pointer', width: '100px', height: '100px' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigate(student.id);
                        }}
                      />
                    </td>
                    <td>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUpdateStudent(student.id);
                        }}
                        className="btn btn-warning me-2 my-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteStudent(student.id);
                        }}
                        className="btn btn-danger"
                        disabled={!student.id}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center">No students found.</td>
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

export default Class;
