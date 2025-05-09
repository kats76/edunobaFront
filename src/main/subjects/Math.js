import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import CustomNavbar from "../../components/CustomNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Math.css";

const Math = () => {
  const [showAside, setShowAside] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  const toggleAside = () => {
    setShowAside(!showAside);
  };

  const handleGoBack = () => {
    navigate("/subjects");
  };

  const handleReadMore = () => {
    navigate("/math-content");
  };

  const getImageSrc = () =>
    user?.image
      ? `data:image/jpeg;base64,${user.image}`
      : "/assets/imagen_defecto.jpeg";

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

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to bottom, #c5d4e0 20%, #ffffff 100%)", // Gradiente más fuerte
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* NAVBAR */}
      <CustomNavbar toggleAside={toggleAside} getImageSrc={getImageSrc} />

      {/* HERO SECTION */}
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "flex-start", // Alinear elementos al inicio verticalmente
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          py: 10,
          mt: 5,
        }}
      >
        {/* Text */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography
            variant={isMobile ? "h2" : "h1"}
            fontWeight="bold"
            color="#3a6b94" // Cambiar el color del título
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Maths
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            Welcome to the exciting world of Mathematics! Let’s explore key topics and make learning fun and visual.
          </Typography>

          {/* COURSE TOPICS */}
          <Typography
            variant="h4"
            fontWeight="bold"
            align="left"
            gutterBottom
            color="#3a6b94" // Cambiar el color del título de los temas clave
            sx={{ mt: 4 }}
          >
            Key Math Topics
          </Typography>
          <ul
  className="list-group list-group-flush bg-transparent text-dark"
  style={{ textAlign: "left", paddingLeft: "0" }}
>
  {[
    { path: "/numbers", label: "Numbers and Operations" },
    { path: "/measurement", label: "Measurement" },
    { path: "/geometry", label: "Geometry" },
    { path: "/statistics-probability", label: "Statistics and Probability" },
    { path: "/problem-solving", label: "Problem Solving" },
  ].map((item, idx) => (
    <li
      className="topic-item list-group-item bg-transparent"
      key={idx}
    >
      <i className="bi bi-check-circle text-success me-2"></i>
      <Link
        className="text-dark text-decoration-none fw-semibold"
        to={item.path}
      >
        {item.label}
      </Link>
    </li>
  ))}
</ul>
        </Box>

        {/* Illustration */}
        <Box
          component="img"
          src="/assets/math.jpg"
          alt="Math illustration"
          sx={{
            width: "50%",
            height: "auto",
            mt: { xs: 5, md: 0 },
            padding: 10,
          }}
        />
      </Container>

      {/* BOTÓN DE REGRESO */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4, // Margen superior para separar del contenido
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
      <Box sx={{ bgcolor: "#3a6b94", color: "white", py: 3, mt: 5 }}> {/* Cambiar el fondo del footer */}
        <Container>
          <Typography variant="body2" align="center">
            &copy; 2025 Third Class A | Designed with ❤️ for enthusiastic learners.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Math;