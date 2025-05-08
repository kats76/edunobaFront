// Home.jsx
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  Avatar,
  Container,
  Grid,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import GroupsIcon from "@mui/icons-material/Groups";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ForumIcon from "@mui/icons-material/Forum";
import DescriptionIcon from "@mui/icons-material/Description";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CustomNavbar from "../components/CustomNavbar";


axios.defaults.withCredentials = true;

const Home = () => {
  const [showAside, setShowAside] = useState(false);
  const [user, setUser] = useState(null);
  const userId = Cookies.get("id");
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const toggleAside = () => {
    setShowAside(!showAside);
  };

  useEffect(() => {
    if (!userId) return;

    const fetchUserById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/user/byId/${userId}`
        );
        setUser(response.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserById();
  }, [userId]);

  const getImageSrc = () =>
    user?.image
      ? `data:image/jpeg;base64,${user.image}`
      : "/assets/imagen_defecto.jpeg";

  const handleLogOut = () => {
    Cookies.remove("id");
    setUser(null);
    window.location.href = "/";
  };

  const features = [
    {
      title: "Comprehensive Learning",
      desc: "Access diverse topics in a structured and interactive manner.",
      icon: <SchoolIcon color="primary" sx={{ fontSize: 40 }} />,
    },
    {
      title: "Global Perspective",
      desc: "Broaden your knowledge with a multicultural approach.",
      icon: <PublicIcon color="secondary" sx={{ fontSize: 40 }} />,
    },
    {
      title: "Collaborative Projects",
      desc: "Work together with peers to achieve excellence.",
      icon: <GroupsIcon color="success" sx={{ fontSize: 40 }} />,
    },
    {
      title: "Digital Learning",
      desc: "Embrace technology for effective teaching experiences.",
      icon: <LaptopMacIcon color="info" sx={{ fontSize: 40 }} />,
    },
    {
      title: "Interactive Learning",
      desc: "Participate actively in dynamic learning environments.",
      icon: <ForumIcon color="warning" sx={{ fontSize: 40 }} />,
    },
    {
      title: "Accessible Resources",
      desc: "Support your learning with easy access to content.",
      icon: <DescriptionIcon color="error" sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f9fafc", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <CustomNavbar
        user={user}
        toggleAside={toggleAside}
        getImageSrc={getImageSrc}
      />

      {/* DRAWER / ASIDE */}
      <Drawer anchor="right" open={showAside} onClose={toggleAside}>
        <Box sx={{ width: 300, p: 3 }}>
          <Typography variant="h6" gutterBottom>
            User Panel
          </Typography>
          <Box textAlign="center">
            <Avatar src={getImageSrc()} sx={{ width: 80, height: 80, mb: 2 }} />
            {user ? (
              <>
                <Typography variant="subtitle1">{user.username}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {user.email}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  component={Link}
                  to="/profile"
                  sx={{ mt: 2 }}
                >
                  Profile
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  component={Link}
                  to="/userLogin"
                  sx={{ mt: 2 }}
                >
                  Login
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  component={Link}
                  to="/userRegister"
                  sx={{ mt: 1 }}
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Drawer>

      {/* HERO SECTION */}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#f9fafc",
        }}
      >
        {/* Texto a la izquierda con animaciones */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            px: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" gutterBottom>
              Welcome to Third Class!
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography variant="h6" sx={{ mb: 4 }}>
              Embark on a journey to learn Math, Science, Art, and more with
              engaging content.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to="/subjects"
              sx={{ px: 4, py: 1.5, borderRadius: 3 }}
            >
              Explore Subjects
            </Button>
          </motion.div>
        </Box>

        {/* Imagen a la derecha con animaciones */}
        <motion.div
          style={{
            flex: 1,
            backgroundImage: "url(/assets/test.png)",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </Box>

      {/* FEATURES - Carrusel */}
      <Container sx={{ py: 6 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          sx={{ mb: 6 }}
        >
          <Typography variant="h3" color="primary" align="center" gutterBottom>
            Why Choose Our Class?
          </Typography>

          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            pauseOnFocus={false}
            responsive={[
              {
                breakpoint: 1024, // Para pantallas medianas
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 600, // Para pantallas pequeñas
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {features.map((feature, index) => (
              <Box key={index} sx={{ p: 2 }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box mb={2}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feature.desc}
                  </Typography>
                  {/* Agrega un botón o enlace funcional */}
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/some-link"
                    sx={{ mt: 2 }}
                  >
                    Learn More
                  </Button>
                </Paper>
              </Box>
            ))}
          </Slider>
        </motion.div>
      </Container>

      {/* FOOTER */}
      <Box sx={{ bgcolor: "#4527a0", color: "white", py: 3, mt: 5 }}>
        <Container>
          <Typography variant="body2" align="center">
            &copy; 2025 Third Class A | Designed with ❤️ and Material UI.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
