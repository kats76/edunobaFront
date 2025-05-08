import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

axios.defaults.withCredentials = true; 

const StudentEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: '',
    surname: '',
    nickname: '',
    age: '',
    grade: '',
    favouriteSubject: '',
    multipleIntelligences: '',
    hobbies: '',
    isPremium: false,
    image: '',
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/student/byId/${id}`);
        const data = response.data;
        setStudent({
          name: data.name || '',
          surname: data.surname || '',
          nickname: data.nickname || '',
          age: data.age || '',
          grade: data.grade || '',
          favouriteSubject: data.favouriteSubject || '',
          multipleIntelligences: data.multipleIntelligences || '',
          hobbies: data.hobbies || '',
          isPremium: data.isPremium || false,
          image: data.image || '',
        });
      } catch (err) {
        setError('Error loading student details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadStudent();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const parsedAge = parseInt(student.age, 10);

    if (isNaN(parsedAge) || parsedAge <= 0) {
      alert('Please enter a valid age greater than 0.');
      return;
    }

    const updatedStudent = {
      ...student,
      age: parsedAge,
    };

    try {
      await axios.put(`http://localhost:8080/api/student/update/${id}`, updatedStudent);
      navigate('/class');
    } catch (err) {
      setError('There was an error updating the student');
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudent((prevState) => ({
          ...prevState,
          image: reader.result.split(',')[1],
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBooleanChange = () => {
    setStudent(prevState => ({
      ...prevState,
      isPremium: !prevState.isPremium,
    }));
  };

  const handleBack = () => {
    navigate(`/class`);
  };

  if (error) return <p className="text-danger">{error}</p>;

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status" aria-label="Loading student data"></div>
        <p>Loading student details...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container mt-5">
        <h2>Edit Student</h2>
        <form onSubmit={handleSubmit} className="form-group">

          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={student.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Surname */}
          <div className="mb-3">
            <label htmlFor="surname" className="form-label">Surname:</label>
            <input
              type="text"
              id="surname"
              className="form-control"
              value={student.surname}
              onChange={handleChange}
              required
            />
          </div>

          {/* Nickname */}
          <div className="mb-3">
            <label htmlFor="nickname" className="form-label">Nickname:</label>
            <input
              type="text"
              id="nickname"
              className="form-control"
              value={student.nickname}
              onChange={handleChange}
              required
            />
          </div>

          {/* Age */}
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age:</label>
            <input
              type="number"
              id="age"
              className="form-control"
              value={student.age}
              onChange={handleChange}
              required
            />
          </div>

          {/* Grade */}
          <div className="mb-3">
            <label htmlFor="grade" className="form-label">Grade:</label>
            <input
              type="text"
              id="grade"
              className="form-control"
              value={student.grade}
              onChange={handleChange}
              required
            />
          </div>

          {/* Favourite Subject */}
          <div className="mb-3">
            <label htmlFor="favouriteSubject" className="form-label">Favourite Subject:</label>
            <input
              type="text"
              id="favouriteSubject"
              className="form-control"
              value={student.favouriteSubject}
              onChange={handleChange}
              required
            />
          </div>

          {/* Multiple Intelligences */}
          <div className="mb-3">
            <label htmlFor="multipleIntelligences" className="form-label">Multiple Intelligences:</label>
            <input
              type="text"
              id="multipleIntelligences"
              className="form-control"
              value={student.multipleIntelligences}
              onChange={handleChange}
              required
            />
          </div>

          {/* Hobbies */}
          <div className="mb-3">
            <label htmlFor="hobbies" className="form-label">Hobbies:</label>
            <input
              type="text"
              id="hobbies"
              className="form-control"
              value={student.hobbies}
              onChange={handleChange}
              required
            />
          </div>

          {/* Is Premium */}
          <div className="mb-3">
            <label htmlFor="isPremium" className="form-label">Is Premium:&nbsp;</label>
            <button
              type="button"
              onClick={handleBooleanChange}
              className="btn btn-outline-secondary"
            >
              {student.isPremium ? 'Premium' : 'Not Premium'}
            </button>
          </div>

          {/* Image */}
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image (Base64):</label>
            <input
              type="file"
              id="image"
              className="form-control"
              onChange={handleImageChange}
              accept="image/*"
            />
            {student.image && (
              <img
                src={`data:image/jpeg;base64,${student.image}`}
                alt="Student"
                className="d-block mx-auto mt-3"
                style={{ width: '100px', height: '100px' }}
              />
            )}
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

export default StudentEditForm;
