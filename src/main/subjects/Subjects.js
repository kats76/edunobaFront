// src/main/subjects/Subjects.jsx
import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Grid,
  Paper,
  Box,
  IconButton,
  Avatar,
  Drawer
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import CustomNavbar from '../../components/CustomNavbar';

axios.defaults.withCredentials = true;

const subjects = [
  {
    title: 'Math',
    desc: 'Explore the world of numbers and logic.',
    color: 'warning',
    to: '/math',
  },
  {
    title: 'Spanish',
    desc: 'Master the language of culture and communication.',
    color: 'error',
    to: '/spanish',
  },
  {
    title: 'Natural Sciences',
    desc: 'Discover the wonders of nature and biology.',
    color: 'success',
    to: '/natural',
  },
  {
    title: 'Social Sciences',
    desc: 'Understand society and its dynamics.',
    color: 'info',
    to: '/social',
  },
  {
    title: 'English',
    desc: 'Enhance your communication and literature skills.',
    color: 'primary',
    to: '/english',
  },
  {
    title: 'Art',
    desc: 'Create art and let your imagination shine!',
    color: 'secondary',
    to: '/art',
  },
];

const Subjects = () => {
  const [user, setUser] = useState(null);
  const [showAside, setShowAside] = useState(false);

  const toggleAside = () => setShowAside(!showAside);

  const getImageSrc = () =>
    user?.image
      ? `data:image/jpeg;base64,${user.image}`
      : '/assets/imagen_defecto.jpeg';

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

  return (
    <Box sx={{ bgcolor: '#f9fafc', minHeight: '100vh' }}>
      {/* NAVBAR */}
      <CustomNavbar toggleAside={toggleAside} getImageSrc={getImageSrc} />

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

      {/* HERO */}
      <Box
        sx={{
          height: '60vh',
          background: 'linear-gradient(90deg, #ff7b54, #ffcc29)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#000',
          px: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" fontWeight="bold">
            Explore Your Subjects
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Learn, Grow, and Succeed with Edunova
          </Typography>
          <Button
            variant="contained"
            color="inherit"
            size="large"
            component={Link}
            to="/about"
            sx={{ mt: 4 }}
          >
            Learn More
          </Button>
        </motion.div>
      </Box>

      {/* IMAGE SECTION */}
      <Container sx={{ textAlign: 'center', py: 5 }}>
        <motion.img
          src="/assets/alumnos.jpg"
          alt="Students learning"
          style={{
            borderRadius: '50%',
            maxWidth: '50%',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <Typography variant="body1" color="textSecondary" sx={{ mt: 3 }}>
          Join a community of lifelong learners.
        </Typography>
      </Container>

      {/* SUBJECT CARDS */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {subjects.map((subject, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {subject.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                  {subject.desc}
                </Typography>
                <Button
                  variant="outlined"
                  color={subject.color}
                  component={Link}
                  to={subject.to}
                >
                  View Details
                </Button>
              </Paper>
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

export default Subjects;
