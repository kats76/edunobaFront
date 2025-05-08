import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./NaturalUnit.css";

const NaturalUnit5 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">The Earth and the Universe</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Define the universe and describe its vastness and components.</li>
          <li>Identify the planets in our solar system and their characteristics.</li>
          <li>Explain the structure of the Earth and its essential components for life.</li>
          <li>Understand the concepts of day and night and how they occur.</li>
          <li>Describe the Moon, its phases, and its relationship with Earth.</li>
        </ul>
      </section>

      {/* Universe */}
      <section className="section">
        <h2 className="section-title">1. What Is the Universe?</h2>
        <p className="section-text">
          The universe is everything! It includes all the stars, planets, and galaxies. It's so big that we can't even imagine its size.
        </p>
        <h3>Fun Facts About the Universe</h3>
        <ul>
          <li>The universe started with a big explosion called the Big Bang.</li>
          <li>There are billions of stars in the sky, and each one is like a tiny sun.</li>
          <li>Galaxies are groups of stars, and we live in a galaxy called the Milky Way.</li>
        </ul>
        <h4>Activity: Starry Night</h4>
        <p>
          Draw a picture of the night sky with stars, a moon, and maybe some planets!
        </p>
      </section>

      {/* Solar System */}
      <section className="section">
        <h2 className="section-title">2. Our Solar System</h2>
        <p className="section-text">
          Our solar system is a group of planets that orbit the Sun. The Sun is at the center, and it gives us light and heat.
        </p>
        <h3>The Planets</h3>
        <ul>
          <li><strong>Mercury:</strong> The smallest planet, closest to the Sun.</li>
          <li><strong>Venus:</strong> The hottest planet.</li>
          <li><strong>Earth:</strong> Our home!</li>
          <li><strong>Mars:</strong> The red planet.</li>
          <li><strong>Jupiter:</strong> The biggest planet.</li>
          <li><strong>Saturn:</strong> Has beautiful rings.</li>
          <li><strong>Uranus:</strong> Spins on its side.</li>
          <li><strong>Neptune:</strong> The farthest planet from the Sun.</li>
        </ul>
        <h4>Activity: Build a Solar System</h4>
        <p>
          Use paper, markers, or playdough to create a model of the solar system. Label the planets and the Sun!
        </p>
      </section>

      {/* The Earth */}
      <section className="section">
        <h2 className="section-title">3. The Earth</h2>
        <p className="section-text">
          The Earth is the only planet we know that has life. It has water, air, and land that help living things survive.
        </p>
        <h3>Parts of the Earth</h3>
        <ul>
          <li><strong>Land:</strong> Mountains, forests, deserts, and plains.</li>
          <li><strong>Water:</strong> Oceans, rivers, lakes, and ice.</li>
          <li><strong>Air:</strong> The atmosphere that protects us and helps us breathe.</li>
        </ul>
        <h4>Activity: Earth Art</h4>
        <p>
          Draw or paint the Earth. Show the blue oceans, green forests, and white clouds!
        </p>
      </section>

      {/* Day and Night */}
      <section className="section">
        <h2 className="section-title">4. Day and Night</h2>
        <p className="section-text">
          We have day and night because the Earth spins. When our side of the Earth faces the Sun, it’s daytime. When it faces away, it’s nighttime.
        </p>
        <h4>Activity: Shadow Play</h4>
        <p>
          Use a flashlight and an object to create shadows. What happens to the shadow when the light moves?
        </p>
      </section>

      {/* The Moon */}
      <section className="section">
        <h2 className="section-title">5. The Moon</h2>
        <p className="section-text">
          The Moon is Earth’s closest neighbor in space. It doesn’t have its own light but reflects light from the Sun. The Moon changes shape as it orbits the Earth. These shapes are called phases.
        </p>
        <h3>Phases of the Moon</h3>
        <ul>
          <li><strong>Full Moon:</strong> The whole Moon is bright.</li>
          <li><strong>New Moon:</strong> The Moon is dark.</li>
          <li><strong>Half Moon:</strong> We see half of the Moon.</li>
        </ul>
        <h4>Activity: Moon Phases</h4>
        <p>
          Use cookies or paper to show the different phases of the Moon!
        </p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: The Earth and the Universe</h2>
        <p>Let’s test your knowledge!</p>
        <ol>
          <li><strong>What is the Sun?</strong>
            <ul>
              <li>a) A planet</li>
              <li>b) A star</li>
              <li>c) A moon</li>
            </ul>
          </li>
          <li><strong>Which planet has life?</strong>
            <ul>
              <li>a) Mars</li>
              <li>b) Jupiter</li>
              <li>c) Earth</li>
            </ul>
          </li>
          <li><strong>What causes day and night?</strong>
            <ul>
              <li>a) The Earth spinning</li>
              <li>b) The Moon moving</li>
              <li>c) The Sun turning off</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          In this unit, we explored the vastness of the universe and its components, including the planets of our solar system and their characteristics. We learned about Earth, our unique home that supports life, and how its rotation gives rise to the cycles of day and night. We also discovered the relationship between Earth and the Moon, as well as the phases of the Moon. Let us remember that the universe is a fascinating and vast place, full of wonders that we continue to explore and learn about. Let’s keep looking up at the stars!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Look up at the stars and dream of the universe beyond!" - Unknown</p>
      </footer>
    </div>
  );
};

export default NaturalUnit5;
