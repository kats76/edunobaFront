import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Image } from 'react-bootstrap';
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import './Home.css';

const ChatGPT = () => {
  const { student_id } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState(null);
  const [student, setStudent] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showAside, setShowAside] = useState(false);
  const [user, setUser] = useState(null);
  const { token, removeAuthToken } = useAuth();

  const toggleAside = () => setShowAside(!showAside);

  const getImageSrc = () => {
    return user?.image
      ? `data:image/jpeg;base64,${user.image}`
      : "/assets/imagen_defecto.jpeg";
  };

  const handleLogout = () => {
    removeAuthToken();
    localStorage.removeItem("id");
    window.location.href = "/userLogin";
  };

  // Obtener usuario
  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (!userId) {
      setError("No user logged in");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/user/byId/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        if ([401, 403].includes(err.response?.status)) {
          setError("Session expired. Please login again.");
          handleLogout();
        } else {
          setError("Failed to fetch user data.");
        }
      }
    };

    fetchUser();
  }, [token]);

  // Obtener datos del estudiante
  useEffect(() => {
    if (!student_id) return;

    const fetchStudent = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/student/${student_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStudent(res.data);
      } catch (err) {
        if ([401, 403].includes(err.response?.status)) {
          setError("You are not authorized to access this student.");
          handleLogout();
        } else {
          setError("Failed to fetch student data.");
        }
      }
    };

    fetchStudent();
  }, [student_id, token]);

  // WebSocket para texto generado
  useEffect(() => {
    if (!student_id) return;

    const socket = new WebSocket(`ws://localhost:8080/ws/generate-text/${student_id}`);

    socket.onopen = () => console.log("WebSocket connected");
    socket.onmessage = (event) =>
      setCurrentMessage((prev) => prev + event.data);
    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
      setError("WebSocket connection failed.");
    };
    socket.onclose = () => console.log("WebSocket closed");

    return () => socket.close();
  }, [student_id]);

  // Enviar mensaje
  const sendMessage = async () => {
    if (!newMessage.trim() || isGenerating) return;

    const userMessage = { text: newMessage, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setCurrentMessage("");
    setIsGenerating(true);

    try {
      const res = await axios.post("http://localhost:8080/text", {
        input_text: newMessage,
        student_id,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      const botMessage = {
        id: res.data.texts_generated_id,
        text: res.data.texts_generated_output_text,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error from GPT-2 backend:", err);
      setError("Failed to send message.");
    } finally {
      setIsGenerating(false);
    }
  };

  if (!student_id) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-pink-500 to-yellow-500 text-black flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-400 mb-8">
          Error: Student ID is missing.
        </h1>
        <p className="text-xl text-white">Please check the URL and try again.</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
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
  
      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center p-4">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-400 mb-8">
          Creative Chat with GPT-2
        </h1>
  
        {student && (
          <div className="bg-white border-l-8 border-teal-400 text-black px-8 py-6 rounded-lg mb-8 w-full max-w-4xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Student Information</h3>
            <p><strong>Name:</strong> {student.student_name}</p>
            <p><strong>Age:</strong> {student.student_age}</p>
            <p><strong>Grade:</strong> {student.student_grade}</p>
            <p><strong>Subject:</strong> {student.student_favourite_subject}</p>
            <p><strong>Multiple Intelligences:</strong> {student.student_multiple_intelligences}</p>
          </div>
        )}
  
        {error && (
          <div className="bg-red-600 text-black px-8 py-4 rounded-lg mb-8 w-full max-w-4xl shadow-xl">
            {error}
          </div>
        )}
  
        <div className="w-full max-w-4xl h-96 bg-white rounded-lg p-6 overflow-auto shadow-xl">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 my-4 rounded-lg shadow-lg transition-all duration-300 transform ${
                msg.sender === "user"
                  ? "bg-indigo-500 text-black ml-auto max-w-md text-end scale-105"
                  : "bg-teal-600 text-white mr-auto max-w-md text-start scale-95"
              }`}
            >
              <p className="text-xl">
                {msg.sender === "bot" && index === messages.length - 1 && isGenerating
                  ? currentMessage
                  : msg.text}
              </p>
              {msg.sender === "bot" && index === messages.length - 1 && isGenerating && (
                <div className="text-sm text-gray-300">Generating...</div>
              )}
            </div>
          ))}
        </div>
  
        <div className="mt-8 flex w-full max-w-4xl justify-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message here..."
            className="bg-gray-800 text-white border border-gray-600 p-4 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          />
          <button
            onClick={sendMessage}
            className="ml-4 bg-teal-500 hover:bg-teal-600 text-black px-6 py-4 rounded-lg transition-all"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );  
};

export default ChatGPT;
