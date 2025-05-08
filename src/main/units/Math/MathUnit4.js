import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./MathUnit.css";

const MathUnit4 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">Statistics and Probability</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Understand the concepts of data collection and organization.</li>
          <li>Learn how to create and interpret simple charts and graphs.</li>
          <li>Explore the basics of probability and make predictions based on data.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">1. Introduction to Statistics and Probability</h2>
        <p className="section-text">
          Statistics is the study of data: how to collect, organize, and interpret it. Probability is the study of chance and how likely an event is to happen. Together, they help us make informed decisions based on information and predictions.
        </p>        
      </section>

      <section className="section">
        <h2 className="section-title">2. Understanding Data</h2>
        <h3>2.1. Collecting Data</h3>
        <ul>
          <li><strong>Survey:</strong> Asking questions to gather information.</li>
          <li><strong>Observation:</strong> Watching and recording events.</li>
          <li><strong>Experiment:</strong> Conducting tests to gather results.</li>
        </ul>

        <h3>2.2. Organizing Data</h3>
        <ul>
          <li><strong>Tables:</strong> Arrange data in rows and columns.</li>
          <li><strong>Tally Marks:</strong> Use marks to count occurrences.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">3. Interpreting Graphs</h2>
        <h3>3.1. Types of Graphs</h3>
        <ul>
          <li><strong>Bar Graph:</strong> Uses bars to show quantities.</li>
          <li><strong>Pictograph:</strong> Uses pictures or symbols to represent data.</li>
          <li><strong>Line Plot:</strong> Displays data points on a number line.</li>
        </ul>

        <h3>3.2. Reading Graphs</h3>
        <p>Pay attention to:</p>
        <ul>
          <li>The title of the graph.</li>
          <li>Labels on the axes or categories.</li>
          <li>Scales and keys to understand the data.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">4. Basics of Probability</h2>
        <h3>4.1. What is Probability?</h3>
        <p>
          Probability is the chance of something happening. It is measured as a number between 0 (impossible) and 1 (certain).
        </p>

        <h3>4.2. Examples of Probability</h3>
        <ul>
          <li><strong>Certain:</strong> The sun will rise tomorrow.</li>
          <li><strong>Likely:</strong> It might rain today.</li>
          <li><strong>Unlikely:</strong> You will find a unicorn in the park.</li>
          <li><strong>Impossible:</strong> A fish will fly without wings.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">5. Activities</h2>
        <h3>Activity 1: Data Collection</h3>
        <p>Survey your classmates to gather data on:</p>
        <ul>
          <li>Their favorite fruit.</li>
          <li>How they come to school (walk, bike, car).</li>
          <li>Number of siblings they have.</li>
        </ul>

        <h3>Activity 2: Creating Graphs</h3>
        <p>Using the data collected, create a:</p>
        <ul>
          <li>Bar graph of favorite fruits.</li>
          <li>Pictograph of how students come to school.</li>
          <li>Line plot of the number of siblings.</li>
        </ul>

        <h3>Activity 3: Probability Experiments</h3>
        <p>Try these simple experiments:</p>
        <ul>
          <li>Flip a coin 20 times and record how many times it lands on heads or tails.</li>
          <li>Roll a die 30 times and record how many times each number appears.</li>
          <li>Draw colored marbles from a bag and record the outcomes.</li>
        </ul>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: Statistics and Probability</h2>
        <ol>
        <li>
          <strong>Which type of graph uses bars to show data?</strong>
          <ul>
            <li> a) Line plot</li>
            <li> b) Bar graph</li>
            <li> c) Pictograph</li>
            <li> d) Table</li>
          </ul>
        </li>
        <li>
          <strong>What is the probability of flipping a coin and it landing on heads?</strong>
          <ul>
            <li> a) 0</li>
            <li> b) 0.5</li>
            <li> c) 1</li>
            <li> d) 2</li>
          </ul>
        </li>
        <li>
          <strong>Which of these is used to collect data?</strong>
          <ul>
            <li> a) Graph</li>
            <li> b) Experiment</li>
            <li> c) Chart</li>
            <li> d) Key</li>
          </ul>
        </li>
        <li>
          <strong>What does a tally mark represent?</strong>
          <ul>
            <li> a) A number</li>
            <li> b) A name</li>
            <li> c) A date</li>
            <li> d) A key</li>
          </ul>
        </li>
        <li>
          <strong>Which event is impossible?</strong>
          <ul>
            <li> a) A cat meowing</li>
            <li> b) A fish flying without wings</li>
            <li> c) Rain on a cloudy day</li>
            <li> d) A coin landing on heads</li>
          </ul>
        </li>
      </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">7. Conclusion</h2>
        <p className="section-text">
          In this unit, you learned about data collection, organization, and interpretation, as well as the basics of probability. These skills help us understand and make sense of the world using information and predictions.
        </p>
        <h3>Activity:</h3>
        <ul>
          <li>Conduct your own experiment and create a graph to represent the results.</li>
        </ul>
      </section>

      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>
      <footer className="footer">
        <p>"Statistics and probability help us make sense of the world with data and chance! - Unknown"</p>
      </footer>
    </div>
  );
};

export default MathUnit4;
