import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./ArtUnit.css";

const ArtUnit3 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      <h1 className="title">Context and Artistic Use</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Learning Objectives</h3>
        <ul>
          <li>Understand how art is used in different contexts, such as in museums, public spaces, and events.</li>
          <li>Recognize the relationship between art and its context, and how the environment influences its meaning.</li>
          <li>Identify different types of art forms used for specific purposes (e.g., sculpture for monuments, paintings for storytelling).</li>
          <li>Explore how artists use different materials and techniques depending on the context of their work.</li>
          <li>Learn how art can convey messages, tell stories, or serve as a tool for communication in society.</li>
        </ul>
      </section>

      {/* What is Context in Art? */}
      <section className="section">
        <h2 className="section-title">1. What is Context in Art?</h2>
        <p className="section-text">
          Context in art refers to the environment, purpose, and time in which an artwork is created or displayed. It can include the location of the artwork, the message it conveys, and the materials used. The context can change how we understand and interpret the artwork.
        </p>
        <h3>Examples of Art Contexts:</h3>
        <ul>
          <li>Public art, like murals on city walls or sculptures in parks.</li>
          <li>Art in museums, where paintings and sculptures are displayed for study and appreciation.</li>
          <li>Art used in ceremonies, such as paintings or decorations for celebrations or events.</li>
          <li>Street art, which is created in public spaces and often conveys messages about society.</li>
        </ul>
        <h4>Activity: Art in Different Places</h4>
        <p>Think about a piece of art you have seen in a public place, like a mural or statue. Where was it, and what did it make you think or feel? Draw it or describe it in your notebook!</p>
      </section>

      {/* How Context Affects Art */}
      <section className="section">
        <h2 className="section-title">2. How Context Affects Art</h2>
        <p className="section-text">
          The context in which art is created or displayed influences its meaning. For example, a painting in a museum might be interpreted differently than the same painting in a public park. The purpose and setting of art can affect how we view and appreciate it.
        </p>
        <h3>Contexts and Their Influence on Art:</h3>
        <ul>
          <li>In a museum, art is often seen as valuable and is meant for reflection.</li>
          <li>In a public space, art might aim to communicate a message or bring beauty to the environment.</li>
          <li>At a celebration or event, art can symbolize an important moment or tell a story.</li>
          <li>Street art can express social or political messages and is often meant to be seen by everyone.</li>
        </ul>
        <h4>Activity: Context and Meaning</h4>
        <p>Imagine a painting that shows a sunset. How might the meaning change if the painting is in a museum versus if it is painted on a wall in your neighborhood? Write or draw your ideas!</p>
      </section>

      {/* Different Art Forms and Their Purposes */}
      <section className="section">
        <h2 className="section-title">3. Different Art Forms and Their Purposes</h2>
        <p className="section-text">
          Art comes in many different forms, and each form can be used for different purposes. Some forms of art are used to tell stories, while others are created to make a statement or to beautify a space. Each form of art has a unique way of expressing ideas depending on its context.
        </p>
        <h3>Examples of Different Art Forms:</h3>
        <ul>
          <li>Sculpture: Used for creating monuments or statues in parks and public places.</li>
          <li>Painting: Often used to tell stories or express emotions in museums or galleries.</li>
          <li>Street Art: A form of art created in public spaces to express ideas or challenge social norms.</li>
          <li>Performing Arts (Dance, Theater, Music): Used in events and ceremonies to entertain or convey a message.</li>
        </ul>
        <h4>Activity: Choose Your Art Form!</h4>
        <p>Choose one type of art (sculpture, painting, dance, etc.) and think about where it would be most useful. Would you put a sculpture in a park, or a painting in a museum? Draw or describe where you would display your chosen art form.</p>
      </section>

      {/* Art as Communication */}
      <section className="section">
        <h2 className="section-title">4. Art as Communication</h2>
        <p className="section-text">
          Art is a powerful tool for communication. Artists use their work to share ideas, emotions, and stories. Sometimes art can express feelings that words cannot, and it can help people understand different points of view or learn about history.
        </p>
        <h3>How Art Communicates:</h3>
        <ul>
          <li>Art can express emotions, such as happiness, sadness, or excitement.</li>
          <li>It can tell stories about events, people, or cultures.</li>
          <li>It can communicate a message about society or the world around us.</li>
          <li>It can bring attention to important issues, like protecting the environment or fighting for equality.</li>
        </ul>
        <h4>Activity: What Is Your Art Saying?</h4>
        <p>Think of a picture, song, or piece of art you like. What do you think it is trying to say? Draw it or describe what message it communicates and why it is important to you.</p>
      </section>

      {/* Reflection on Artistic Context */}
      <section className="section">
        <h2 className="section-title">5. Reflection on Artistic Context</h2>
        <p className="section-text">
          Understanding the context of an artwork helps us appreciate its meaning and purpose. Whether it's displayed in a museum, used for a celebration, or created in a public space, the context gives us clues about why the artwork was made and what it aims to communicate.
        </p>
        <h3>Questions to Reflect On:</h3>
        <ul>
          <li>Why do you think artists create art for different places or events?</li>
          <li>How can the context of an artwork change the way we feel about it?</li>
          <li>What types of art do you see most often in your community? Why do you think they are there?</li>
        </ul>
        <h4>Activity: Share Your Thoughts</h4>
        <p>Think about a piece of art you have seen in your community or in a museum. Where was it, and what did it make you think about? Write or draw your thoughts and share them with the class!</p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Review What You’ve Learned!</h2>
        <p>Let’s check what you’ve learned about context and artistic use:</p>
        <ol>
          <li><strong>What does the context of an artwork include?</strong>
            <ul>
              <li>a) The place, time, and purpose of the artwork.</li>
              <li>b) The color and shapes used in the artwork.</li>
              <li>c) Only the artist’s name.</li>
            </ul>
          </li>
          <li><strong>How does the context of art affect its meaning?</strong>
            <ul>
              <li>a) It changes how we understand the artwork.</li>
              <li>b) It has no effect on the meaning.</li>
              <li>c) It only matters for paintings in museums.</li>
            </ul>
          </li>
          <li><strong>What can art communicate?</strong>
            <ul>
              <li>a) Emotions, messages, and stories.</li>
              <li>b) Only colors and shapes.</li>
              <li>c) Only what the artist wants to express.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          In this unit, we explored how the context of an artwork influences its meaning and purpose. We learned that art is not only about what we see, but also about where it is created and why it exists. Art can communicate powerful messages and tell stories about society, history, and emotions. Let’s continue to appreciate the different types of art around us and think about the context in which it is used!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Art is the only way to run away without leaving home." – Twyla Tharp</p>
      </footer>
    </div>
  );
};

export default ArtUnit3;
