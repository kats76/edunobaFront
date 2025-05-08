import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Hacer que Axios use cookies en todas las solicitudes
axios.defaults.withCredentials = true; 

const StudentForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [nickname, setNickname] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [favouriteSubject, setFavouriteSubject] = useState('');
  const [multipleIntelligences, setMultipleIntelligences] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [isPremium, setIsPremium] = useState(false);
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);

  const createStudent = async (studentData) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/student/add`,
        studentData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      return response.data;
    } catch (err) {
      throw new Error(err?.response?.data?.message || err.message || 'Error while adding student.');
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !surname || !nickname || !age || !grade || !favouriteSubject ||
      !multipleIntelligences || !hobbies || image === '' || isPremium === undefined
    ) {
      setError('Please fill in all fields.');
      return;
    }

    if (isNaN(age) || age <= 0) {
      alert('Please enter a valid positive number for the age.');
      return;
    }

    const newStudent = {
      name,
      surname,
      nickname,
      age: parseInt(age),
      grade,
      favouriteSubject,
      multipleIntelligences,
      hobbies,
      isPremium,
      image,
    };

    try {
      await createStudent(newStudent);

      // Limpiar los campos del formulario
      setName('');
      setSurname('');
      setNickname('');
      setAge('');
      setGrade('');
      setHobbies('');
      setFavouriteSubject('');
      setMultipleIntelligences('');
      setIsPremium(false);
      setImage('');

      navigate(`/class`); // Redirigir al usuario después de agregar al estudiante
    } catch (err) {
      setError('Failed to add student');
    }
  };

  const handleBack = () => {
    navigate(`/class`);
  };

  const handleBooleanChange = () => {
    setIsPremium(!isPremium);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result.split(',')[1]); // Guardar solo la parte Base64
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Student</h2>
      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit} className="form-group">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="surname" className="form-label">Surname:</label>
          <input type="text" id="surname" className="form-control" value={surname} onChange={(e) => setSurname(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="nickname" className="form-label">Nickname:</label>
          <input type="text" id="nickname" className="form-control" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Edad:</label>
          <input type="number" id="age" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="grade" className="form-label">Grade:</label>
          <input type="text" id="grade" className="form-control" value={grade} onChange={(e) => setGrade(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="favouriteSubject" className="form-label">Favourite Subject:</label>
          <input type="text" id="favouriteSubject" className="form-control" value={favouriteSubject} onChange={(e) => setFavouriteSubject(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="multipleIntelligences" className="form-label">Multiple Intelligences:</label>
          <input type="text" id="multipleIntelligences" className="form-control" value={multipleIntelligences} onChange={(e) => setMultipleIntelligences(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="hobbies" className="form-label">Hobbies:</label>
          <input type="text" id="hobbies" className="form-control" value={hobbies} onChange={(e) => setHobbies(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="isPremium" className="form-label">Is Premium:&nbsp;</label>
          <input type="checkbox" id="isPremium" className="form-check-input" checked={isPremium} onChange={handleBooleanChange} />
        </div>

        <p>{isPremium ? 'Premium is enabled' : 'Premium is disabled'}</p>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Imagen:</label>
          <input type="file" id="image" className="form-control" accept="image/*" onChange={handleImageChange} />
        </div>

        <button type="submit" className="btn btn-primary">Add</button>
        <button type="button" onClick={handleBack} className="btn btn-secondary ms-2">Go Back</button>
      </form>
    </div>
  );
};

export default StudentForm;
