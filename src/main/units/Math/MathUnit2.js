import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./MathUnit.css";

const MathUnit2 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">Measurement</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Understand and apply different types of measurement units for length, weight, and capacity.</li>
          <li>Learn to convert between different units within the metric system (e.g., millimeters to meters, grams to kilograms).</li>
          <li>Compare and order measurements of length, weight, and capacity using standard units.</li>
          <li>Develop proficiency in using instruments for measuring length, weight, and capacity (e.g., tape measure, balance scale, graduated cylinder).</li>
          <li>Apply measurement concepts to solve real-life problems and make accurate comparisons.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">1. Understanding Measurement</h2>
        <p className="section-text">
          Measurement is a way of comparing the size, weight, or volume of objects. We use different units to measure different things. For example, we use meters to measure length, grams to measure weight, and liters to measure volume or capacity.
        </p>

        <h3>1.1. Types of Measurement</h3>
        <ul>
          <li><strong>Length:</strong> How long or short something is. Measured in meters (m), centimeters (cm), or millimeters (mm).</li>
          <li><strong>Weight (Mass):</strong> How heavy something is. Measured in grams (g) or kilograms (kg).</li>
          <li><strong>Capacity:</strong> How much space something can hold. Measured in liters (L) or milliliters (mL).</li>
        </ul>

        <h3>1.2. Units of Measurement</h3>
        <p>We use standard units to measure things. Here are some examples:</p>
        <ul>
          <li><strong>Length:</strong> 1 meter (m) = 100 centimeters (cm)</li>
          <li><strong>Weight:</strong> 1 kilogram (kg) = 1000 grams (g)</li>
          <li><strong>Capacity:</strong> 1 liter (L) = 1000 milliliters (mL)</li>
        </ul>

        {/* Table for Length */}
        <h3>1.3. Units of Length</h3>
        <table className="table table-danger table-bordered table-striped text-center table-hover">
          <thead>
            <tr>
              <th>Unit</th>
              <th>Abbreviation</th>
              <th>Relation to Base Unit (Meter)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Kilometer</td>
                <td>km</td>
                <td>1 km = 1000 m</td>
            </tr>
            <tr>
                <td>Hectometer</td>
                <td>hm</td>
                <td>1 hm = 100 hm</td>
            </tr>
            <tr>
                <td>Decagram</td>
                <td>dam</td>
                <td>1 dam = 10 dam</td>
            </tr>
            <tr>
                <td>Meter</td>
                <td>m</td>
                <td>1 m = 1 m</td>
            </tr>
            <tr>
                <td>decimeter</td>
                <td>dm</td>
                <td>1 dm = 0.1 m</td>
            </tr>
            <tr>
                <td>Centimeter</td>
                <td>cm</td>
                <td>1 cm = 0.01 m</td>
            </tr>
            <tr>
                <td>Millimeter</td>
                <td>mm</td>
                <td>1 mm = 0.001 m</td>
            </tr>
            </tbody>
        </table>

        {/* Table for Weight */}
        <h3>1.4. Units of Weight (Mass)</h3>
        <table className="table table-warning table-bordered table-striped text-center table-hover">
          <thead>
            <tr>
              <th>Unit</th>
              <th>Abbreviation</th>
              <th>Relation to Base Unit (Kilogram)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Kilogram</td>
                <td>kg</td>
                <td>1 kg = 1 kg</td>
            </tr>
            <tr>
                <td>Hectogram</td>
                <td>hg</td>
                <td>1 hg = 0.1 kg</td>
            </tr>
            <tr>
                <td>Decagram</td>
                <td>dag</td>
                <td>1 dag = 0.01 kg</td>
            </tr>
            <tr>
                <td>Gram</td>
                <td>g</td>
                <td>1 g = 0.001 kg</td>
            </tr>
            <tr>
                <td>Decigram</td>
                <td>dg</td>
                <td>1 dg = 0.0001 kg</td>
            </tr>
            <tr>
                <td>Centigram</td>
                <td>cg</td>
                <td>1 cg = 0.00001 kg</td>
            </tr>
            <tr>
                <td>Milligram</td>
                <td>mg</td>
                <td>1 mg = 0.000001 kg</td>
            </tr>
            </tbody>
        </table>

        {/* Table for Capacity */}
        <h3>1.5. Units of Capacity</h3>
        <table className="table table-success table-bordered table-striped text-center table-hover">
          <thead>
            <tr>
              <th>Unit</th>
              <th>Abbreviation</th>
              <th>Relation to Base Unit (Liter)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Kiloliter</td>
                <td>kl</td>
                <td>1 kl = 1000 l</td>
            </tr>
            <tr>
                <td>Hectoliter</td>
                <td>hl</td>
                <td>1 hl = 100 l</td>
            </tr>
            <tr>
                <td>Decaliter</td>
                <td>dal</td>
                <td>1 dal = 10 l</td>
            </tr>
            <tr>
                <td>liter</td>
                <td>l</td>
                <td>1 l = 1 l</td>
            </tr>
            <tr>
                <td>Decigram</td>
                <td>dg</td>
                <td>1 dg = 0.1 g</td>
            </tr>
            <tr>
                <td>Centiliter</td>
                <td>cl</td>
                <td>1 cl = 0.01 l</td>
            </tr>
            <tr>
                <td>Milliliter</td>
                <td>ml</td>
                <td>1 ml = 0.001 l</td>
            </tr>
        </tbody>
        </table>

        <h3>1.6. Systems of Measurement</h3>
        <p>There are two types of measurement systems:</p>
        <ul>
          <li className="mb-3"><strong>Regular Measurement System:</strong> A regular system involves measuring things using standard units like centimeters, meters, milliliters, or liters. These systems are more consistent. For example, you might use a red, blue, or green tape measure to measure different objects in centimeters or meters. A standard unit of measurement ensures that measurements are universally understood and can be converted easily. Examples include the metric system (used globally) or the International System of Units (SI).</li>
          <li><strong>Irregular Measurement System:</strong> An irregular system uses objects or units that are not standardized. These units can vary depending on the object used for measurement. For example, you might measure the length of an object using a piece of string, your hand span, or the length of your foot. While these methods can provide a rough estimate, they are not precise and can vary from person to person or object to object. Examples include using a foot-length or a palm-width as units of measurement.</li>
        </ul>

        <h3>1.7. Examples of Systems</h3>
        <p>Here are some practical examples of both regular and irregular measurement systems:</p>
        <ul>
          <li className="mb-3"><strong>Regular Measurement System Example:</strong> Using a meter stick or a tape measure to measure the length of a table in meters or centimeters. The measurement is precise and universally accepted.</li>
          <li><strong>Irregular Measurement System Example:</strong> Using a piece of string to measure the length of a table, and then comparing that string with your own foot length to estimate the table's size. The result will vary based on the person’s foot size, making it less reliable.</li>
        </ul>

        {/* Activities Section */}
        <h4>Activity: Direct Comparison of Length</h4>
        <p>In direct comparison, you can compare two objects by physically placing them next to each other to see which is longer.</p>
        <p>Take two pencils and place them side by side to compare their lengths. Which one is longer?</p>
        <ul>
          <li>Object 1 (Pencil A): __________</li>
          <li>Object 2 (Pencil B): __________</li>
          <li>Which pencil is longer? ___________</li>
        </ul>

        <h4>Activity: Indirect Comparison of Length</h4>
        <p>In indirect comparison, you measure the objects using a ruler or tape measure to determine their lengths in centimeters or meters.</p>
        <p>Use a tape measure to measure the length of each pencil. Which one is longer based on the measurements?</p>
        <ul>
          <li>Object 1 (Pencil A): __________ cm</li>
          <li>Object 2 (Pencil B): __________ cm</li>
          <li>Which pencil is longer based on the measurements? ___________</li>
        </ul>

        <h4>Activity: Direct Comparison of Weight</h4>
        <p>In direct comparison, you estimate the weight of two objects by using your hands to feel and compare them.</p>
        <p>Pick up two objects (like a rock and a book) and try to estimate which one feels heavier by using your hands.</p>
        <ul>
          <li>Object 1 (Rock): __________ (Feels heavier or lighter?)</li>
          <li>Object 2 (Book): __________ (Feels heavier or lighter?)</li>
          <li>Which object feels heavier? ___________</li>
        </ul>

        <h4>Activity: Indirect Comparison of Weight</h4>
        <p>In indirect comparison, you would use a balance scale to measure the weight of the objects accurately in grams.</p>
        <p>Place each object (a rock and a book) on a balance scale with equal arms. Which object is heavier based on the scale reading?</p>
        <ul>
          <li>Object 1 (Rock): __________ g</li>
          <li>Object 2 (Book): __________ g</li>
          <li>Which object is heavier based on the scale? ___________</li>
        </ul>

        <h4>Activity: Direct Comparison of Capacity</h4>
        <p>In direct comparison, you compare the capacity of two containers by visually observing which holds more liquid.</p>
        <p>Take two containers of different sizes (one small and one large). Fill both with the same liquid and see which holds more. Can you tell just by looking?</p>
        <ul>
          <li>Object 1 (Small container): __________ (Estimate the amount of liquid)</li>
          <li>Object 2 (Large container): __________ (Estimate the amount of liquid)</li>
          <li>Which container holds more liquid? ___________</li>
        </ul>

        <h4>Activity: Indirect Comparison of Capacity</h4>
        <p>In indirect comparison, you use a graduated cylinder or measuring cup to measure the capacity of each container in milliliters or liters.</p>
        <p>Use a measuring cup to measure how much liquid each container holds. Which container holds more liquid?</p>
        <ul>
          <li>Object 1 (Small container): __________ mL</li>
          <li>Object 2 (Large container): __________ mL</li>
          <li>Which container holds more liquid based on the measurements? ___________</li>
        </ul>

        <h3>Instruments Used</h3>
        <p>Here are some instruments used in measuring:</p>
        <ul>
          <li><strong>For Length:</strong> Tape measure to measure in centimeters or millimeters.</li>
          <li><strong>For Weight:</strong> Equal-arm balance to compare the weight of two objects.</li>
          <li><strong>For Capacity:</strong> Graduated containers (such as measuring cups or measuring cylinders) to measure capacity.</li>
        </ul>
      </section>

    {/* Review */}
    <section className="section">
    <h2 className="section-title">2. Fun Quiz: Measurement</h2>
    <p>Let’s test what you learned!</p>
    <ol>
        <li>
        <strong>What unit do we use to measure length?</strong>
        <ul>
            <li>a) Grams</li>
            <li>b) Liters</li>
            <li>c) Meters</li>
            <li>d) Kilograms</li>
        </ul>
        </li>

        <li>
        <strong>How would you measure capacity directly?</strong>
        <ul>
            <li>a) Using a balance scale</li>
            <li>b) Using a ruler</li>
            <li>c) Using a graduated cylinder</li>
            <li>d) Using a thermometer</li>
        </ul>
        </li>

        <li>
        <strong>What unit is used to measure weight in the metric system?</strong>
        <ul>
            <li>a) Meters</li>
            <li>b) Grams</li>
            <li>c) Liters</li>
            <li>d) Inches</li>
        </ul>
        </li>

        <li>
        <strong>What is the main difference between regular and irregular measurement systems?</strong>
        <ul>
            <li>a) Regular systems use non-standard units, and irregular systems use standard units.</li>
            <li>b) Irregular systems use non-standard units, and regular systems use standard units.</li>
            <li>c) Irregular systems measure weight, and regular systems measure length.</li>
            <li>d) Regular systems are more difficult to use than irregular systems.</li>
        </ul>
        </li>

        <li>
        <strong>What is an example of an irregular system of measurement?</strong>
        <ul>
            <li>a) Using a meter stick to measure length</li>
            <li>b) Using a kilogram to measure weight</li>
            <li>c) Using a piece of string to measure length</li>
            <li>d) Using a liter to measure capacity</li>
        </ul>
        </li>
    </ol>
    </section>

    {/* Conclusion */}
    <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          Measurement is essential for comparing and quantifying characteristics such as length, weight, and capacity. There are standard measurement systems, such as the metric system, and other irregular ones. Using the right tools and understanding the units is key to obtaining accurate results, which is fundamental in science, technology, and daily life.
        </p>
        <h3>Activity:</h3>
        <ul>
          <li>Measure different kinds of objects in your daily routine.</li>
        </ul>
    </section>

    {/* Back Button */}
    <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
    </div>
    <footer className="footer">
        <p>"Measurement allows us to discover the hidden details of everything around us! - Unknown"</p>
    </footer>
    </div>
  );
};

export default MathUnit2;
