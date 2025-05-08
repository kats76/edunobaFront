import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./SocialUnit.css";

const SocialUnit1 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
        {/* Title */}
      <h1 className="title">The Passage of Time and Historical Notions</h1>

      {/* Key Objectives */}
      <section className="section">
      <h3 className="section-title">Objectives</h3>
      <ul>
        <li>Define time and explain its significance in our daily lives.</li>
        <li>Identify various methods used throughout history to measure time.</li>
        <li>Understand the concepts of past, present, and future.</li>
        <li>Learn how to read and create a timeline of events.</li>
        <li>Discuss the importance of history and how it shapes our understanding of the world.</li>
      </ul>
      </section>

      {/* Time */}
      <section className="section">
        <h2 className="section-title">1. What Is Time?</h2>
        <p className="section-text">
          Time helps us understand when things happen. We measure time in seconds, minutes, hours, days, months, and years. 
        </p>
        <h3>Activity: Time in a Day</h3>
        <p>Draw or write down your daily routine and what time you do each activity (e.g., wake up, eat lunch, go to school).</p>
      </section>
       
      {/* How Do We Measure Time? */}
      <section className="section">
        <h2 className="section-title">2. How Do We Measure Time?</h2>
        <p className="section-text">
          Over the years, people have used different tools to measure time:
        </p>
        <ul>
          <li><strong>Sun Clocks:</strong> Ancient people used the position of the Sun to tell the time.</li>
          <li><strong>Water Clocks:</strong> These used dripping water to measure time.</li>
          <li><strong>Mechanical Clocks:</strong> Later, clocks with gears and hands were invented.</li>
          <li><strong>Modern Clocks:</strong> Today, we use digital and smart clocks.</li>
        </ul>
        <h3>Activity: Clock Craft</h3>
        <p>
          Make a paper clock with moving hands. Practice setting it to different times!
        </p>
      </section>
      
      {/* Understanding the Past, Present, and Future */}
      <section className="section">
        <h2 className="section-title">3. Understanding the Past, Present, and Future</h2>
        <p className="section-text">
          Time can be divided into three parts:
        </p>
        <ul>
          <li><strong>Past:</strong> Things that have already happened, like your birthday last year.</li>
          <li><strong>Present:</strong> What is happening right now.</li>
          <li><strong>Future:</strong> Things that will happen, like your next holiday.</li>
        </ul>
        <h3>Activity: Time Sort</h3>
        <p>Sort events into the past, present, or future (e.g., "I was born" → Past, "I am eating lunch" → Present).</p>
      </section>
      
      {/* The Timeline */}
      <section className="section">
        <h2 className="section-title">4. The Timeline</h2>
        <p className="section-text">
          A timeline shows the order of events. Let’s learn how to read one!
        </p>
        <h3>Simple Timeline Example:</h3>
        <ul className="timeline">
          <li><strong>5000 BC:</strong> People began farming.</li>
          <li><strong>3000 BC:</strong> The invention of the wheel.</li>
          <li><strong>1400s:</strong> Christopher Columbus sailed to America.</li>
          <li><strong>1969:</strong> Humans landed on the Moon.</li>
          <li><strong>2023:</strong> Today, you are learning about history!</li>
        </ul>
        <h4>Activity: Your Timeline</h4>
        <p>Create a timeline of your life. Include 3-5 important events (e.g., "I was born," "I started school," "I learned to ride a bike").</p>
      </section>
      
      {/* Why Is History Importat? */}
      <section className="section">
        <h2 className="section-title">5. Why Is History Important?</h2>
        <p className="section-text">
          History helps us understand how people lived before us, how the world has changed, and how events from the past affect us today.
        </p>
        <h3>Activity: Historical Detective</h3>
        <p>
          Choose one historical event or invention. Draw or write about it and why it is important.
        </p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: Time and History</h2>
        <p>Let’s test what you’ve learned!</p>
        <ol>
          <li><strong>What does a timeline show?</strong>
            <ul>
              <li>a) A list of friends</li>
              <li>b) The order of events</li>
              <li>c) A calendar</li>
            </ul>
          </li>
          <li><strong>Which part of time is "yesterday"?</strong>
            <ul>
              <li>a) Past</li>
              <li>b) Present</li>
              <li>c) Future</li>
            </ul>
          </li>
          <li><strong>Who used the Sun to tell the time?</strong>
            <ul>
              <li>a) Modern people</li>
              <li>b) Ancient people</li>
              <li>c) Astronauts</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          In this unit, we explored the concept of time and its importance in our daily lives. We learned about the different ways time has been measured throughout history, from sundials to modern digital clocks. We also discussed how time is divided into the past, present, and future, and how to create and read a timeline to organize events. Finally, we reflected on the importance of history and how it helps us understand the world around us. Let us remember that time is a valuable resource that connects us to our past and guides us toward the future. Let’s continue learning from history!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"History is not just about the past; it helps us build a better future." - Unknown</p>
      </footer>
    </div>
  );
};

export default SocialUnit1;
