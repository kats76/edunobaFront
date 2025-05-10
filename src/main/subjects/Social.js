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
import "./Social.css";
import CustomNavbar from "../../components/CustomNavbar";

const Social = () => {
  const [showAside, setShowAside] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleAside = () => setShowAside(!showAside);
  const handleGoBack = () => navigate("/subjects");

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
        backgroundImage:
          "linear-gradient(to bottom,rgb(232, 198, 172) 20%, #ffffff 100%)", // Suave fondo beige claro
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
            color="#4C3426"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Social Sciences
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            Welcome to the exciting world of Social Sciences! Let's explore the
            key topics we'll cover in this course.
          </Typography>

          <Typography
            variant="h4"
            fontWeight="bold"
            align="left"
            gutterBottom
            color="#4C3426"
            sx={{ mt: 4 }}
          >
            Key Social Topics
          </Typography>

          <ul
            className="list-group list-group-flush bg-transparent text-dark"
            style={{ textAlign: "left", paddingLeft: "0" }}
          >
            {[
              {
                path: "/time",
                label: "The Passage of Time and Historical Notions",
              },
              {
                path: "/geography",
                label: "Geography and Spatial Representation",
              },
              { path: "/society-culture", label: "Society and Culture" },
              {
                path: "/economy",
                label: "Economy and Sustainable Development",
              },
              {
                path: "/citizenship",
                label: "Citizenship and Civic Responsibility",
              },
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
                  e.currentTarget.style.backgroundColor = "#f3ebe5";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <i className="bi bi-check-circle text-success me-2"></i>
                <Link
                  className="text-decoration-none fw-semibold"
                  to={item.path}
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#3a271c";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#4C3426";
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
            src="/assets/social.jpg"
            alt="Social Sciences illustration"
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

      {/* BOTÓN DE REGRESO */}
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
          variant="contained"
          color="error"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: 2,
          }}
        >
          Go Back
        </Button>
      </Box>

      {/* FOOTER */}
      <Box sx={{ bgcolor: "#4C3426", color: "white", py: 3, mt: 5 }}>
        <Container>
          <Typography variant="body2" align="center">
            &copy; 2025 Third Class A | Designed with ❤️ for enthusiastic
            learners.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Social;
