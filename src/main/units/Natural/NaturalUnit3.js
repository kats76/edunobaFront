import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./NaturalUnit.css";

const NaturalUnit3 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">Matter and Energy</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Define matter and identify its three states: solid, liquid, and gas.</li>
          <li>Describe the properties of matter and how they help us identify different materials.</li>
          <li>Explain what energy is and identify different types of energy.</li>
          <li>Understand how matter and energy interact and change each other.</li>
          <li>Discuss the importance of saving energy and ways to conserve it.</li>
        </ul>
      </section>

      {/* Matter */}
      <section className="section">
        <h2 className="section-title">1. What Is Matter?</h2>
        <p className="section-text">
          Matter is everything around us! It is anything that has mass and takes up space. Matter exists in three states: solid, liquid, and gas.
        </p>
        <h3>1.1. Examples of Matter</h3>
        <ul>
          <li><strong>Solid:</strong> Ice, rocks, books.</li>
          <li><strong>Liquid:</strong> Water, milk, juice.</li>
          <li><strong>Gas:</strong> Air, steam, balloons.</li>
        </ul>
        <h4>Activity: Sorting Game</h4>
        <p>
          Sort the objects into "Solid," "Liquid," and "Gas." Use pictures or real objects like an ice cube, a glass of water, and a balloon.
        </p>
      </section>

      {/* Properties of Matter */}
      <section className="section">
        <h2 className="section-title">2. Properties of Matter</h2>
        <p className="section-text">
          All matter has properties, like color, texture, size, and shape. These help us describe and identify different materials.
        </p>
        <h4>Activity: Hands-On Exploration</h4>
        <p>
          Touch and observe objects in a mystery box (e.g., sponge, metal spoon, fabric). Describe their properties like rough, smooth, hard, or soft.
        </p>
      </section>

      {/* Energy */}
      <section className="section">
        <h2 className="section-title">3. What Is Energy?</h2>
        <p className="section-text">
          Energy makes things happen! It helps things move, grow, and change. The Sun is the biggest source of energy for life on Earth.
        </p>
        <h3>Types of Energy</h3>
        <ul>
          <li><strong>Heat:</strong> From the Sun, fire, or a heater.</li>
          <li><strong>Light:</strong> From the Sun, lamps, or flashlights.</li>
          <li><strong>Motion:</strong> Energy from movement, like riding a bike or wind blowing.</li>
        </ul>
        <h4>Activity: Energy Hunt</h4>
        <p>
          Walk around and find examples of energy (e.g., light from a bulb, heat from a radiator, motion from a fan).
        </p>
      </section>

      {/* How Matter and Energy Work Together */}
      <section className="section">
        <h2 className="section-title">4. How Matter and Energy Work Together</h2>
        <p className="section-text">
          Energy can change matter. For example, heat can melt ice into water or boil water into steam.
        </p>
        <h4>Activity: Experiment</h4>
        <p>
          Melt a small piece of chocolate in your hands. Observe how heat changes the solid chocolate into a liquid.
        </p>
      </section>

      {/* Saving Energy */}
      <section className="section">
        <h2 className="section-title">5. Saving Energy</h2>
        <p className="section-text">
          We use energy every day, but it’s important not to waste it. Save energy by turning off lights, using clean energy, and recycling.
        </p>
        <h4>Activity: Energy Challenge</h4>
        <p>
          Write down three ways you can save energy at home or in the classroom.
        </p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: Matter and Energy</h2>
        <p>Let’s see what you’ve learned! Answer these questions:</p>
        <ol>
          <li><strong>What are the three states of matter?</strong>
            <ul>
              <li>a) Solid, Liquid, Gas</li>
              <li>b) Water, Air, Fire</li>
              <li>c) Big, Small, Medium</li>
            </ul>
          </li>
          <li><strong>Where does heat energy come from?</strong>
            <ul>
              <li>a) The Moon</li>
              <li>b) The Sun</li>
              <li>c) A Tree</li>
            </ul>
          </li>
          <li><strong>What can you do to save energy?</strong>
            <ul>
              <li>a) Leave the lights on</li>
              <li>b) Turn off lights when not in use</li>
              <li>c) Use more water</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          In this unit, we learned about matter and energy, their states and properties, as well as their interactions. We identified the three states of matter: solid, liquid, and gas, and explored different types of energy, such as thermal and light energy. We also discussed the importance of conserving energy and how small actions can make a big difference in protecting our planet. Remember that understanding matter and energy helps us take better care of our environment!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Energy makes the world go round!" - Unknown</p>
      </footer>
    </div>
  );
};

export default NaturalUnit3;
