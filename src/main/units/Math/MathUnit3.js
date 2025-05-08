import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./MathUnit.css";

const MathUnit3 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">Geometry</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Identify and classify basic 2D shapes (circle, square, triangle, rectangle).</li>
          <li>Understand the properties of these shapes, such as sides, angles, and symmetry.</li>
          <li>Learn how to calculate perimeter and area for simple shapes.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">1. Introduction to Geometry</h2>
        <p className="section-text">
          Geometry is the branch of mathematics that studies shapes, sizes, and the properties of space. It helps us understand the world around us, from the structures we build to the paths we take.
        </p>        
      </section>

      <section className="section">
        <h2 className="section-title">2. Types of Shapes</h2>
        <h3>2.1. Two-Dimensional (2D) Shapes</h3>
        <ul>
          <li><strong>Circle:</strong> A round shape with no corners or edges.</li>
          <li><strong>Square:</strong> A shape with four equal sides and four right angles.</li>
          <li><strong>Triangle:</strong> A shape with three sides and three angles.</li>
          <li><strong>Rectangle:</strong> A shape with four sides and four right angles, where opposite sides are equal.</li>
        </ul>

        <h3>2.2. Properties of Shapes</h3>
        <table>
          <thead>
            <tr>
              <th>Shape</th>
              <th>Properties</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Circle</td>
              <td>No sides, no angles, perfectly round</td>
              <td>Wheel, coin</td>
            </tr>
            <tr>
              <td>Square</td>
              <td>4 equal sides, 4 right angles</td>
              <td>Chessboard square</td>
            </tr>
            <tr>
              <td>Triangle</td>
              <td>3 sides, 3 angles</td>
              <td>Road sign</td>
            </tr>
            <tr>
              <td>Rectangle</td>
              <td>4 sides, opposite sides equal, 4 right angles</td>
              <td>Book, screen</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2 className="section-title">3. Calculations in Geometry</h2>
        <h3>3.1. Perimeter</h3>
        <p>
          The perimeter is the total distance around a shape. To calculate the perimeter:
        </p>
        <ul>
          <li><strong>Square:</strong> Perimeter = 4 × side</li>
          <li><strong>Rectangle:</strong> Perimeter = 2 × (length + width)</li>
          <li><strong>Triangle:</strong> Perimeter = sum of all sides</li>
          <li><strong>Circle:</strong> Perimeter (Circumference) = 2 × π × radius</li>
        </ul>

        <h3>3.2. Area</h3>
        <p>
          The area is the space inside a shape. To calculate the area:
        </p>
        <ul>
          <li><strong>Square:</strong> Area = side × side</li>
          <li><strong>Rectangle:</strong> Area = length × width</li>
          <li><strong>Triangle:</strong> Area = ½ × base × height</li>
          <li><strong>Circle:</strong> Area = π × radius²</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">4. Activities</h2>
        <h3>Activity 1: Shape Hunt</h3>
        <p>Look around your home or classroom and identify objects that match each 2D shape.</p>
        <ul>
          <li>Circle: ____________</li>
          <li>Square: ____________</li>
          <li>Rectangle: ____________</li>
          <li>Triangle: ____________</li>
        </ul>

        <h3>Activity 2: Drawing Shapes</h3>
        <p>Draw each shape using a ruler and compass (if needed). Label their sides and angles.</p>
        <ul>
          <li>Draw a square with a side of 5 cm.</li>
          <li>Draw a rectangle with a length of 8 cm and a width of 4 cm.</li>
          <li>Draw a triangle with a base of 6 cm and a height of 4 cm.</li>
          <li>Draw a circle with a radius of 3 cm.</li>
        </ul>

        <h3>Activity 3: Calculate Perimeter and Area</h3>
        <p>Use the formulas to calculate the perimeter and area of the following shapes:</p>
        <ul>
          <li>A square with a side of 5 cm</li>
          <li>A rectangle with a length of 8 cm and a width of 4 cm</li>
          <li>A triangle with sides of 3 cm, 4 cm, and 5 cm</li>
          <li>A circle with a radius of 7 cm</li>
        </ul>
      </section>
      
      {/* Review */}
      <section className="section">
        <h2 className="section-title">5. Fun Quiz: Geometry</h2>
        <ol>
        <li>
          <strong>What is the perimeter of a square with a side of 4 cm?</strong>
          <ul>
            <li> a) 8 cm</li>
            <li> b) 12 cm</li>
            <li> c) 16 cm</li>
            <li> d) 20 cm</li>
          </ul>
        </li>
        <li>
          <strong>How many sides does a triangle have?</strong>
          <ul>
            <li> a) 2 sides</li>
            <li> b) 3 sides</li>
            <li> c) 4 sides</li>
            <li> d) 5 sides</li>
          </ul>
        </li>
        <li>
          <strong>What is the formula for the area of a rectangle?</strong>
          <ul>
            <li> a) Length + Width</li>
            <li> b) Length x Width</li>
            <li> c) 2 x (Length + Width)</li>
            <li> d) Length x Height</li>
          </ul>
        </li>
        <li>
          <strong>What is the area of a circle with a radius of 5 cm?</strong>
          <ul>
            <li> a) 25 cm²</li>
            <li> b) 50 cm²</li>
            <li> c) 78.5 cm²</li>
            <li> d) 100 cm²</li>
          </ul>
        </li>
        <li>
          <strong>Which shape has no sides or corners?</strong>
          <ul>
            <li> a) Square</li>
            <li> b) Triangle</li>
            <li> c) Circle</li>
            <li> d) Rectangle</li>
          </ul>
        </li>
      </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">6. Conclusion</h2>
        <p className="section-text">
          In this unit, you learned about basic 2D shapes, their properties, and how to calculate their perimeter and area. Geometry helps us understand and describe the world in mathematical terms, providing the foundation for more advanced topics in mathematics and science.
        </p>
        <h3>Activity:</h3>
        <ul>
          <li>Measure and calculate the perimeter and area of items like your desk, a book, or a clock in your home or classroom.</li>
        </ul>
      </section>

      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>
      <footer className="footer">
        <p>"Geometry is all around us, shaping the way we understand space and structure! - Unknown"</p>
      </footer>
    </div>
  );
};

export default MathUnit3;
