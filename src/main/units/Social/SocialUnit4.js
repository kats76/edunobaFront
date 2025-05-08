import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./SocialUnit.css";

const SocialUnit4 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">Economy and Sustainable Development</h1>

     {/* Key Objectives */}
     <section className="section">
     <h3 className="section-title">Objectives</h3>
     <ul>
        <li>Define the economy and explain its role in society.</li>
        <li>Understand the concept of sustainable development and its importance for future generations.</li>
        <li>Identify different types of resources and their significance in the economy.</li>
        <li>Discuss sustainable practices that can be implemented in businesses and communities.</li>
        <li>Explain the role of government in promoting sustainable development and protecting resources.</li>
     </ul>
     </section>

      <section className="section">
        <h2 className="section-title">1. What is the Economy?</h2>
        <p className="section-text">
          The economy is the system by which people make, buy, and sell goods and services. It involves all the businesses, workers, and resources that are used to create products we need and want. The economy is essential because it determines how wealth is shared among people and nations.
        </p>
        <h3>Activity: My Own Economy</h3>
        <p>
          Imagine you are running a small business. Draw what products or services you would sell. How would you attract customers? Write down how you would use the money you earn.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">2. What is Sustainable Development?</h2>
        <p className="section-text">
          Sustainable development is about meeting the needs of the present without harming the ability of future generations to meet their own needs. It involves protecting the environment, promoting social equality, and ensuring economic growth in a way that doesn't deplete resources.
        </p>
        <h3>Key Principles of Sustainable Development:</h3>
        <ul>
          <li><strong>Environmental Protection:</strong> Taking care of nature, air, and water.</li>
          <li><strong>Social Equity:</strong> Ensuring everyone has the same opportunities.</li>
          <li><strong>Economic Growth:</strong> Improving people's lives without harming the planet.</li>
        </ul>
        <h4>Activity: Sustainable Choices</h4>
        <p>Write down three actions you can take to help the environment and ensure a better future for everyone!</p>
      </section>

      <section className="section">
        <h2 className="section-title">3. Resources and Their Importance</h2>
        <p className="section-text">
          Resources are things that people use to create goods and services. There are two types of resources:
        </p>
        <h3>Natural Resources:</h3>
        <ul>
          <li><strong>Renewable Resources:</strong> These can be replaced naturally, like solar energy or wind.</li>
          <li><strong>Non-renewable Resources:</strong> These are limited, like coal, oil, and natural gas.</li>
        </ul>
        <h3>Human Resources:</h3>
        <ul>
          <li><strong>Labor:</strong> People working in businesses, factories, and offices.</li>
          <li><strong>Entrepreneurship:</strong> People who create new ideas, products, and services.</li>
        </ul>
        <h4>Activity: Resource Mapping</h4>
        <p>Can you identify which resources you use daily? Think about what you eat, use at home, or at school. Draw a simple map showing where these resources come from.</p>
      </section>

      <section className="section">
        <h2 className="section-title">4. Sustainable Practices in the Economy</h2>
        <p className="section-text">
          Sustainable practices in the economy include using resources wisely, recycling, reducing waste, and promoting clean energy sources. By making better choices, we can protect the planet and help ensure there is enough for future generations.
        </p>
        <h3>Activity: Sustainable Business</h3>
        <p>Imagine you run a company. How could you make it more sustainable? List three things your business could do to reduce waste or help the environment.</p>
      </section>

      <section className="section">
        <h2 className="section-title">5. The Role of Government in Sustainable Development</h2>
        <p className="section-text">
          Governments play a crucial role in promoting sustainable development. They create laws and policies that encourage businesses to be more environmentally friendly, protect natural resources, and ensure social equality.
        </p>
        <h4>Activity: Government Actions</h4>
        <p>What laws or actions could the government take to make your community more sustainable? Write down three ideas you think could help.</p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: Economy and Sustainable Development</h2>
        <p>Let's see what you’ve learned!</p>
        <ol>
          <li><strong>What is sustainable development?</strong>
            <ul>
              <li>a) Making money quickly</li>
              <li>b) Meeting present needs without harming future generations</li>
              <li>c) Using all resources without care</li>
            </ul>
          </li>
          <li><strong>Which of the following is a renewable resource?</strong>
            <ul>
              <li>a) Coal</li>
              <li>b) Solar energy</li>
              <li>c) Natural gas</li>
            </ul>
          </li>
          <li><strong>What is one way businesses can become more sustainable?</strong>
            <ul>
              <li>a) Use fewer resources</li>
              <li>b) Use only non-renewable resources</li>
              <li>c) Increase waste production</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          In this unit, we explored the concept of the economy and its fundamental role in society, as well as the importance of sustainable development to ensure a viable future for the next generations. We learned about the different types of resources, both natural and human, and their relevance in the economy. We also discussed sustainable practices that can be implemented in businesses and communities to protect the environment and promote social equity. Finally, we reflected on the role of government in promoting sustainable development and protecting resources. Let us remember that by adopting sustainable practices and working together, we can build a healthier and more equitable future for all. Let’s continue to be committed to sustainable development!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Sustainability is the key to a better future for all. - Unknown"</p>
      </footer>
    </div>
  );
};

export default SocialUnit4;
