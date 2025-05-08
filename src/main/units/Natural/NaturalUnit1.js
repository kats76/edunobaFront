import React from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './NaturalUnit.css'

const NaturalUnit1 = () => {
  const navigate = useNavigate(); 
  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="body app-container">
      {/* Title */}
      <h1 className="title">The Human Body and Health</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Identify the major parts of the human body and their functions.</li>
          <li>Understand the importance of nutrition and healthy eating habits.</li>
          <li>Recognize the significance of hygiene and handwashing.</li>
          <li>Explain the benefits of regular exercise and physical activity.</li>
          <li>Discuss the importance of rest and sleep for overall health.</li>
          <li>Identify common illnesses and ways to prevent them.</li>
        </ul>
      </section>

      {/* The Human Body */}
      <section className="section">
        <h2 className="section-title">1. The Human Body</h2>
        <p className="section-text">
          Our body is amazing! It is made up of many parts that work together to help us move, eat, breathe, and do everything we need. Let’s learn about some of the important parts of the body.
        </p>
        <h3>1.1. Body Parts</h3>
        <ul>
          <li><strong>Head:</strong> The top part of our body. It holds our brain, eyes, ears, nose, and mouth.</li>
          <li><strong>Torso:</strong> The middle part of the body. It holds important organs like the heart, lungs, and stomach.</li>
          <li><strong>Arms and Legs:</strong> We use them to move, play, and do many activities.</li>
        </ul>
        <h3>1.2. Important Systems</h3>
        <ul>
          <li><strong>The Skeletal System:</strong> Our bones make up our skeleton. The skeleton helps us stand and protect our organs.</li>
          <li><strong>The Muscular System:</strong> Muscles help us move. When we want to walk or pick something up, our muscles work.</li>
          <li><strong>The Digestive System:</strong> This system helps us break down food and get energy. The stomach and intestines are important parts.</li>
          <li><strong>The Circulatory System:</strong> The heart pumps blood to carry oxygen and nutrients to all parts of the body.</li>
        </ul>
      </section>

      {/* The Human Body */}
      <section className="section">
        <h2 className="section-title">2. Health and Hygiene</h2>
        <p className="section-text">
          To stay healthy, we need to take care of our body every day. Here are some ways to do it:
        </p>
        <h3>2.1. Healthy Eating</h3>
        <p className="section-text">
          Eating healthy food gives us energy. A healthy plate should have:
        </p>
        <ul>
          <li>Fruits and Vegetables</li>
          <li>Proteins (like chicken or beans)</li>
          <li>Grains (like rice or bread)</li>
          <li>Dairy (like milk or cheese)</li>
        </ul>
        <h4>Activity: Make a Healthy Plate</h4>
        <p>Draw a plate and divide it into four sections:</p>
        <ol>
          <li>One for fruits and vegetables.</li>
          <li>One for proteins.</li>
          <li>One for grains.</li>
          <li>One for dairy.</li>
        </ol>
        <p>Fill in the plate with your favorite healthy foods!</p>

        <h3>2.2. Washing Hands</h3>
        <p>
          Washing your hands is important to stop germs from spreading. Wash your hands:
        </p>
        <ul>
          <li>Before eating.</li>
          <li>After using the bathroom.</li>
          <li>After touching things that are dirty.</li>
        </ul>
        <h4>Activity: Wash Your Hands Song</h4>
        <p>Sing this song while you wash your hands to make sure you do it for long enough:</p>
        <p>
          🎵 "Wash, wash, wash your hands, <br />
          Wash them clean and bright! <br />
          Scrub them here, and scrub them there, <br />
          Wash them day and night!" 🎵
        </p>
      </section>

      {/* Exercise and Moving Your Body*/}
      <section className="section">
        <h2 className="section-title">3. Exercise and Moving Your Body</h2>
        <p>
          Exercise is good for your body and mind. When you exercise, your muscles get stronger, and your heart works better.
        </p>
        <h4>Activity: Try This Exercise Routine</h4>
        <ul>
          <li>Jumping Jacks: 10 times.</li>
          <li>Stretching: Reach up high for 5 seconds.</li>
          <li>Running in Place: Run in place for 30 seconds.</li>
          <li>Squats: Do 10 squats.</li>
        </ul>
      </section>

      {/* Rest and Sleep */}
      <section className="section">
        <h2 className="section-title">4. Rest and Sleep</h2>
        <p>
          Our body needs rest to stay strong and healthy. When we sleep, our body heals and gets ready for the next day.
        </p>
        <h4>Activity: Bedtime Routine</h4>
        <p>What is your bedtime routine? Write or draw the things you do before going to bed.</p>
        <ul>
          <li>Example: Brush teeth → Change into pajamas → Read a book → Sleep!</li>
        </ul>
      </section>

      {/* Common Illnesses and How to Stay Healthy */}
      <section className="section">
        <h2 className="section-title">5. Common Illnesses and How to Stay Healthy</h2>
        <p>
          Sometimes we can get sick, but we can prevent it by following healthy habits. Here are some common illnesses and how to avoid them:
        </p>
        <h3>Colds and Coughs:</h3>
        <ul>
          <li>Wash your hands often.</li>
          <li>Cover your mouth when you cough or sneeze.</li>
        </ul>
        <h3>Flu:</h3>
        <ul>
          <li>Stay home if you are sick so you don’t spread germs.</li>
          <li>Drink lots of water and rest.</li>
        </ul>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: The Human Body</h2>
        <p>Let’s check what you learned! Answer these questions:</p>
        <ol>
          <li><strong>What does the heart do?</strong>
            <ul>
              <li>a) Help us move</li>
              <li>b) Pump blood</li>
              <li>c) Help us breathe</li>
            </ul>
          </li>
          <li><strong>How many bones do we have in our body?</strong>
            <ul>
              <li>a) 206</li>
              <li>b) 100</li>
              <li>c) 300</li>
            </ul>
          </li>
          <li><strong>What should you eat to stay healthy?</strong>
            <ul>
              <li>a) Candy</li>
              <li>b) Vegetables, fruits, and protein</li>
              <li>c) Only chocolate</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          In this unit, we learned about the parts and systems of the human body, the importance of a healthy diet, hygiene, exercise, and rest. Taking care of our bodies through these habits is essential for staying healthy and enjoying an active and fulfilling life. Always remember to take care of yourself!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Take care of your body, and it will take care of you!" - Dean Jackson</p>
      </footer>
    </div>
  );
};

export default NaturalUnit1;
