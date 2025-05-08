import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./EnglishUnit.css";

const EnglishUnit4 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-container">
      <h1 className="title">Written Expression</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Express ideas clearly in written English.</li>
          <li>Learn to structure sentences and paragraphs.</li>
          <li>Use proper punctuation and grammar.</li>
          <li>Write creatively through stories and personal experiences.</li>
          <li>Improve spelling and vocabulary through writing practice.</li>
        </ul>
      </section>

      {/* What is Written Expression? */}
      <section className="section">
        <h2 className="section-title">1. What is Written Expression?</h2>
        <p className="section-text">
          Written expression is the ability to communicate ideas, thoughts, and stories through writing. It allows us to share our creativity and express ourselves clearly.
        </p>
        <h3>Examples of Written Expression:</h3>
        <ul>
          <li>Writing a story about your day.</li>
          <li>Creating a list of your favorite activities.</li>
          <li>Sending a short message to a friend.</li>
        </ul>
        <h4>Activity: Write About Your Favorite Thing</h4>
        <p>Write a few sentences about your favorite activity or food. Share it with a classmate!</p>
      </section>

      {/* Structuring Sentences */}
      <section className="section">
        <h2 className="section-title">2. Structuring Sentences</h2>
        <p className="section-text">
          A good sentence has a subject, a verb, and a complete idea. Writing clear sentences helps others understand your thoughts.
        </p>
        <h3>Activity: Build a Sentence</h3>
        <p>Pick three words (a noun, a verb, and an object) and create a sentence. Write it down and share it with the class!</p>
      </section>

      {/* Writing Paragraphs */}
      <section className="section">
        <h2 className="section-title">3. Writing Paragraphs</h2>
        <p className="section-text">
          A paragraph is a group of sentences about one topic. It starts with a main idea and includes supporting details.
        </p>
        <h3>Activity: My Weekend</h3>
        <p>Write a short paragraph about what you did last weekend. Include at least three sentences!</p>
      </section>

      {/* Creative Writing */}
      <section className="section">
        <h2 className="section-title">4. Creative Writing</h2>
        <p className="section-text">
          Creative writing lets us imagine new worlds and stories. We can write about adventures, animals, or anything we dream of!
        </p>
        <h3>Activity: Invent a Story</h3>
        <p>Write a short story about an animal who goes on an adventure. Be creative and have fun!</p>
      </section>

      {/* Punctuation and Grammar */}
      <section className="section">
        <h2 className="section-title">5. Punctuation and Grammar</h2>
        <p className="section-text">
          Using punctuation and grammar correctly makes writing easier to read and understand. Practice using periods, commas, and capital letters.
        </p>
        <h3>Activity: Fix the Sentence</h3>
        <p>Here is a sentence: "i like to run and jump". Can you fix it? Write the corrected sentence in your notebook!</p>
      </section>

      {/* Spelling and Vocabulary */}
      <section className="section">
        <h2 className="section-title">6. Spelling and Vocabulary</h2>
        <p className="section-text">
          Writing helps us learn how to spell words and use new vocabulary. Practice spelling by writing sentences with new words.
        </p>
        <h3>Activity: Spelling Challenge</h3>
        <p>Write three words you learned today. Can you use them in a sentence?</p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">7. Fun Quiz: Written Expression</h2>
        <p>Let’s check what you’ve learned!</p>
        <ol>
          <li><strong>What is a sentence?</strong>
            <ul>
              <li>a) A group of words that form a complete idea</li>
              <li>b) A random collection of letters</li>
              <li>c) A drawing of a house</li>
            </ul>
          </li>
          <li><strong>What makes a good paragraph?</strong>
            <ul>
              <li>a) One main idea and supporting details</li>
              <li>b) Random unrelated sentences</li>
              <li>c) Just one sentence</li>
            </ul>
          </li>
          <li><strong>Why is punctuation important?</strong>
            <ul>
              <li>a) It helps make writing clear</li>
              <li>b) It is not important</li>
              <li>c) It confuses readers</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          Written expression helps us share ideas and tell stories. By practicing sentences, paragraphs, and creative writing, we can improve our skills. Let’s keep writing and exploring our creativity!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Writing is an exploration. You start from nothing and learn as you go." - E.L. Doctorow</p>
      </footer>
    </div>
  );
};

export default EnglishUnit4;
