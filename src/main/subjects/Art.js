import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Home.css";
import "./Art.css";
import CustomNavbar from "../../components/CustomNavbar";

const Art = () => {
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
        backgroundImage: "linear-gradient(to bottom, #fff3b3 20%, #ffffff 100%)",
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
            color="#F8D34F"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Art
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight="bold"
            sx={{ textAlign: "left" }}
          >
            Welcome to the exciting world of Art! Let's explore the key topics we'll cover in this course.
          </Typography>

          <Typography
            variant="h4"
            fontWeight="bold"
            align="left"
            gutterBottom
            color="#F8D34F"
            sx={{ mt: 4 }}
          >
            Key Art Topics
          </Typography>

          <ul
            className="list-group list-group-flush bg-transparent text-dark"
            style={{ textAlign: "left", paddingLeft: "0" }}
          >
            {[
              { path: "/expression-creation", label: "Expression and Creation" },
              { path: "/heritage", label: "Cultural and Artistic Heritage" },
              { path: "/use", label: "Context and Artistic Use" },
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
                  e.currentTarget.style.backgroundColor = "#fff9d9"; // Fondo al pasar el mouse
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
                    color: "rgba(0, 0, 0, 0.6)", // Cambiar a color secundario (text.secondary)
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgba(0, 0, 0, 0.87)"; // Color más oscuro al pasar el mouse
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(0, 0, 0, 0.6)"; // Volver al color original
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
            display: "flex",
            flex: 1,
            minHeight: "400px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            mt: { xs: 5, md: 0 },
          }}
        >
          <Box
            component="img"
            src="/assets/art.png"
            alt="Art illustration"
            sx={{
              width: "80%",
              height: "auto",
              objectFit: "contain",
              borderRadius: 2,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Box>
      </Container>

      {/* GO BACK BUTTON */}
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
      <Box sx={{ bgcolor: "#F8D34F", color: "black", py: 3, mt: 5 }}>
        <Container>
          <Typography variant="body2" align="center">
            &copy; 2025 Third Class A | Designed with ❤️ for enthusiastic learners.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Art;
