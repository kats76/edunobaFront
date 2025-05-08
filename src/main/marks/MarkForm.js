import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Hacer que Axios use cookies en todas las solicitudes
axios.defaults.withCredentials = true; 

const MarkForm = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 16)); 
  const [error, setError] = useState(null);

  const createMark = async (studentData) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/mark/add`, studentData);
      return response.data;
    } catch (err) {
      throw new Error(err?.response?.data?.message || err.message || 'Error while adding student.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!score || !date) {
      setError('Please fill in all fields.');
      return;
    }

    if (isNaN(score) || score <= 0) {
      alert('Please enter a valid positive number for the score.');
      return;
    }

    const newMark = {
      score: parseInt(score),
      date: new Date(date).toISOString(),
    };

    try {
      await createMark(newMark);

      // Limpiar los campos del formulario
      setScore('');
      setDate(new Date().toISOString().slice(0, 16)); 


      navigate(`/mark-list}`); // Redirigir al usuario después de agregar al estudiante
    } catch (err) {
      setError('Failed to add mark');
    }
  };

  const handleBack = () => {
    navigate(`/mark-list`);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Mark</h2>
      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit} className="form-group">
        <div className="mb-3">
          <label htmlFor="score" className="form-label">Score:</label>
          <input type="number" id="name" className="form-control" value={score} onChange={(e) => setScore(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date:</label>
          <input type="datetime-local" id="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
        <button type="button" onClick={handleBack} className="btn btn-secondary ms-2">Go Back</button>
      </form>
    </div>
  );
};

export default MarkForm;
