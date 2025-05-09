// About.jsx
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import CustomNavbar from "../components/CustomNavbar";

axios.defaults.withCredentials = true;

const About = () => {
  const [showAside, setShowAside] = useState(false);
  const [user, setUser] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleAside = () => setShowAside(!showAside);

  useEffect(() => {
    const userId = localStorage.getItem('id');
    if (!userId) return;

    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/user/byId/${userId}`);
        setUser(res.data);
      } catch (err) {
        console.error('Error fetching user:', err);
      }
    };

    fetchUser();
  }, []);

  const getImageSrc = () => user?.image ? `data:image/jpeg;base64,${user.image}` : '/assets/imagen_defecto.jpeg';

  return (
    <Box sx={{ bgcolor: '#f9fafc', minHeight: '100vh' }}>
      {/* NAVBAR */}
      <CustomNavbar user={user} toggleAside={toggleAside} getImageSrc={getImageSrc} />

      {/* APP BAR */}

      {/* DRAWER */}
      <Drawer anchor="right" open={showAside} onClose={toggleAside}>
        <Box sx={{ width: 300, p: 3 }}>
          <Typography variant="h6" gutterBottom>User Panel</Typography>
          <Box textAlign="center">
            <Avatar src={getImageSrc()} sx={{ width: 80, height: 80, mb: 2 }} />
            {user ? (
              <>
                <Typography variant="subtitle1">{user.username}</Typography>
                <Typography variant="body2" color="textSecondary">{user.email}</Typography>
                <Button variant="contained" fullWidth component={Link} to="/profile" sx={{ mt: 2 }}>
                  Profile
                </Button>
                <Button variant="outlined" color="error" fullWidth sx={{ mt: 1 }}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="contained" color="success" fullWidth component={Link} to="/userLogin" sx={{ mt: 2 }}>
                  Login
                </Button>
                <Button variant="outlined" color="primary" fullWidth component={Link} to="/userRegister" sx={{ mt: 1 }}>
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
          height: '60vh', // Mantener la altura del contenedor
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(249, 250, 252, 1)), url(/assets/about.jpg)', // Degradado ajustado
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          marginBottom: 0, // Sin margen adicional
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            fontWeight="bold"
            sx={{
              color: '#4527a0', // Color morado
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Sombreado para destacar el texto
              transform: 'translateY(-6px)', // Mover el texto hacia arriba 25px
            }}
          >
            About Us
          </Typography>
        </motion.div>
      </Box>

      {/* ABOUT CARDS */}
      <Container sx={{ py: 6 }}>
        <Grid
          container
          spacing={4}
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'center', // Centrar horizontalmente
            alignItems: 'center', // Centrar verticalmente
          }}
        >
          {[
            {
              icon: '📚',
              text: 'Edunova provides a wide range of educational resources, including entertaining and interactive content.',
            },
            {
              icon: '💻',
              text: 'User-friendly and designed for primary students, it boosts creativity and critical thinking.',
            },
            {
              icon: '👩‍🏫',
              text: 'Great for teachers to create engaging lesson plans tailored to their students’ needs.',
            },
            {
              icon: '☁️',
              text: 'Still evolving, Edunova aims to make a lasting impact on learning.',
            },
          ].map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 50 }} // Animación inicial
                animate={{ opacity: 1, y: 0 }} // Animación final
                transition={{ duration: 0.5, delay: idx * 0.2 }} // Duración y retraso
              >
                <Paper
                  elevation={6} // Aumenta la elevación para un sombreado más destacado
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: 250, // Altura uniforme
                    maxWidth: 250, // Ancho uniforme
                    margin: '0 auto', // Centrar las tarjetas
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Sombreado personalizado
                    transition: 'transform 0.3s, box-shadow 0.3s', // Transición suave
                    '&:hover': {
                      transform: 'scale(1.05)', // Efecto de zoom al pasar el mouse
                      boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.2)', // Sombreado más fuerte al pasar el mouse
                    },
                  }}
                >
                  <Typography variant="h3" gutterBottom>{item.icon}</Typography>
                  <Typography variant="body1" color="textSecondary">
                    {item.text}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FOOTER */}
      <Box sx={{ bgcolor: '#4527a0', color: 'white', py: 3, mt: 5 }}>
        <Container>
          <Typography variant="body2" align="center">
            &copy; 2025 Third Class A | Designed with ❤️ for enthusiastic learners.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
