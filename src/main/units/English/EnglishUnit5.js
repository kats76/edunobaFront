import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./EnglishUnit.css";

const EnglishUnit5 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-container">
      <h1 className="title">Sociocultural Aspects and Intercultural Awareness</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Learn about different cultures and traditions.</li>
          <li>Understand how people around the world live and communicate.</li>
          <li>Respect and appreciate diversity in our community and beyond.</li>
          <li>Recognize the similarities and differences between cultures.</li>
          <li>Build awareness of global and local customs and practices.</li>
        </ul>
      </section>

      {/* What is Intercultural Awareness? */}
      <section className="section">
        <h2 className="section-title">1. What is Intercultural Awareness?</h2>
        <p className="section-text">
          Intercultural awareness is understanding and respecting people from different cultures. It helps us learn how to communicate and connect with others who may have different traditions or ways of life.
        </p>
        <h3>Examples of Intercultural Awareness:</h3>
        <ul>
          <li>Learning about holidays celebrated in other countries.</li>
          <li>Understanding how people greet each other around the world.</li>
          <li>Trying food from a different culture.</li>
        </ul>
        <h4>Activity: Share a Tradition</h4>
        <p>Think of a tradition your family has. Share it with your classmates and learn about theirs!</p>
      </section>

      {/* Exploring Cultures */}
      <section className="section">
        <h2 className="section-title">2. Exploring Cultures</h2>
        <p className="section-text">
          Every culture has unique traditions, food, music, and clothing. Learning about these aspects helps us understand and appreciate the world around us.
        </p>
        <h3>Activity: Cultural Exploration</h3>
        <p>Pick a country and draw its flag. Write one interesting fact about its culture!</p>
      </section>

      {/* Similarities and Differences */}
      <section className="section">
        <h2 className="section-title">3. Similarities and Differences</h2>
        <p className="section-text">
          While people around the world have different customs, we also share many things in common. Recognizing both helps us build connections.
        </p>
        <h3>Activity: Find a Connection</h3>
        <p>Talk to a classmate and find one thing that is the same and one thing that is different between your families.</p>
      </section>

      {/* Respecting Diversity */}
      <section className="section">
        <h2 className="section-title">4. Respecting Diversity</h2>
        <p className="section-text">
          Respecting diversity means valuing people’s differences, such as their culture, language, or beliefs. It helps create a welcoming and kind community.
        </p>
        <h3>Activity: Acts of Kindness</h3>
        <p>Write or draw one way you can show respect and kindness to someone from a different culture.</p>
      </section>

      {/* Global and Local Customs */}
      <section className="section">
        <h2 className="section-title">5. Global and Local Customs</h2>
        <p className="section-text">
          Customs are ways people celebrate, greet each other, or live their daily lives. Some customs are shared worldwide, while others are unique to specific communities.
        </p>
        <h3>Activity: Custom Spotlight</h3>
        <p>Think of a custom or celebration in your town or country. Write about it or draw a picture to share with the class.</p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: Sociocultural Awareness</h2>
        <p>Let’s see what you’ve learned!</p>
        <ol>
          <li><strong>What is one way to show respect for other cultures?</strong>
            <ul>
              <li>a) Learn about their traditions</li>
              <li>b) Ignore them</li>
              <li>c) Say their customs are strange</li>
            </ul>
          </li>
          <li><strong>What is a custom?</strong>
            <ul>
              <li>a) A way people celebrate or live their lives</li>
              <li>b) A type of food</li>
              <li>c) A language</li>
            </ul>
          </li>
          <li><strong>Why is diversity important?</strong>
            <ul>
              <li>a) It helps us learn from each other</li>
              <li>b) It makes everyone the same</li>
              <li>c) It has no value</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          Learning about sociocultural aspects and intercultural awareness helps us connect with others and appreciate the world’s diversity. By respecting different traditions and finding common ground, we build a more understanding and peaceful community. Let’s continue exploring and celebrating our differences and similarities!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"The beauty of the world lies in the diversity of its people." - Unknown</p>
      </footer>
    </div>
  );
};

export default EnglishUnit5;
