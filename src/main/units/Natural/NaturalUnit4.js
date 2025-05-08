import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./NaturalUnit.css";

const NaturalUnit4 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">Technology and Machines</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Define technology and explain its role in everyday life.</li>
          <li>Identify different types of machines and their functions.</li>
          <li>Describe how simple machines work and provide examples (e.g., levers, pulleys, inclined planes).</li>
          <li>Understand the relationship between technology, energy, and motion.</li>
          <li>Discuss the importance of innovation and how technology can solve problems.</li>
        </ul>
      </section>

      {/* Technology */}
      <section className="section">
        <h2 className="section-title">1. What Is Technology?</h2>
        <p className="section-text">
          Technology helps us solve problems and make life easier. From tools to computers, technology is all around us. It has been a part of human life for thousands of years!
        </p>
        <h3>Examples of Technology</h3>
        <ul>
          <li><strong>Old Technology:</strong> Stone tools, wheels.</li>
          <li><strong>Modern Technology:</strong> Computers, smartphones, cars.</li>
        </ul>
        <h4>Activity: Technology Timeline</h4>
        <p>
          Draw a timeline showing the evolution of a technology you use every day (e.g., phones or transportation).
        </p>
      </section>

      {/* Machines */}
      <section className="section">
        <h2 className="section-title">2. What Are Machines?</h2>
        <p className="section-text">
          Machines are tools that help us do work. Some are simple, like a hammer or a pair of scissors. Others are complex, like a washing machine or a robot.
        </p>
        <h3>Simple and Complex Machines</h3>
        <ul>
          <li><strong>Simple Machines:</strong> Lever, wheel and axle, pulley, inclined plane, screw, wedge.</li>
          <li><strong>Complex Machines:</strong> Cars, airplanes, computers.</li>
        </ul>
        <h4>Activity: Machine Match</h4>
        <p>
          Match pictures of tools to the type of machine they are (e.g., a seesaw is a lever, a ramp is an inclined plane).
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">3. How Machines Help Us</h2>
        <p className="section-text">
          Machines make work easier by reducing the effort needed. For example, a pulley helps lift heavy objects, and a wheel makes it easier to move things.
        </p>
        <h4>Activity: Build a Machine</h4>
        <p>
          Use everyday objects (e.g., paper, string, cardboard) to build a simple machine like a pulley or a ramp.
        </p>
      </section>

      {/* Technology in Everyday Life */}
      <section className="section">
        <h2 className="section-title">4. Technology in Everyday Life</h2>
        <p className="section-text">
          Technology is everywhere! We use it for communication, transportation, learning, and entertainment. Think about all the gadgets and tools you use every day.
        </p>
        <h4>Activity: My Favorite Technology</h4>
        <p>
          Draw your favorite piece of technology and explain how it helps you.
        </p>
      </section>

      {/* Responsible Use of Technology */}
      <section className="section">
        <h2 className="section-title">5. Responsible Use of Technology</h2>
        <p className="section-text">
          Technology is amazing, but we must use it wisely. This means turning off devices when not needed, recycling old electronics, and balancing screen time with outdoor activities.
        </p>
        <h4>Activity: Technology Pledge</h4>
        <p>
          Write a short pledge about how you will use technology responsibly (e.g., “I will turn off my tablet when I am not using it”).
        </p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: Technology and Machines</h2>
        <p>Let’s see what you’ve learned! Answer these questions:</p>
        <ol>
          <li><strong>Which of these is a simple machine?</strong>
            <ul>
              <li>a) Hammer</li>
              <li>b) Car</li>
              <li>c) Robot</li>
            </ul>
          </li>
          <li><strong>What does a pulley do?</strong>
            <ul>
              <li>a) Helps lift objects</li>
              <li>b) Makes music</li>
              <li>c) Cleans the floor</li>
            </ul>
          </li>
          <li><strong>How can we use technology responsibly?</strong>
            <ul>
              <li>a) Use it all day and night</li>
              <li>b) Recycle old electronics</li>
              <li>c) Throw it away anywhere</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          In this unit, we explored the concept of technology and its fundamental role in our daily lives. We learned about different types of machines, from simple to complex, and how they facilitate our work and activities. We also discussed the importance of using technology responsibly and how innovation can solve problems. Let us remember that technology, when used wisely, can enhance our quality of life and help us build a better future. Let’s continue learning and using technology positively!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Technology is a tool; use it wisely to build a better world!" - Unknown</p>
      </footer>
    </div>
  );
};

export default NaturalUnit4;
