import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./EnglishUnit.css";

const EnglishUnit6 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-container">
      <h1 className="title">Language Awareness and Reflection on Learning</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Understand how language works and why it is important.</li>
          <li>Recognize patterns and rules in English to improve communication.</li>
          <li>Reflect on how we learn and use a language.</li>
          <li>Develop strategies to learn English more effectively.</li>
          <li>Appreciate the value of multilingualism and language diversity.</li>
        </ul>
      </section>

      {/* What is Language Awareness? */}
      <section className="section">
        <h2 className="section-title">1. What is Language Awareness?</h2>
        <p className="section-text">
          Language awareness is understanding how languages work. It helps us become better learners and communicators by noticing patterns, rules, and differences in how people use language.
        </p>
        <h3>Examples of Language Awareness:</h3>
        <ul>
          <li>Noticing how words change when talking about the past (e.g., "play" becomes "played").</li>
          <li>Understanding how sentences are built (e.g., subject + verb + object).</li>
          <li>Learning about different sounds in English and how to pronounce them.</li>
        </ul>
        <h4>Activity: Word Detective</h4>
        <p>Pick a sentence from your favorite story. Can you find a verb, a noun, and an adjective? Share it with the class!</p>
      </section>

      {/* Reflecting on Learning */}
      <section className="section">
        <h2 className="section-title">2. Reflecting on Learning</h2>
        <p className="section-text">
          Reflection means thinking about what you have learned and how you can improve. It helps you become a better learner by understanding your strengths and areas to work on.
        </p>
        <h3>Activity: Learning Journal</h3>
        <p>Write or draw something new you learned in English this week. How did you learn it? Was it fun or challenging?</p>
      </section>

      {/* Recognizing Patterns in Language */}
      <section className="section">
        <h2 className="section-title">3. Recognizing Patterns in Language</h2>
        <p className="section-text">
          Languages have patterns that help us understand and use them. For example, adding "-ing" to verbs shows an action happening now (e.g., "run" becomes "running").
        </p>
        <h3>Activity: Pattern Finder</h3>
        <p>Can you think of three verbs and change them to show an action happening now? Write them down or say them out loud!</p>
      </section>

      {/* Multilingualism and Language Diversity */}
      <section className="section">
        <h2 className="section-title">4. Multilingualism and Language Diversity</h2>
        <p className="section-text">
          People around the world speak many different languages. Being aware of this helps us appreciate and respect others. Knowing more than one language is a special skill that connects us to more people.
        </p>
        <h3>Activity: Language Discovery</h3>
        <p>Ask a family member or friend if they know words in another language. Write down one or two and share them with your class!</p>
      </section>

      {/* Strategies for Learning English */}
      <section className="section">
        <h2 className="section-title">5. Strategies for Learning English</h2>
        <p className="section-text">
          Learning a language is easier with strategies, like practicing every day, asking questions, or using pictures to remember words. These strategies help you grow as a learner.
        </p>
        <h3>Activity: My Learning Strategy</h3>
        <p>What is one way you practice English? Write or draw your favorite strategy to share with your classmates.</p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: Language Awareness</h2>
        <p>Let’s review what you’ve learned!</p>
        <ol>
          <li><strong>What is one example of language awareness?</strong>
            <ul>
              <li>a) Knowing how verbs change for past actions</li>
              <li>b) Ignoring language rules</li>
              <li>c) Speaking without thinking</li>
            </ul>
          </li>
          <li><strong>Why is reflection important in learning?</strong>
            <ul>
              <li>a) It helps us understand how we learn</li>
              <li>b) It makes learning harder</li>
              <li>c) It has no value</li>
            </ul>
          </li>
          <li><strong>What is one way to practice English?</strong>
            <ul>
              <li>a) Practice every day</li>
              <li>b) Avoid asking questions</li>
              <li>c) Never use pictures</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          Understanding language and reflecting on learning helps us communicate better and enjoy the process of learning. By recognizing patterns, appreciating multilingualism, and using effective strategies, we can become more confident and skilled in English. Let’s keep exploring and growing as language learners!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Learning a language is like unlocking a door to new adventures." - Unknown</p>
      </footer>
    </div>
  );
};

export default EnglishUnit6;
