import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Home.css";
import "./Spanish.css";
import CustomNavbar from "../../components/CustomNavbar";

const Spanish = () => {
  const [showAside, setShowAside] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleAside = () => {
    setShowAside(!showAside);
  };

  const handleGoBack = () => {
    navigate("/subjects");
  };

  useEffect(() => {
    const userId = Cookies.get("id");
    if (!userId) return;

    const fetchUserById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/user/byId/${userId}`,
          { withCredentials: true }
        );
        setUser(response.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data.");
      }
    };

    fetchUserById();
  }, []);

  const getImageSrc = () =>
    user?.image
      ? `data:image/jpeg;base64,${user.image}`
      : "/assets/imagen_defecto.jpeg";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to bottom, #f7d7b4 20%, #ffffff 100%)", // Gradiente basado en #e6a662
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* NAVBAR */}
      <CustomNavbar toggleAside={toggleAside} getImageSrc={getImageSrc} />

      {/* CONTENT */}
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          py: 10,
          mt: 5,
        }}
      >
        {/* Text Section */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography
            variant={isMobile ? "h2" : "h1"}
            fontWeight="bold"
            color="#e6a662" // Título principal basado en el color
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Spanish
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            Welcome to the exciting world of Spanish! Let's explore the key topics we'll cover in this course.
          </Typography>

          <Typography
            variant="h4"
            fontWeight="bold"
            align="left"
            gutterBottom
            color="#e6a662" // Subtítulos basados en el color
            sx={{ mt: 4 }}
          >
            Key Spanish Topics
          </Typography>

          <ul
            className="list-group list-group-flush bg-transparent text-dark"
            style={{ textAlign: "left", paddingLeft: "0" }}
          >
            {[
              { path: "/oral-skills", label: "Listening, Speaking, and Conversing" },
              { path: "/reading-writing", label: "Reading and Writing" },
              { path: "/language-awareness", label: "Language Awareness" },
              { path: "/literary-education", label: "Literary Education" },
            ].map((item, idx) => (
              <li
                className="topic-item list-group-item bg-transparent"
                key={idx}
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "transform 0.3s, background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fbe4cc"; // Fondo al pasar el mouse
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <i className="bi bi-check-circle text-success me-2"></i>
                <Link
                  className="text-dark text-decoration-none fw-semibold"
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    color: "#e6a662", // Color del texto basado en el color principal
                    transition: "color 0.3s, font-size 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#d18b4a"; // Color más oscuro al pasar el mouse
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#e6a662"; // Volver al color original
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Box>

        {/* Illustration */}
        <Box
          sx={{
            display: "flex", // Usar flexbox para centrar la imagen
            flex: 1, // Asegurar que ocupe el mismo espacio que el texto
            minHeight: "400px", // Altura mínima para la imagen
            justifyContent: "center", // Centrar horizontalmente
            alignItems: "center", // Centrar verticalmente
            width: "100%", // Asegurar que ocupe todo el ancho del contenedor
            height: "100%", // Asegurar que ocupe todo el alto del contenedor
            mt: { xs: 5, md: 0 }, // Margen superior para pantallas pequeñas
          }}
        >
          <Box
            component="img"
            src="/assets/spanish.jpg"
            alt="Spanish illustration"
            sx={{
              width: "80%", // Asegurar que la imagen no exceda el ancho del contenedor
              height: "auto", // Asegurar que la imagen no exceda el alto del contenedor
              objectFit: "contain", // Ajustar la imagen para que mantenga su proporción
              borderRadius: 2, // Bordes redondeados
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Sombra para destacar la imagen
            }}
          />
        </Box>
      </Container>

      {/* Botón Go Back */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Button
          onClick={handleGoBack}
          variant="contained" // Cambiar a "contained" para darle un estilo más destacado
          color="error" // Usar el color primario de Material-UI
          sx={{
            textTransform: "none", // Evitar que el texto esté en mayúsculas
            fontWeight: "bold", // Hacer el texto más destacado
            px: 4, // Padding horizontal
            py: 1.5, // Padding vertical
            borderRadius: 2, // Bordes redondeados
          }}
        >
          Go Back
        </Button>
      </Box>

      {/* FOOTER */}
      <Box sx={{ bgcolor: "#e6a662", color: "white", py: 3, mt: 5 }}>
        <Container>
          <Typography variant="body2" align="center">
            &copy; 2025 Third Class A | Designed with ❤️ for enthusiastic learners.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Spanish;
