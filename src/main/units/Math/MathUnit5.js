import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./MathUnit.css";

const MathUnit5 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">Problem-Solving</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Develop problem-solving skills through practical exercises.</li>
          <li>Understand and apply concepts of numbers, measurement, geometry, statistics, and probability.</li>
          <li>Enhance logical thinking and reasoning abilities.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">1. Introduction to Problem-Solving</h2>
        <p className="section-text">
          Problem-solving is an essential skill that allows us to find solutions to various challenges. It involves using mathematical concepts and logical reasoning to analyze situations and make informed decisions.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">2. Key Areas of Focus</h2>
        <h3>2.1. Numbers</h3>
        <ul>
          <li>Understanding place value and number operations.</li>
          <li>Performing addition, subtraction, multiplication, and division.</li>
          <li>Working with fractions and decimals.</li>
        </ul>

        <h3>2.2. Measurement</h3>
        <ul>
          <li>Measuring length, weight, and capacity using appropriate units.</li>
          <li>Understanding time and calculating durations.</li>
          <li>Exploring temperature and other measurable quantities.</li>
        </ul>

        <h3>2.3. Geometry</h3>
        <ul>
          <li>Identifying and classifying 2D and 3D shapes.</li>
          <li>Understanding properties like sides, angles, and symmetry.</li>
          <li>Calculating perimeter, area, and volume.</li>
        </ul>

        <h3>2.4. Statistics and Probability</h3>
        <ul>
          <li>Collecting, organizing, and interpreting data.</li>
          <li>Creating and analyzing bar graphs and pie charts.</li>
          <li>Understanding basic probability concepts and making predictions.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">3. Problem-Solving Strategies</h2>
        <h3>3.1. Logical Reasoning</h3>
        <p>
          Use logic to identify patterns, relationships, and solutions. Examples include solving puzzles and riddles.
        </p>

        <h3>3.2. Step-by-Step Approach</h3>
        <p>
          Break down problems into smaller, manageable steps. This method helps to tackle complex problems effectively.
        </p>

        <h3>3.3. Visualization</h3>
        <p>
          Use diagrams, drawings, and charts to understand and solve problems. Visualization makes abstract concepts more concrete.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">4. Activities</h2>
        <h3>Activity 1: Number Puzzle</h3>
        <p>Solve the following:</p>
        <ul>
          <li>What is the sum of 234 and 567?</li>
          <li>If you divide 81 by 9, what do you get?</li>
          <li>What is 3/4 of 16?</li>
        </ul>

        <h3>Activity 2: Measurement in Daily Life</h3>
        <p>Find and record measurements of the following items:</p>
        <ul>
          <li>Length of your desk</li>
          <li>Weight of a fruit</li>
          <li>Time it takes to walk 100 meters</li>
        </ul>

        <h3>Activity 3: Shapes Around Us</h3>
        <p>Identify objects in your surroundings that match these shapes:</p>
        <ul>
          <li>Circle: ____________</li>
          <li>Square: ____________</li>
          <li>Rectangle: ____________</li>
          <li>Triangle: ____________</li>
        </ul>

        <h3>Activity 4: Data Collection</h3>
        <p>Conduct a survey of your classmates' favorite fruits. Represent the data using a bar graph.</p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">5. Fun Quiz: Problem-Solving</h2>
        <ol>
          <li>
            <strong>What is the area of a rectangle with a length of 8 cm and a width of 4 cm?</strong>
            <ul>
              <li> a) 24 cm²</li>
              <li> b) 32 cm²</li>
              <li> c) 36 cm²</li>
              <li> d) 40 cm²</li>
            </ul>
          </li>
          <li>
            <strong>If you flip a coin, what is the probability of getting heads?</strong>
            <ul>
              <li> a) 25%</li>
              <li> b) 50%</li>
              <li> c) 75%</li>
              <li> d) 100%</li>
            </ul>
          </li>
          <li>
            <strong>How many sides does a hexagon have?</strong>
            <ul>
              <li> a) 5</li>
              <li> b) 6</li>
              <li> c) 7</li>
              <li> d) 8</li>
            </ul>
          </li>
          <li>
            <strong>What is the perimeter of a square with a side of 6 cm?</strong>
            <ul>
              <li> a) 18 cm</li>
              <li> b) 24 cm</li>
              <li> c) 30 cm</li>
              <li> d) 36 cm</li>
            </ul>
          </li>
          <li>
            <strong>What type of chart is best for showing parts of a whole?</strong>
            <ul>
              <li> a) Line graph</li>
              <li> b) Bar graph</li>
              <li> c) Pie chart</li>
              <li> d) Scatter plot</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">6. Conclusion</h2>
        <p className="section-text">
          In this unit, you explored problem-solving through numbers, measurement, geometry, statistics, and probability. These skills are fundamental to understanding the world and making informed decisions in everyday life.
        </p>
        <h3>Activity:</h3>
        <ul>
          <li>Use the problem-solving strategies learned to solve real-life scenarios, such as calculating expenses or organizing data.</li>
        </ul>
      </section>

      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>
      <footer className="footer">
        <p>"Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding." - Unknown</p>
      </footer>
    </div>
  );
};

export default MathUnit5;
