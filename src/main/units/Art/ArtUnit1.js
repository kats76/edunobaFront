import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./ArtUnit.css";

const ArtUnit1 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">Artistic Expression and Creation</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Learning Objectives</h3>
        <ul>
          <li>Express emotions, ideas, and thoughts through art.</li>
          <li>Learn and experiment with different artistic materials and techniques.</li>
          <li>Encourage creativity and imagination through artistic creation.</li>
          <li>Understand art as a form of communication between people.</li>
          <li>Value one's own work and that of others in artistic creation.</li>
        </ul>
      </section>

      {/* What is Artistic Expression? */}
      <section className="section">
        <h2 className="section-title">1. What is Artistic Expression?</h2>
        <p className="section-text">
          Artistic expression is the way we use art to tell how we feel, think, or dream. Sometimes, we use brushes, pencils, clay, music, or even our own body to express ourselves.
        </p>
        <h3>Types of Artistic Expression:</h3>
        <ul>
          <li>Painting and drawing.</li>
          <li>Sculpture and crafts.</li>
          <li>Music and dance.</li>
          <li>Theater and acting.</li>
        </ul>
        <h4>Activity: My First Drawing</h4>
        <p>Choose one of the following themes and make a drawing that expresses what you think or feel. It could be a landscape, an animal, or something you really like. Use all the colors you want!</p>
      </section>

      {/* Exploring Artistic Techniques */}
      <section className="section">
        <h2 className="section-title">2. Exploring Artistic Techniques</h2>
        <p className="section-text">
          There are many ways to create art. You can paint with watercolors, draw with pencils, make figures with clay, or even create something with recycled materials. Each technique is a special way to show what is in your mind and heart.
        </p>
        <h3>Techniques to Try:</h3>
        <ul>
          <li>Watercolor: Soft colors diluted with water.</li>
          <li>Pencil: Fine details and soft lines.</li>
          <li>Collage: Using papers and materials to paste and form figures.</li>
          <li>Sculpture: Creating figures with clay or playdough.</li>
        </ul>
        <h4>Activity: Create with Recycled Materials!</h4>
        <p>Find materials you no longer use (paper, cardboard, bottle caps, etc.) and create a figure or work of art. It could be an animal, a landscape, or a scene you like.</p>
      </section>

      {/* The Creative Process */}
      <section className="section">
        <h2 className="section-title">3. The Creative Process</h2>
        <p className="section-text">
          Creating art is not just about drawing or painting, it’s a process. It starts with an idea in your head, then you experiment with different shapes and materials, and in the end, you create a work of art that expresses what you felt or thought.
        </p>
        <h3>Steps of the Creative Process:</h3>
        <ul>
          <li>First, think about what you would like to create. A house? A friend? A monster?</li>
          <li>Then, try different materials and colors. Don’t be afraid to make mistakes!</li>
          <li>Finally, show your creation and think about what you’ve learned.</li>
        </ul>
        <h4>Activity: My Creative Process</h4>
        <p>Think about something you really like and draw it. Start with the simplest shapes, then add more details and colors. How does your drawing feel? Tell us your story!</p>
      </section>

      {/* Art as Communication */}
      <section className="section">
        <h2 className="section-title">4. Art as Communication</h2>
        <p className="section-text">
          Art is a way of communicating. Even though we don’t use words, we can say a lot with our works. Art helps us express how we feel, tell stories, and show our ideas about the world.
        </p>
        <h3>What Can Art Communicate?</h3>
        <ul>
          <li>The feelings we have, such as happiness or sadness.</li>
          <li>Ideas about nature, animals, and people.</li>
          <li>What we think about the world, such as the environment or peace.</li>
        </ul>
        <h4>Activity: Your Artwork Speaks!</h4>
        <p>Draw a scene that tells a story, something you would like to say to others. It can be something happy, funny, or important to you. Then, share what message your artwork has with others.</p>
      </section>

      {/* Reflection on Art */}
      <section className="section">
        <h2 className="section-title">5. Reflection on Art</h2>
        <p className="section-text">
          Reflecting on what we’ve created helps us learn and improve. Every time we make art, we notice what we like to do the most, and we also learn from what didn’t turn out as we expected.
        </p>
        <h3>Questions to Reflect On:</h3>
        <ul>
          <li>How did you feel while creating your artwork?</li>
          <li>What would you like to change about your artwork next time?</li>
          <li>What message do you think your artwork conveys to others?</li>
        </ul>
        <h4>Activity: Final Reflection</h4>
        <p>Think about the drawing or creation you made. What did you like most about it? What did you learn while making it? Write or talk about your thoughts!</p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Review What You’ve Learned!</h2>
        <p>Let’s review what we learned about art:</p>
        <ol>
          <li><strong>What is artistic expression?</strong>
            <ul>
              <li>a) Using art to show how we feel and think.</li>
              <li>b) Only drawing pretty pictures.</li>
              <li>c) Making art to win prizes.</li>
            </ul>
          </li>
          <li><strong>Why is the creative process important?</strong>
            <ul>
              <li>a) Because it helps us make new and fun things.</li>
              <li>b) Because we only have to copy what others do.</li>
              <li>c) Because it always turns out perfect the first time.</li>
            </ul>
          </li>
          <li><strong>How can art communicate to us?</strong>
            <ul>
              <li>a) By expressing how we feel and think.</li>
              <li>b) By just copying what we see.</li>
              <li>c) By not saying anything at all.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          In this unit, we learned that art is an incredible way to express how we feel and think. Through different techniques and materials, we can create works that represent us and help us communicate with others. Remember that the most important thing about art is having fun while you create and express what’s inside you. Keep creating and exploring the world of art!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Art is the most beautiful way to express how we feel." - Unknown</p>
      </footer>
    </div>
  );
};

export default ArtUnit1;
