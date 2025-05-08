import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./ArtUnit.css";

const ArtUnit2 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">Cultural and Artistic Heritage</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Learning Objectives</h3>
        <ul>
          <li>Understand what cultural and artistic heritage is and why it is important.</li>
          <li>Identify different forms of cultural and artistic heritage from around the world.</li>
          <li>Learn about famous artists and their contributions to cultural heritage.</li>
          <li>Recognize the importance of preserving our cultural and artistic heritage for future generations.</li>
          <li>Explore how art can represent history and tell stories about the past.</li>
        </ul>
      </section>

      {/* What is Cultural and Artistic Heritage? */}
      <section className="section">
        <h2 className="section-title">1. What is Cultural and Artistic Heritage?</h2>
        <p className="section-text">
          Cultural and artistic heritage refers to the traditions, customs, art, and creations passed down from generation to generation. This includes music, paintings, monuments, buildings, stories, and more that reflect the history and culture of different places and peoples.
        </p>
        <h3>Examples of Cultural and Artistic Heritage:</h3>
        <ul>
          <li>Famous paintings and sculptures, like the Mona Lisa or the Statue of Liberty.</li>
          <li>Historical monuments, such as the Great Wall of China or the Pyramids of Egypt.</li>
          <li>Traditional music and dances from different cultures.</li>
          <li>Stories, legends, and folktales passed through generations.</li>
        </ul>
        <h4>Activity: My Cultural Heritage</h4>
        <p>Think about something from your culture or country that you would like to share with others. It could be a song, a painting, a tradition, or even a story. Draw or describe it in your notebook!</p>
      </section>

      {/* Famous Artists and Their Works */}
      <section className="section">
        <h2 className="section-title">2. Famous Artists and Their Works</h2>
        <p className="section-text">
          Many artists have contributed to our cultural heritage by creating works of art that reflect their time, culture, and creativity. These works can tell us about the history, ideas, and values of a particular place or period.
        </p>
        <h3>Famous Artists:</h3>
        <ul>
          <li>Leonardo da Vinci: Known for the Mona Lisa and The Last Supper.</li>
          <li>Pablo Picasso: Famous for developing Cubism and creating works like Guernica.</li>
          <li>Frida Kahlo: Known for her emotional and powerful self-portraits.</li>
          <li>Vincent van Gogh: Famous for his paintings like Starry Night and Sunflowers.</li>
        </ul>
        <h4>Activity: Choose an Artist!</h4>
        <p>Choose one famous artist and create a drawing inspired by their style. You can use their colors, shapes, or ideas. How can you express yourself using their style?</p>
      </section>

      {/* Preserving Our Cultural and Artistic Heritage */}
      <section className="section">
        <h2 className="section-title">3. Preserving Our Heritage</h2>
        <p className="section-text">
          Our cultural and artistic heritage is important because it helps us understand our past, appreciate different cultures, and shape our future. It’s our job to protect and preserve it so that future generations can learn from it.
        </p>
        <h3>Ways to Protect Cultural Heritage:</h3>
        <ul>
          <li>Preserving historical buildings and monuments.</li>
          <li>Protecting ancient artworks and artifacts.</li>
          <li>Sharing stories and traditions with the next generation.</li>
          <li>Respecting cultural practices and values from all around the world.</li>
        </ul>
        <h4>Activity: Protecting Heritage</h4>
        <p>Think of a tradition or cultural event that is important in your community. How can you help protect it? Write or draw your ideas!</p>
      </section>

      {/* Art as a Reflection of History */}
      <section className="section">
        <h2 className="section-title">4. Art as a Reflection of History</h2>
        <p className="section-text">
          Art has always been a way for people to express their thoughts, feelings, and ideas. Many famous artworks represent important moments in history, such as wars, celebrations, and important leaders. These works of art help us understand what life was like at different times.
        </p>
        <h3>Artworks That Tell Stories:</h3>
        <ul>
          <li>Guernica by Pablo Picasso: A reflection of the horrors of war.</li>
          <li>The Last Supper by Leonardo da Vinci: A story from the Bible.</li>
          <li>The Persistence of Memory by Salvador Dalí: A surreal painting about time.</li>
          <li>The Creation of Adam by Michelangelo: Depicting a key moment from the Bible.</li>
        </ul>
        <h4>Activity: Art That Tells a Story</h4>
        <p>Pick an important event in history and think about how you could represent it with art. Draw your interpretation of that moment. What emotions does it make you feel?</p>
      </section>

      {/* Reflection on Cultural Heritage */}
      <section className="section">
        <h2 className="section-title">5. Reflection on Cultural Heritage</h2>
        <p className="section-text">
          Reflecting on cultural heritage helps us appreciate the richness of our past and the importance of maintaining traditions. It is also an opportunity to think about how art can shape our understanding of the world and communicate important ideas.
        </p>
        <h3>Questions to Reflect On:</h3>
        <ul>
          <li>What is the most important cultural or artistic heritage in your life?</li>
          <li>How can art help us understand history better?</li>
          <li>Why is it important to protect cultural traditions and artworks?</li>
        </ul>
        <h4>Activity: My Reflection</h4>
        <p>Think about your favorite artwork, tradition, or cultural event. Why is it important to you? Write or draw your thoughts and share them with the class!</p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Review What You’ve Learned!</h2>
        <p>Let’s check what you’ve learned about cultural and artistic heritage:</p>
        <ol>
          <li><strong>What is cultural and artistic heritage?</strong>
            <ul>
              <li>a) The traditions, art, and stories passed down through generations.</li>
              <li>b) Only the famous paintings in museums.</li>
              <li>c) Things that we can forget because they are no longer important.</li>
            </ul>
          </li>
          <li><strong>Why is it important to preserve cultural heritage?</strong>
            <ul>
              <li>a) To help future generations learn about the past.</li>
              <li>b) To make art look more modern.</li>
              <li>c) To ignore history and create new things.</li>
            </ul>
          </li>
          <li><strong>What can art teach us about history?</strong>
            <ul>
              <li>a) It can tell stories about important events and people.</li>
              <li>b) It doesn’t tell us anything about history.</li>
              <li>c) It’s just a decoration with no meaning.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          In this unit, we learned that cultural and artistic heritage is the collection of traditions, art, and stories passed down through generations. These pieces of heritage help us understand history, cultures, and the world around us. We also saw how art can represent important moments in time and teach us lessons about life. Let’s continue to appreciate, protect, and share the beauty of our cultural and artistic heritage!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Art is the signature of civilizations." – Jean Sibelius</p>
      </footer>
    </div>
  );
};

export default ArtUnit2;
