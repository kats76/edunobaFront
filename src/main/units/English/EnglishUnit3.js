import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./EnglishUnit.css";

const EnglishUnit3 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-container">
      <h1 className="title">Reading Comprehension</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Understand and interpret simple texts in English.</li>
          <li>Identify the main idea and supporting details of a text.</li>
          <li>Build vocabulary through reading practice.</li>
          <li>Develop strategies to comprehend stories and informational texts.</li>
          <li>Enjoy reading as a way to learn and explore new ideas.</li>
        </ul>
      </section>

      {/* What is Reading Comprehension? */}
      <section className="section">
        <h2 className="section-title">1. What is Reading Comprehension?</h2>
        <p className="section-text">
          Reading comprehension is the ability to understand and make sense of what you read. It helps us learn, enjoy stories, and explore new ideas.
        </p>
        <h3>Examples of Reading Comprehension:</h3>
        <ul>
          <li>Understanding the plot of a story.</li>
          <li>Finding facts in an informational text.</li>
          <li>Learning new words from a book.</li>
        </ul>
        <h4>Activity: What Did You Read?</h4>
        <p>Read a short story and share what it was about with a classmate. Can you tell the main idea?</p>
      </section>

      {/* Finding the Main Idea */}
      <section className="section">
        <h2 className="section-title">2. Finding the Main Idea</h2>
        <p className="section-text">
          The main idea is what a text is mostly about. Supporting details give more information to help us understand the main idea.
        </p>
        <h3>Activity: Main Idea Hunt</h3>
        <p>Read a short paragraph. Can you find the main idea and one detail? Write or draw your answer!</p>
      </section>

      {/* Building Vocabulary */}
      <section className="section">
        <h2 className="section-title">3. Building Vocabulary</h2>
        <p className="section-text">
          Reading helps us learn new words. Knowing more words makes it easier to understand texts and express ourselves.
        </p>
        <h3>Activity: Word Detective</h3>
        <p>Pick a word from your reading. Can you use it in a new sentence? Share it with the class!</p>
      </section>

      {/* Understanding Stories */}
      <section className="section">
        <h2 className="section-title">4. Understanding Stories</h2>
        <p className="section-text">
          Stories have characters, settings, and events. Understanding these parts helps us enjoy and learn from the story.
        </p>
        <h3>Activity: Story Map</h3>
        <p>After reading a story, draw a map showing the characters, setting, and events. Share it with a friend!</p>
      </section>

      {/* Reading Strategies */}
      <section className="section">
        <h2 className="section-title">5. Reading Strategies</h2>
        <p className="section-text">
          Good readers use strategies like predicting, questioning, and summarizing to understand texts better.
        </p>
        <h3>Activity: Predict the Ending</h3>
        <p>Before finishing a story, guess how it might end. Was your prediction correct?</p>
      </section>

      {/* Fun Reading Activities */}
      <section className="section">
        <h2 className="section-title">6. Fun Reading Activities</h2>
        <p className="section-text">
          Reading can be fun! Games, group reading, and acting out stories make reading more enjoyable.
        </p>
        <h3>Examples of Fun Activities:</h3>
        <ul>
          <li>Reading a story out loud with friends.</li>
          <li>Acting out scenes from a book.</li>
          <li>Creating drawings of your favorite story parts.</li>
        </ul>
        <h4>Activity: Act It Out</h4>
        <p>Pick a part of a story you like. Can you act it out for the class?</p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">7. Fun Quiz: Reading Comprehension</h2>
        <p>Let’s check what you’ve learned!</p>
        <ol>
          <li><strong>What is the main idea of a text?</strong>
            <ul>
              <li>a) What the text is mostly about</li>
              <li>b) A random word</li>
              <li>c) The pictures in the text</li>
            </ul>
          </li>
          <li><strong>How can reading help you?</strong>
            <ul>
              <li>a) By learning new words</li>
              <li>b) By making you sleepy</li>
              <li>c) By confusing you</li>
            </ul>
          </li>
          <li><strong>What is a story map?</strong>
            <ul>
              <li>a) A map of the characters, setting, and events</li>
              <li>b) A treasure map</li>
              <li>c) A list of random words</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          Reading comprehension helps us understand and enjoy texts. By finding the main idea, learning new words, and using reading strategies, we can become better readers. Let’s keep reading and exploring the world through books!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Books are a uniquely portable magic." - Stephen King</p>
      </footer>
    </div>
  );
};

export default EnglishUnit3;
