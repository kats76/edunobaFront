import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./EnglishUnit.css";

const EnglishUnit1 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-container">
      <h1 className="title">Listening Comprehension</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Understand spoken words, phrases, and simple sentences in English.</li>
          <li>Develop the ability to identify main ideas and details from audio materials.</li>
          <li>Improve listening for specific information in different contexts.</li>
          <li>Recognize and respond to basic questions, commands, and requests.</li>
          <li>Enhance active listening skills to support communication in English.</li>
        </ul>
      </section>

      {/* What is Listening Comprehension? */}
      <section className="section">
        <h2 className="section-title">1. What is Listening Comprehension?</h2>
        <p className="section-text">
          Listening comprehension is the ability to understand spoken language. It helps us to follow conversations, learn new things, and enjoy stories or songs.
        </p>
        <h3>Examples of Listening:</h3>
        <ul>
          <li>Listening to a teacher’s instructions.</li>
          <li>Understanding a story being read aloud.</li>
          <li>Following along with songs or rhymes.</li>
        </ul>
        <h4>Activity: Listening Practice</h4>
        <p>Listen to a short audio clip or your teacher’s instructions. Can you repeat what you heard or answer a simple question about it?</p>
      </section>

      {/* Listening for Main Ideas */}
      <section className="section">
        <h2 className="section-title">2. Listening for Main Ideas</h2>
        <p className="section-text">
          Sometimes, we listen to understand the big picture or the main idea. For example, when someone tells you a story, you listen to understand what it is about.
        </p>
        <h3>Activity: The Big Idea</h3>
        <p>Your teacher will read a short story. Can you tell what the story is about in one sentence?</p>
      </section>

      {/* Listening for Details */}
      <section className="section">
        <h2 className="section-title">3. Listening for Details</h2>
        <p className="section-text">
          Details help us understand more about what we are listening to. For example, if someone says, "I saw a big red balloon," the details are "big" and "red."
        </p>
        <h3>Activity: Find the Details</h3>
        <p>Listen to a description and try to remember the details. Can you draw or write about what you heard?</p>
      </section>

      {/* Listening in Conversations */}
      <section className="section">
        <h2 className="section-title">4. Listening in Conversations</h2>
        <p className="section-text">
          In conversations, listening helps us understand what others are saying so we can reply correctly. It’s important to listen carefully and think before we respond.
        </p>
        <h3>Activity: Role Play</h3>
        <p>Practice a short conversation with a classmate. Take turns listening and responding to each other’s questions.</p>
      </section>

      {/* Fun Listening Activities */}
      <section className="section">
        <h2 className="section-title">5. Fun Listening Activities</h2>
        <p className="section-text">
          Listening can be fun! Songs, games, and stories are great ways to improve your listening skills while enjoying yourself.
        </p>
        <h3>Examples of Fun Activities:</h3>
        <ul>
          <li>Listening to and singing along with songs.</li>
          <li>Playing "Simon Says."</li>
          <li>Listening to a story and acting it out.</li>
        </ul>
        <h4>Activity: Simon Says</h4>
        <p>Play "Simon Says" with your classmates. Can you follow the instructions correctly?</p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: Listening Comprehension</h2>
        <p>Let’s see how much you’ve learned!</p>
        <ol>
          <li><strong>What does "listening comprehension" mean?</strong>
            <ul>
              <li>a) Understanding spoken language</li>
              <li>b) Writing a story</li>
              <li>c) Drawing a picture</li>
            </ul>
          </li>
          <li><strong>What should you listen for in a story?</strong>
            <ul>
              <li>a) The main idea</li>
              <li>b) The details</li>
              <li>c) Both a and b</li>
            </ul>
          </li>
          <li><strong>Why is listening important in conversations?</strong>
            <ul>
              <li>a) To understand and respond</li>
              <li>b) To ignore the speaker</li>
              <li>c) To make noise</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          Listening comprehension helps us to understand others, learn new things, and enjoy stories, songs, and conversations. By practicing listening, we can become better communicators and learners. Let’s keep improving our listening skills every day!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Listening is an art that requires attention over talent." - Robert G. Allen</p>
      </footer>
    </div>
  );
};

export default EnglishUnit1;
