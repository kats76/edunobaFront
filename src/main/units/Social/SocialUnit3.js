import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./SocialUnit.css";

const SocialUnit3 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">Society and Culture</h1>

      {/* Key Objectives */}
      <section className="section">
      <h3 className="section-title">Objectives</h3>
      <ul>
        <li>Define society and explain its characteristics and importance in human life.</li>
        <li>Describe culture and its components, including language, food, clothing, and celebrations.</li>
        <li>Understand the significance of traditions and customs in different cultures.</li>
        <li>Discuss how cultures interact and influence one another through various means.</li>
        <li>Reflect on the role of society and culture in shaping personal identity and fostering respect for diversity.</li>
      </ul>
      </section>
      
      {/* What is Society? */}
      <section className="section">
        <h2 className="section-title">1. What is Society?</h2>
        <p className="section-text">
          Society is a group of people who live together in a community, sharing common values, traditions, and laws. Societies can be large or small, and they can have different ways of living and organizing themselves.
        </p>
        <h3>Activity: My Society</h3>
        <p>Draw a picture of your community or neighborhood. Label the important parts like homes, schools, and parks. What makes your society special?</p>
      </section>
      
      {/*What is Culture? */}
      <section className="section">
        <h2 className="section-title">2. What is Culture?</h2>
        <p className="section-text">
          Culture refers to the ideas, beliefs, customs, and traditions that are shared by a group of people. Culture is passed down from generation to generation and shapes the way people live, eat, dress, and celebrate.
        </p>
        <h3>Types of Culture:</h3>
        <ul>
          <li><strong>Language:</strong> The words we use to communicate.</li>
          <li><strong>Food:</strong> The types of food people eat.</li>
          <li><strong>Clothing:</strong> The clothes people wear in different cultures.</li>
          <li><strong>Celebrations:</strong> Special events or holidays people celebrate.</li>
        </ul>
        <h4>Activity: Cultural Exchange</h4>
        <p>Write down one thing you know about a culture different from your own. It could be a holiday, a traditional food, or a special custom!</p>
      </section>

      {/* Traditions and Customs */}
      <section className="section">
        <h2 className="section-title">3. Traditions and Customs</h2>
        <p className="section-text">
          Traditions and customs are the special ways that groups of people celebrate important events or mark certain times of the year. For example, many countries have unique ways of celebrating New Year's Eve or Christmas.
        </p>
        <h3>Activity: Family Traditions</h3>
        <p>Ask your parents or grandparents about a special tradition your family celebrates. Draw or write about it.</p>
      </section>

      {/* How Cultures Interact */}
      <section className="section">
        <h2 className="section-title">4. How Cultures Interact</h2>
        <p className="section-text">
          Cultures interact with each other through trade, travel, and communication. Sometimes, people from different cultures mix together and create new traditions and practices.
        </p>
        <h4>Activity: Cultural Influence</h4>
        <p>Think about a time when you learned something new from another culture. Did you try a new food or learn a new dance? Share your experience!</p>
      </section>

      {/* The Role of Society and Culture in Our Lives */}
      <section className="section">
        <h2 className="section-title">5. The Role of Society and Culture in Our Lives</h2>
        <p className="section-text">
          Society and culture play a big role in shaping our identity. They help us understand who we are, where we come from, and how we relate to others. Culture also helps us appreciate the differences between people and fosters respect.
        </p>
        <h4>Activity: My Cultural Identity</h4>
        <p>Write down three things that represent your culture or background. It could be your language, food, or a special tradition.</p>
      </section>
      
      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: Society and Culture</h2>
        <p>Let’s see how much you know about society and culture!</p>
        <ol>
          <li><strong>What is culture?</strong>
            <ul>
              <li>a) The weather</li>
              <li>b) A group of people living in the same place</li>
              <li>c) Ideas, beliefs, and customs shared by a group of people</li>
            </ul>
          </li>
          <li><strong>What is a tradition?</strong>
            <ul>
              <li>a) A regular event or celebration in a society</li>
              <li>b) A new way of living</li>
              <li>c) A type of food</li>
            </ul>
          </li>
          <li><strong>What is one way cultures interact?</strong>
            <ul>
              <li>a) By trading, traveling, and communicating</li>
              <li>b) By avoiding each other</li>
              <li>c) By having the same language</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          In this unit, we explored the concept of society and its importance in human life, as well as the rich diversity of culture and its components, such as language, food, clothing, and celebrations. We learned about the relevance of traditions and customs in different cultures and how they interact and influence each other through trade, travel, and communication. Additionally, we reflected on how society and culture shape our personal identity and foster respect for diversity. Let us remember that by appreciating and celebrating our differences, we enrich our lives and build more inclusive communities. Let’s continue learning and sharing our cultures!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Culture and society shape who we are and how we connect with the world around us!" - Unknown</p>
      </footer>
    </div>
  );
};

export default SocialUnit3;
