import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./NaturalUnit.css";

const NaturalUnit6 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">Environmental Awareness and Sustainability</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Define the environment and explain its importance to all living things.</li>
          <li>Identify common environmental problems and their effects on nature.</li>
          <li>Explain the concept of sustainability and how to use resources wisely.</li>
          <li>Discuss the principles of reducing, reusing, and recycling to minimize waste.</li>
          <li>Describe ways to protect nature and contribute to environmental conservation.</li>
        </ul>
      </section>

      {/* Environment */}
      <section className="section">
        <h2 className="section-title">1. What Is the Environment?</h2>
        <p className="section-text">
          The environment is everything around us—plants, animals, water, air, and land. It’s our home, and we share it with many other living things.
        </p>
        <h3>Why Is the Environment Important?</h3>
        <ul>
          <li>It gives us air to breathe, water to drink, and food to eat.</li>
          <li>It provides homes for animals and plants.</li>
          <li>We need a clean environment to stay healthy and happy.</li>
        </ul>
        <h4>Activity: Nature Walk</h4>
        <p>
          Take a short walk outside. Look for plants, animals, and other parts of the environment. What do you see?
        </p>
      </section>

      {/* Problems in the Environment */}
      <section className="section">
        <h2 className="section-title">2. Problems in the Environment</h2>
        <p className="section-text">
          Our environment is in trouble because of pollution, cutting down too many trees, and wasting resources.
        </p>
        <h3>Types of Pollution</h3>
        <ul>
          <li><strong>Air Pollution:</strong> Smoke from cars and factories makes the air dirty.</li>
          <li><strong>Water Pollution:</strong> Trash and chemicals can harm rivers, lakes, and oceans.</li>
          <li><strong>Land Pollution:</strong> Littering and not recycling hurt the land.</li>
        </ul>
        <h4>Activity: Spot the Problem</h4>
        <p>
          Look at a picture of a park or playground. Can you find examples of pollution, like trash or smoke?
        </p>
      </section>

      {/* Sustainability */}
      <section className="section">
        <h2 className="section-title">3. What Is Sustainability?</h2>
        <p className="section-text">
          Sustainability means using resources carefully so we don’t run out and the Earth stays healthy for future generations.
        </p>
        <h3>How Can We Be Sustainable?</h3>
        <ul>
          <li>Save water by turning off the tap when brushing your teeth.</li>
          <li>Plant trees and take care of plants.</li>
          <li>Use less electricity by turning off lights and unplugging devices.</li>
        </ul>
        <h4>Activity: Saving Resources</h4>
        <p>
          Draw a picture of something you do to save water, electricity, or trees.
        </p>
      </section>

      {/* Reduce, Reuse, Recycle */}
      <section className="section">
        <h2 className="section-title">4. Reduce, Reuse, Recycle</h2>
        <p className="section-text">
          We can help the environment by reducing waste, reusing items, and recycling materials like paper, plastic, and metal.
        </p>
        <h3>Examples:</h3>
        <ul>
          <li><strong>Reduce:</strong> Use fewer plastic bags.</li>
          <li><strong>Reuse:</strong> Turn an old jar into a flower vase.</li>
          <li><strong>Recycle:</strong> Put paper, cans, and bottles in the recycling bin.</li>
        </ul>
        <h4>Activity: Recycling Art</h4>
        <p>
          Make something fun out of recycled items, like a birdhouse from a milk carton!
        </p>
      </section>

      {/* Protecting Nature */}
      <section className="section">
        <h2 className="section-title">5. Protecting Nature</h2>
        <p className="section-text">
          We can protect nature by planting trees, cleaning up trash, and taking care of animals.
        </p>
        <h3>How You Can Help:</h3>
        <ul>
          <li>Pick up trash in your neighborhood or park.</li>
          <li>Feed birds or make a small garden for pollinators like bees.</li>
          <li>Learn about endangered animals and how to protect them.</li>
        </ul>
        <h4>Activity: Helping Nature</h4>
        <p>
          Write down three things you can do to protect nature. Share them with your family or friends!
        </p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: Environmental Awareness</h2>
        <p>Let’s test what you learned!</p>
        <ol>
          <li><strong>What is air pollution?</strong>
            <ul>
              <li>a) Dirty water</li>
              <li>b) Smoke in the air</li>
              <li>c) Litter on the ground</li>
            </ul>
          </li>
          <li><strong>What can you do with an old jar?</strong>
            <ul>
              <li>a) Throw it away</li>
              <li>b) Reuse it</li>
              <li>c) Leave it outside</li>
            </ul>
          </li>
          <li><strong>Why is it important to save water?</strong>
            <ul>
              <li>a) To have fun</li>
              <li>b) To keep the environment healthy</li>
              <li>c) To waste less time</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          In this unit, we learned about the importance of the environment and how all living beings depend on it. We identified common environmental issues, such as pollution and deforestation, and explored the concept of sustainability, which teaches us to use resources responsibly. We also discussed the importance of reducing, reusing, and recycling to minimize waste and protect nature. Let us remember that every small action counts and that we can all contribute to environmental conservation for a healthier and more sustainable future. Let’s take care of our planet!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"A little change makes a big difference to our planet!" - Unknown</p>
      </footer>
    </div>
  );
};

export default NaturalUnit6;
