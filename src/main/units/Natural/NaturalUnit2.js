import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./NaturalUnit.css";

const LivingThings = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1 className="title">Living Things: Diversity and Interactions</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objectives</h3>
        <ul>
          <li>Define what living things are and identify their characteristics.</li>
          <li>Classify living things into different groups: plants, animals, fungi, and microorganisms.</li>
          <li>Explain the interactions between living things, including predator-prey relationships, symbiosis, and competition.</li>
          <li>Describe the concept of habitats and the importance of each living thing's environment.</li>
          <li>Discuss ways to protect the environment and promote sustainability.</li>
        </ul>
      </section>        

      {/* Living */}
      <section className="section">
        <h2 className="section-title">1. What Are Living Things?</h2>
        <p className="section-text">
          Living things are organisms that are alive. They grow, move, reproduce, and need food, water, and air to survive. There are many different types of living things, such as plants, animals, fungi, and microorganisms. Let’s learn more about them!
        </p>
        <h3>1.1. Characteristics of Living Things</h3>
        <ul>
          <li>Living things grow and develop.</li>
          <li>They need food and water to survive.</li>
          <li>They can reproduce and make babies.</li>
          <li>They respond to changes in their environment.</li>
          <li>Living things move or can move at some point in their life cycle.</li>
        </ul>
      </section>

      {/* Types of Living Things */}
      <section className="section">
        <h2 className="section-title">2. Types of Living Things</h2>
        <h3>2.1. Plants</h3>
        <p className="section-text">
          Plants are living things that make their own food using sunlight. They are essential for life on Earth because they provide oxygen and food for other organisms.
        </p>
        <h4>Activity: Plant Growth</h4>
        <p>Draw a simple plant and label its parts: roots, stem, leaves, and flowers.</p>

        <h3>2.2. Animals</h3>
        <p className="section-text">
          Animals are living things that move around to find food, water, and shelter. Some animals live on land, while others live in water.
        </p>
        <h4>Activity: Animal Classification</h4>
        <p>Can you classify animals into two groups? Land animals and water animals. Write or draw some examples of each group!</p>

        <h3>2.3. Fungi</h3>
        <p className="section-text">
          Fungi are living organisms, but they are different from plants and animals. They can be found in many places, like on trees, food, and even in the soil.
        </p>

        <h3>2.4. Microorganisms</h3>
        <p className="section-text">
          Microorganisms are tiny living things that we cannot see without a microscope. Some are helpful, and some can make us sick.
        </p>
      </section>

      {/* Interactions Between Living Things */}
      <section className="section">
        <h2 className="section-title">3. Interactions Between Living Things</h2>
        <p className="section-text">
          Living things interact with each other in many ways. Let’s look at some examples:
        </p>
        <h3>3.1. Predator and Prey</h3>
        <p className="section-text">
          In nature, some animals eat other animals. The animals that hunt and eat others are called predators, and the animals they hunt are called prey. This is an important interaction for the balance of nature.
        </p>
        <h4>Activity: Predator and Prey</h4>
        <p>Draw a picture of a predator and its prey. Can you think of other examples of predators and prey?</p>

        <h3>3.2. Symbiosis</h3>
        <p className="section-text">
          Symbiosis is when two living things live together and help each other. Some animals and plants depend on each other to survive.
        </p>
        <h4>Activity: Symbiosis Example</h4>
        <p>Draw a picture of two animals or plants that help each other. For example, bees and flowers.</p>

        <h3>3.3. Competition</h3>
        <p className="section-text">
          Sometimes, living things compete with each other for food, space, and other resources. This can happen between animals or even plants!
        </p>
        <h4>Activity: Resource Competition</h4>
        <p>Think of two animals that might compete for food. Draw them both and explain what they are competing for.</p>
      </section>

      {/* Habitats */}
      <section className="section">
        <h2 className="section-title">4. Habitats</h2>
        <p className="section-text">
          Every living thing has a home where it lives and grows. This place is called its habitat. Some animals live in forests, while others live in oceans or deserts. Plants also have their own habitats.
        </p>
        <h4>Activity: Draw a Habitat</h4>
        <p>Can you draw a habitat for an animal or plant? Label the different things that help the animal or plant live there, such as food, water, and shelter.</p>
      </section>

      {/* Protecting Our Environment */}
      <section className="section">
        <h2 className="section-title">5. Protecting Our Environment</h2>
        <p className="section-text">
          It’s important to take care of our planet so that living things can survive. We can protect the environment by recycling, saving water, and planting trees.
        </p>
        <h4>Activity: Protecting Nature</h4>
        <p>What can you do to help protect nature? Draw or write down 3 ways you can help the environment!</p>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Fun Quiz: Living Things</h2>
        <p>Let’s check what you learned! Answer these questions:</p>
        <ol>
          <li><strong>What do plants use to make their food?</strong>
            <ul>
              <li>a) Sunlight</li>
              <li>b) Water</li>
              <li>c) Soil</li>
            </ul>
          </li>
          <li><strong>Which animal is a predator?</strong>
            <ul>
              <li>a) Lion</li>
              <li>b) Rabbit</li>
              <li>c) Deer</li>
            </ul>
          </li>
          <li><strong>What is a habitat?</strong>
            <ul>
              <li>a) A type of food</li>
              <li>b) A place where a living thing lives</li>
              <li>c) A kind of animal</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          In this unit, we explored the diversity of living beings, their characteristics, interactions, and habitats. We learned that each organism, whether a plant, animal, fungus, or microorganism, plays a crucial role in the balance of our ecosystem and the importance of protecting our environment to ensure their survival. Remember that every living being is essential to our world!
        </p>
      </section>

      <footer className="footer">
        <p>"Every living thing plays an important role in our world!" - Unknown</p>
      </footer>
    </div>
  );
};

export default LivingThings;
