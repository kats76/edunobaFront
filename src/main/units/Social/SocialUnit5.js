import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./SocialUnit.css";

const SocialUnit5 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      <h1 className="title">Citizenship and Civic Responsibility</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Define citizenship and explain the rights and responsibilities that come with it.</li>
          <li>Understand the concept of civic responsibility and its importance in a community.</li>
          <li>Discuss the significance of voting and how it impacts governance.</li>
          <li>Recognize the value of diversity and the importance of working together in society.</li>
          <li>Explain the role of government in protecting citizens' rights and providing services.</li>
        </ul>
      </section>
      
      {/* What is Citizenship? */}
      <section className="section">
        <h2 className="section-title">1. What is Citizenship?</h2>
        <p className="section-text">
          Citizenship is the status of being a member of a country. It gives you certain rights, such as the right to vote, and responsibilities, such as following the law and contributing to your community.
        </p>
        <h3>Key Rights of a Citizen:</h3>
        <ul>
          <li>Right to vote and participate in elections.</li>
          <li>Right to work, travel, and live freely in the country.</li>
          <li>Right to access education and healthcare.</li>
        </ul>
        <h4>Activity: Your Rights and Responsibilities</h4>
        <p>Can you list one right and one responsibility that citizens have? Write or draw them in your notebook!</p>
      </section>

      {/* Civic Responsibility */}
      <section className="section">
        <h2 className="section-title">2. Civic Responsibility</h2>
        <p className="section-text">
          Civic responsibility refers to the duties and obligations of citizens to participate in their community and country. This includes following the laws, voting, helping others, and caring for the environment.
        </p>
        <h3>Important Civic Responsibilities:</h3>
        <ul>
          <li>Obeying the law and respecting the rights of others.</li>
          <li>Participating in elections by voting.</li>
          <li>Volunteering and helping others in the community.</li>
          <li>Taking care of the environment.</li>
        </ul>
        <h4>Activity: Community Volunteer</h4>
        <p>Think about a way you can help your community. It could be picking up trash, helping a neighbor, or volunteering at a local charity. Write or draw your ideas!</p>
      </section>

      {/* The Importance of Voting */}
      <section className="section">
        <h2 className="section-title">3. The Importance of Voting</h2>
        <p className="section-text">
          Voting is a very important responsibility. It is how citizens have a say in how their country is run. When people vote, they help choose the leaders and laws that will shape the future of the country.
        </p>
        <h3>Activity: Mock Voting</h3>
        <p>Imagine there is an election for the president of your class. Who would you vote for and why? Discuss with your classmates or draw your idea of a good leader!</p>
      </section>

      {/* Respecting Diversity and Working Together */}
      <section className="section">
        <h2 className="section-title">4. Respecting Diversity and Working Together</h2>
        <p className="section-text">
          A good citizen is someone who respects and values others, no matter their background or beliefs. By working together, we can create a better and more peaceful society.
        </p>
        <h3>Activity: Respecting Diversity</h3>
        <p>Draw a picture of a community where people from different backgrounds and cultures work together for the common good. Write one way you can show respect for others in your community.</p>
      </section>

      {/* The Role of Government in Citizenship */}
      <section className="section">
        <h2 className="section-title">5. The Role of Government in Citizenship</h2>
        <p className="section-text">
          The government plays an important role in ensuring that citizens have their rights and can fulfill their responsibilities. It creates laws, ensures fairness, and provides services such as education and healthcare.
        </p>
        <h3>Activity: Understanding Government</h3>
        <p>Think about what the government does in your community. Write or draw a picture of a service or law that helps people in your town.</p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: Citizenship and Civic Responsibility</h2>
        <p>Let's check what you’ve learned!</p>
        <ol>
          <li><strong>What is one responsibility of a citizen?</strong>
            <ul>
              <li>a) To follow the law</li>
              <li>b) To ignore the rules</li>
              <li>c) To waste resources</li>
            </ul>
          </li>
          <li><strong>What is voting?</strong>
            <ul>
              <li>a) A responsibility of citizens</li>
              <li>b) A way to ignore government rules</li>
              <li>c) A job for only certain people</li>
            </ul>
          </li>
          <li><strong>Why is respecting diversity important?</strong>
            <ul>
              <li>a) It helps create a peaceful society</li>
              <li>b) It makes people fight</li>
              <li>c) It has no effect</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          In this unit, we explored the concept of citizenship and the rights and responsibilities it entails. We learned about the importance of civic responsibility, which includes voting, helping the community, and caring for the environment. We also discussed the fundamental role of voting in governance and how it allows citizens to influence the future of their country. Additionally, we reflected on the value of diversity and the importance of working together to build a more peaceful and respectful society. Finally, we understood how the government protects citizens' rights and provides essential services. Let us remember that being a good citizen involves actively participating and contributing to the well-being of our community. Let’s continue to be committed to our civic responsibilities!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"A good citizen is someone who makes the world a better place for everyone." - Unknown</p>
      </footer>
    </div>
  );
};

export default SocialUnit5;
