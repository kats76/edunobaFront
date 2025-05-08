import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

axios.defaults.withCredentials = true; 

const MarkEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [mark, setMark] = useState({
    score: '', 
    date: new Date().toISOString().slice(0, 16),
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMark = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/mark/byId/${id}`);
        const data = response.data;
        setMark({
          score: data.score || '',
          date: data.date || new Date().toISOString().slice(0, 16),
        });
      } catch (err) {
        setError('Error loading mark details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadMark();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const parsedScore = parseInt(mark.score, 10);

    if (isNaN(parsedScore) || parsedScore <= 0) {
      alert('Please enter a valid score greater than 0.');
      return;
    }

    const updatedMark = {
      score: parsedScore,
      date: mark.date, // Fecha se mantiene igual
    };

    try {
      await axios.put(`http://localhost:8080/api/mark/update/${id}`, updatedMark);
      navigate('/mark-list');
    } catch (err) {
      setError('There was an error updating the mark');
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setMark((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleBack = () => {
    navigate(`/mark-list`);
  };

  if (error) return <p className="text-danger">{error}</p>;

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status" aria-label="Loading mark data"></div>
        <p>Loading mark details...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container mt-5">
        <h2>Edit Mark</h2>
        <form onSubmit={handleSubmit} className="form-group">

          {/* Score */}
          <div className="mb-3">
            <label htmlFor="score" className="form-label">Score:</label>
            <input
              type="number"
              id="score"
              className="form-control"
              value={mark.score}
              onChange={handleChange}
              required
            />
          </div>

          {/* Date */}
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date:</label>
            <input
              type="datetime-local"
              id="date"
              className="form-control"
              value={mark.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Buttons */}
          <button type="submit" className="btn btn-primary">Edit</button>
          <button type="button" onClick={handleBack} className="btn btn-secondary ms-2">Go back</button>
        </form>
      </div>

      <footer className="mt-5 bg-primary text-white py-3">
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 Third Class A | Designed with ❤️ for enthusiastic learners.</p>
        </div>
      </footer>
    </div>
  );
};

export default MarkEditForm;
