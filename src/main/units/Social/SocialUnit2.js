import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./SocialUnit.css";

const SocialUnit2 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">Geography and Spatial Representation</h1>

      {/* Key Objectives */}
      <section className="section">
      <h3 className="section-title">Objectives</h3>
      <ul>
        <li>Define geography and explain its significance in understanding the Earth and human interactions with it.</li>
        <li>Identify and differentiate between various types of maps and their uses.</li>
        <li>Understand the concepts of latitude and longitude and how they are used to locate places on Earth.</li>
        <li>Describe the physical features of the Earth and their characteristics.</li>
        <li>Discuss how humans interact with geography and the impact of these interactions on the environment.</li>
      </ul>
      </section>
      
      {/* Geography */}
      <section className="section">
        <h2 className="section-title">1. What Is Geography?</h2>
        <p className="section-text">
          Geography is the study of the Earth’s surface and the way people interact with it. It helps us understand where places are located, what they look like, and how they change over time.
        </p>
        <h3>Activity: Map Exploration</h3>
        <p>Look at a world map. Can you find your country? Which continent is it in? Draw the map of your country and label its borders, major cities, and landmarks.</p>
      </section>
      
      {/* Maps and Globes */}
      <section className="section">
        <h2 className="section-title">2. Maps and Globes</h2>
        <p className="section-text">
          Maps and globes are tools that help us represent the Earth's surface. A globe is a model of the Earth, while a map is a flat representation of the Earth’s surface.
        </p>
        <h3>Types of Maps:</h3>
        <ul>
          <li><strong>Political Maps:</strong> Show the borders and locations of countries and cities.</li>
          <li><strong>Physical Maps:</strong> Show mountains, rivers, lakes, and other physical features of the Earth.</li>
          <li><strong>Topographic Maps:</strong> Show the elevation and shape of the land’s surface.</li>
        </ul>
        <h4>Activity: Map Matching</h4>
        <p>Match the map type to its features (e.g., "Political Map" → "Borders and Cities").</p>
      </section>
      
      {/* Coordinates and Location */}
      <section className="section">
        <h2 className="section-title">3. Coordinates and Location</h2>
        <p className="section-text">
          To find specific locations on Earth, we use a system of coordinates called latitude and longitude. Latitude measures how far north or south a place is from the Equator, while longitude measures how far east or west it is from the Prime Meridian.
        </p>
        <h3>Activity: Find the Coordinates</h3>
        <p>Using a globe or map, find the coordinates of different cities. Can you find the coordinates for your hometown?</p>
      </section>
      
      {/* Physical Features of the Earth */} 
      <section className="section">
        <h2 className="section-title">4. Physical Features of the Earth</h2>
        <p className="section-text">
          Earth has many different physical features, such as mountains, rivers, forests, deserts, and oceans. Let’s look at some of these features.
        </p>
        <h3>Types of Physical Features:</h3>
        <ul>
          <li><strong>Mountains:</strong> High, rocky areas of land.</li>
          <li><strong>Rivers:</strong> Large, flowing bodies of water.</li>
          <li><strong>Deserts:</strong> Dry areas with little rainfall.</li>
          <li><strong>Forests:</strong> Large areas covered with trees.</li>
          <li><strong>Oceans:</strong> Large bodies of saltwater that cover most of the Earth.</li>
        </ul>
        <h4>Activity: Landforms Picture</h4>
        <p>Draw or cut out pictures of different landforms and create a collage. Label each landform you use.</p>
      </section>
      
      {/* How Humans Interact with Geography */}
      <section className="section">
        <h2 className="section-title">5. How Humans Interact with Geography</h2>
        <p className="section-text">
          Humans interact with geography in many ways. We build cities, travel across different landscapes, and use the Earth’s resources. Our activities change the environment, so it's important to understand geography.
        </p>
        <h4>Activity: City Planning</h4>
        <p>Imagine you are planning a new city. Where would you put houses, schools, parks, and roads? Draw a map of your city.</p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: Geography</h2>
        <p>Test your knowledge of geography with these questions:</p>
        <ol>
          <li><strong>What type of map shows countries and cities?</strong>
            <ul>
              <li>a) Physical Map</li>
              <li>b) Political Map</li>
              <li>c) Topographic Map</li>
            </ul>
          </li>
          <li><strong>What does latitude measure?</strong>
            <ul>
              <li>a) How far north or south a place is</li>
              <li>b) How far east or west a place is</li>
              <li>c) The height of mountains</li>
            </ul>
          </li>
          <li><strong>Which of the following is a physical feature of the Earth?</strong>
            <ul>
              <li>a) A city</li>
              <li>b) A river</li>
              <li>c) A school</li>
            </ul>
          </li>
        </ol>
      </section>

    {/* Conclusion */}
    <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          In this unit, we learned about geography and its importance in understanding the Earth and human interactions with it. We explored different types of maps and their uses, as well as the system of latitude and longitude coordinates that helps us locate places. We also discussed the various physical features of the Earth, such as mountains, rivers, and deserts, and how humans interact with their environment, affecting it in turn. Let us remember that geography not only helps us understand the world around us but also guides us in planning and using our resources responsibly. Let’s continue exploring and learning about our planet!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Geography is the key that unlocks the stories of our planet!" - Unknown</p>
      </footer>
    </div>
  );
};

export default SocialUnit2;
