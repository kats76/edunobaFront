import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Configurar Axios para incluir las cookies en las solicitudes
axios.defaults.withCredentials = true; 

const StudentInfo = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleting, setDeleting] = useState(false);


    // Fetch student details by ID
    useEffect(() => {
        if (!id || isNaN(parseInt(id, 10))) {
            setError('Invalid student ID');
            setLoading(false);
            return;
        }

        const fetchStudent = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/student/byId/${id}`);
                setStudent(response.data);
            } catch (err) {
                setError(err.response?.data?.message || err.message || 'Failed to fetch student details');
            } finally {
                setLoading(false);
            }
        };

        fetchStudent();
    }, [id]);

    // Delete student function
    const handleDeleteStudent = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this student?');
        if (confirmDelete) {
            setDeleting(true);
            try {
                await axios.delete(`http://localhost:8080/api/student/delete/${id}`);
                navigate(`/class`);
            } catch (err) {
                setError('Failed to delete student');
            } finally {
                setDeleting(false);
            }
        }
    };

    // Redirigir a la página de actualizar estudiante
    const handleUpdateStudent = (id) => {
        navigate(`/update-student/${id}`);
    };

    // Handle to go to the mark list page
    const handleMarkList = () => {
        navigate(`/mark-list`);
    };

    // Helper function to get value, with fallback text
    const getValue = (value, fallback = 'Not available') => value ?? fallback;

    // Render loading state
    if (loading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status" aria-label="Loading student details"></div>
                <p>Loading details of the student...</p>
            </div>
        );
    }

    // Render error state
    if (error) {
        return <p className="text-center text-danger">{error}</p>;
    }

    // Render student details
    return (
        <div className="container mt-5">
            <h2>Student Details</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <strong>Student Name:</strong> {getValue(student?.name)}
                    </h5>
                    <p><strong>ID:</strong> {getValue(student?.id)}</p>
                    <p><strong>Name:</strong> {getValue(student?.name)}</p>
                    <p><strong>Surname:</strong> {getValue(student?.surname)}</p>
                    <p><strong>Nickname:</strong> {getValue(student?.nickname)}</p>
                    <p><strong>Age:</strong> {getValue(student?.age)}</p>
                    <p><strong>Favourite Subject:</strong> {getValue(student?.favouriteSubject)}</p>
                    <p><strong>Multiple Intelligences:</strong> {getValue(student?.multipleIntelligences)}</p>
                    <p><strong>Hobbies:</strong> {getValue(student?.hobbies)}</p>
                    <p><strong>Is Premium:</strong> {getValue(student?.isPremium ? 'Yes' : 'No')}</p>
                    
                    {/* Mostrar la imagen en Base64 si está disponible */}
                    <p><strong>Image:</strong> 
                        {student?.image ? (
                            <img 
                                src={`data:image/jpeg;base64,${student.image}`} 
                                alt="Student" 
                                className="img-fluid mt-2" 
                                style={{ maxWidth: '200px', height: 'auto' }} 
                            />
                        ) : (
                            'Not available'
                        )}
                    </p>
                </div>
            </div>

            <div className="mt-3">
                <button
                    className="btn btn-warning me-2"
                    onClick={() => student?.id && handleUpdateStudent(student.id)}
                    disabled={!student?.id}  
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger me-2"
                    onClick={() => handleDeleteStudent(student.id)} 
                    disabled={deleting}
                >
                    {deleting ? 'Deleting...' : 'Delete'}
                </button>
                <button
                    className="btn btn-info me-2"
                    onClick={handleMarkList}
                >   
                    View Marks
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => navigate(`/class`)}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default StudentInfo;
