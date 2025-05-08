import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Configurar Axios para incluir cookies
axios.defaults.withCredentials = true;

const MarkInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [mark, setMark] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!id || isNaN(parseInt(id, 10))) {
      setError('Invalid mark ID');
      setLoading(false);
      return;
    }

    const fetchMark = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/mark/byId/${id}`);
        setMark(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to fetch mark details');
      } finally {
        setLoading(false);
      }
    };

    fetchMark();
  }, [id]);

  const handleDeleteMark = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this mark?');
    if (confirmDelete) {
      setDeleting(true);
      try {
        await axios.delete(`http://localhost:8080/api/mark/delete/${id}`);
        navigate(`/mark-list`);
      } catch (err) {
        setError('Failed to delete mark');
      } finally {
        setDeleting(false);
      }
    }
  };

  const handleUpdateMark = () => {
    navigate(`/update-mark/${id}`);
  };

  const handleGoBack = () => {
    navigate(`/mark-list`);
  };

  const getValue = (value, fallback = 'Not available') => value ?? fallback;

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status" aria-label="Loading mark details"></div>
        <p>Loading mark details...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-danger">{error}</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Mark Details</h2>
      <div className="card">
        <div className="card-body">
          <p><strong>Score:</strong> {getValue(mark?.score)}</p>
          <p><strong>Date:</strong> {getValue(mark?.date)}</p>
        </div>
      </div>

      <div className="mt-3">
        <button
          className="btn btn-warning me-2"
          onClick={handleUpdateMark}
          disabled={!mark?.id}
        >
          Edit
        </button>
        <button
          className="btn btn-danger me-2"
          onClick={handleDeleteMark}
          disabled={deleting}
        >
          {deleting ? 'Deleting...' : 'Delete'}
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default MarkInfo;
