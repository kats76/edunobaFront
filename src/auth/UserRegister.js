import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/axiosConfig";
import 'bootstrap/dist/css/bootstrap.min.css';

// Asegúrate de que Axios envíe cookies
axios.defaults.withCredentials = true;

const UserRegister = () => {
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [confirmPassword, setConfirmPassword] = useState("");  
  const [username, setUsername] = useState("");  
  const [isPremium, setIsPremium] = useState(false);  
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const [error, setError] = useState(null);  
  const [success, setSuccess] = useState(null); 
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsPremium(e.target.checked);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);

      const base64Reader = new FileReader();
      base64Reader.onloadend = () => {
        const base64String = base64Reader.result.split(',')[1];
        setImage(base64String);
      };
      base64Reader.readAsDataURL(file);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();  
    setLoading(true); 
    setError(null);  
    setSuccess(null);  

    if (password !== confirmPassword) {
      setError("The passwords do not match.");  
      setLoading(false);  
      return;
    }

    try {
      const userData = {
        email,
        password,
        username,
        isPremium,
        image: image || null
      };

      const response = await axios.post("http://localhost:8080/api/user/auth/register", userData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true 
      });

      setSuccess(response.data || "Successful registration. You can now log in.");
      navigate("/userLogin");

      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setUsername("");
      setIsPremium(false);
      setImage(null);
      setImagePreview(null);
    } catch (err) {
      console.log(err.response);
      setError(err.response?.data || "Error registering. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="card shadow-lg p-4 bg-white rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4 text-primary">Register</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Profile Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <div className="mt-2">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                  className="img-thumbnail"
                />
              </div>
            )}
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isPremium"
              checked={isPremium}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="isPremium">I want to register as Premium</label>
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="text-center mt-3">
          <p>Already have an account? <Link to="/userLogin" className="text-primary">Log in here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;

