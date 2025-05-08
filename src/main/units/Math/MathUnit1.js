import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./MathUnit.css";

const MathUnit1 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">Numbers and Operations</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Understand and use whole numbers, fractions, and decimals effectively.</li>
          <li>Develop proficiency in addition, subtraction, multiplication, and division.</li>
          <li>Learn to compare and order numbers using place value.</li>
          <li>Apply rounding techniques to simplify calculations.</li>
          <li>Practice solving real-life problems using arithmetic operations.</li>
        </ul>
      </section>

      {/* Introduction to Numbers */}
      <section className="section">
        <h2 className="section-title">1. Introduction to Numbers</h2>
        <p className="section-text">
          Numbers are used to represent quantities. We can write numbers as digits (like 345) or in words (like three hundred and forty-five).
        </p>
        <h3>Activity:</h3>
        <ul>
          <li>Write these numbers in words:</li>
          <ul>
            <li>67 → Sixty-seven</li>
            <li>389 → Three hundred and eighty-nine</li>
            <li>100 → One hundred</li>
          </ul>
        </ul>
        <p className="fun-fact">Did you know that the word "million" comes from the Latin word "mille," meaning "thousand"?</p>
      </section>

      {/* Place Value */}
      <section className="section">
        <h2 className="section-title">2. Place Value in Numbers</h2>
        <p className="section-text">
          Understanding place value helps us read and write numbers correctly. In 532, the 5 is in the hundreds place, the 3 is in the tens place, and the 2 is in the ones place.
        </p>
        <h3>Activity:</h3>
        <ul>
          <li>Circle the correct place value of the underlined digit:</li>
          <ul>
            <li>754 → 5 (hundreds), 7 (tens), 4 (ones)</li>
            <li>648 → 6 (hundreds), 4 (tens), 8 (ones)</li>
          </ul>
        </ul>
      </section>

      {/* Comparing Numbers */}
      <section className="section">
        <h2 className="section-title">3. Comparing Numbers</h2>
        <p className="section-text">
          We can compare numbers using symbols like "greater than" (&gt;) and "less than" (&lt;). Example: 345 &lt; 876.
        </p>
        <h3>Activity:</h3>
        <ul>
          <li>Write the comparison signs:</li>
          <ul>
            <li>254 ___ 400</li>
            <li>689 ___ 567</li>
            <li>800 ___ 800</li>
          </ul>
        </ul>
        <p className="fun-fact">Did you know that the greatest number is not always the one with the most digits? Compare 1,000 with 999!</p>
      </section>

      {/* Rounding Numbers */}
      <section className="section">
        <h2 className="section-title">4. Rounding Numbers</h2>
        <p className="section-text">
          Rounding numbers helps us estimate values. Round 374 to the nearest ten: 370. Round 682 to the nearest hundred: 700.
        </p>
        <h3>Activity:</h3>
        <ul>
          <li>Round these numbers:</li>
          <ul>
            <li>273 to the nearest ten</li>
            <li>586 to the nearest hundred</li>
            <li>1,245 to the nearest thousand</li>
          </ul>
        </ul>
      </section>

      {/* Addition and Subtraction */}
      <section className="section">
        <h2 className="section-title">5. Addition and Subtraction of Numbers</h2>
        <p className="section-text">
          We add and subtract numbers to solve problems. Example: 257 + 369 = 626, 743 - 528 = 215.
        </p>
        <h3>Activity:</h3>
        <ul>
          <li>Solve the following:</li>
          <ul>
            <li>238 + 145 =</li>
            <li>684 - 359 =</li>
          </ul>
        </ul>
      </section>

      {/* Multiplication and Division */}
      <section className="section">
        <h2 className="section-title">6. Multiplication and Division</h2>
        <p className="section-text">
          Multiplication and division are operations that help us solve problems. Multiplying by 10 is easy: just add a zero!
        </p>
        <h3>Activity:</h3>
        <ul>
          <li>Practice multiplication:</li>
          <ul>
            <li>6 x 8 =</li>
            <li>4 x 9 =</li>
            <li>7 x 10 =</li>
          </ul>
          <li>Solve division problems:</li>
          <ul>
            <li>36 ÷ 6 =</li>
            <li>56 ÷ 7 =</li>
            <li>81 ÷ 9 =</li>
          </ul>
        </ul>
      </section>

      {/* Fun Quiz */}
      <section className="section">
        <h2 className="section-title">7. Fun Quiz: Numbers</h2>
        <p>Let’s test what you learned!</p>
        <ol>
          <li>
            <strong>Write 687 in words.</strong>
            <ul>
              <li>a) Six hundred eighty-seven</li>
              <li>b) Six hundred seventy-eight</li>
              <li>c) Eight hundred seventy-six</li>
            </ul>
          </li>
          <li>
            <strong>What is the place value of the digit 4 in the number 4,254?</strong>
            <ul>
              <li>a) Thousands</li>
              <li>b) Hundreds</li>
              <li>c) Tens</li>
            </ul>
          </li>
          <li>
            <strong>Add 387 + 248.</strong>
            <ul>
              <li>a) 635</li>
              <li>b) 625</li>
              <li>c) 615</li>
            </ul>
          </li>
          <li>
            <strong>Subtract 678 - 345.</strong>
            <ul>
              <li>a) 333</li>
              <li>b) 323</li>
              <li>c) 313</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          Numbers are essential in daily life. We use them for counting, measuring, shopping, and more.
        </p>
        <h3>Activity:</h3>
        <ul>
          <li>Write down three ways you use numbers in your daily routine.</li>
        </ul>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>"Numbers are the key that unlocks the mysteries of the world! - Unknown"</p> 
      </footer>
    </div>
  );
};

export default MathUnit1;
