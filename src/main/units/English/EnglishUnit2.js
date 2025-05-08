import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./EnglishUnit.css";

const EnglishUnit2 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-container">
      <h1 className="title">Oral Expression</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Express thoughts and ideas clearly in spoken English.</li>
          <li>Participate in simple conversations and discussions.</li>
          <li>Describe objects, people, places, and events using appropriate vocabulary.</li>
          <li>Practice pronunciation and fluency to build confidence in speaking.</li>
          <li>Use polite expressions and basic grammar structures in speech.</li>
        </ul>
      </section>

      {/* What is Oral Expression? */}
      <section className="section">
        <h2 className="section-title">1. What is Oral Expression?</h2>
        <p className="section-text">
          Oral expression is the ability to speak and communicate your ideas using words. It helps us share our thoughts, ask questions, and connect with others.
        </p>
        <h3>Examples of Oral Expression:</h3>
        <ul>
          <li>Introducing yourself to someone new.</li>
          <li>Describing your favorite book or toy.</li>
          <li>Asking for help or giving instructions.</li>
        </ul>
        <h4>Activity: Speak About Yourself</h4>
        <p>Take turns with your classmates to introduce yourself. Say your name, age, and one thing you like!</p>
      </section>

      {/* Building Vocabulary */}
      <section className="section">
        <h2 className="section-title">2. Building Vocabulary</h2>
        <p className="section-text">
          To express yourself well, it’s important to know the right words. Expanding your vocabulary helps you describe things and share your ideas clearly.
        </p>
        <h3>Activity: Word Builder</h3>
        <p>Pick a topic, like animals or food, and name as many words as you can related to it. Can you use them in a sentence?</p>
      </section>

      {/* Speaking in Complete Sentences */}
      <section className="section">
        <h2 className="section-title">3. Speaking in Complete Sentences</h2>
        <p className="section-text">
          Speaking in complete sentences helps others understand you better. Instead of saying "ball," you can say, "I like to play with a ball."
        </p>
        <h3>Activity: Complete the Sentence</h3>
        <p>Your teacher will say the start of a sentence. Can you finish it? For example: "I like to..."</p>
      </section>

      {/* Practicing Pronunciation */}
      <section className="section">
        <h2 className="section-title">4. Practicing Pronunciation</h2>
        <p className="section-text">
          Pronunciation is how we say words. Practicing helps us speak clearly so others can understand us.
        </p>
        <h3>Activity: Say It Right</h3>
        <p>Repeat words after your teacher. Focus on saying each sound correctly. Try: "cat," "dog," and "banana."
        </p>
      </section>

      {/* Using Polite Expressions */}
      <section className="section">
        <h2 className="section-title">5. Using Polite Expressions</h2>
        <p className="section-text">
          Polite expressions, like "please," "thank you," and "excuse me," make conversations friendly and respectful.
        </p>
        <h3>Activity: Polite Conversations</h3>
        <p>Practice a short conversation with a classmate. Use polite expressions like: "Can I borrow your pencil, please?"</p>
      </section>

      {/* Fun Speaking Activities */}
      <section className="section">
        <h2 className="section-title">6. Fun Speaking Activities</h2>
        <p className="section-text">
          Speaking can be fun! Games, songs, and role-playing are great ways to practice oral expression while having a good time.
        </p>
        <h3>Examples of Fun Activities:</h3>
        <ul>
          <li>Playing "Guess the Word" with clues.</li>
          <li>Singing along to simple English songs.</li>
          <li>Acting out a story with friends.</li>
        </ul>
        <h4>Activity: Guess the Word</h4>
        <p>Give clues about an object without saying its name. Can your classmates guess what it is?</p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">7. Fun Quiz: Oral Expression</h2>
        <p>Let’s check what you’ve learned!</p>
        <ol>
          <li><strong>What is oral expression?</strong>
            <ul>
              <li>a) Writing a story</li>
              <li>b) Speaking and sharing ideas</li>
              <li>c) Drawing pictures</li>
            </ul>
          </li>
          <li><strong>Why is vocabulary important?</strong>
            <ul>
              <li>a) To describe things clearly</li>
              <li>b) To stay silent</li>
              <li>c) To confuse others</li>
            </ul>
          </li>
          <li><strong>What are polite expressions?</strong>
            <ul>
              <li>a) Words that show respect</li>
              <li>b) Words to ignore people</li>
              <li>c) Words that are unclear</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          Oral expression helps us share ideas, connect with others, and communicate effectively. By practicing vocabulary, pronunciation, and polite expressions, we can become confident and clear speakers. Let’s keep practicing and have fun speaking in English!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Speak clearly, if you speak at all." - Oliver Wendell Holmes Sr</p>
      </footer>
    </div>
  );
};

export default EnglishUnit2;
