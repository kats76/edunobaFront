import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./SpanishUnit.css";

const SpanishUnit3 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
        {/* Title */}
      <h1 className="title">Descubriendo el Lenguaje</h1>

      {/* Key Objetives */}
      <section className="section">
        <h3 className="section-title">Objetivos</h3>
        <ul>
          <li>Comprender cómo funciona el lenguaje en nuestra vida diaria.</li>
          <li>Explorar las similitudes y diferencias entre las lenguas.</li>
          <li>Fomentar el respeto por los diferentes idiomas y formas de hablar.</li>
          <li>Aprender a observar y reflexionar sobre las palabras y su uso.</li>
        </ul>
      </section>

      {/* What's the language? */}
      <section className="section">
        <h2 className="section-title">1. ¿Qué es el Lenguaje?</h2>
        <p className="section-text">
          El lenguaje es como un puente mágico que usamos para comunicarnos. Puede ser hablado, escrito o incluso con gestos. ¡Cada idioma tiene su propio estilo y música!
        </p>
        <h3>Actividad: Encuentra las Palabras</h3>
        <p>
          Mira a tu alrededor y encuentra cinco palabras que ves o escuchas todos los días (por ejemplo, “puerta” o “gracias”). Reflexiona:
        </p>
        <ul>
          <li>¿Qué significan estas palabras?</li>
          <li>¿Cómo las usarías en una frase?</li>
          <li>¿Conoces otra palabra que signifique lo mismo?</li>
        </ul>
      </section>

      {/* Words and its meanings */}
      <section className="section">
        <h2 className="section-title">2. Las Palabras y sus Significados</h2>
        <p className="section-text">
          Cada palabra tiene un significado, pero algunas pueden tener más de uno. Por ejemplo, la palabra “llama” puede ser un animal o el fuego. ¡Qué curioso!
        </p>
        <h3>Actividad: Palabras Polivalentes</h3>
        <p>
          Escribe tres palabras que puedan significar diferentes cosas según el contexto. Por ejemplo:
        </p>
        <ul>
          <li>“Llave” (puede abrir puertas o ser una clave para resolver algo).</li>
          <li>“Banco” (donde te sientas o una institución financiera).</li>
          <li>Piensa en una frase para cada significado y compártela con la clase.</li>
        </ul>
      </section>

      {/* Worldwide Languages  */}
      <section className="section">
        <h2 className="section-title">3. Las Lenguas del Mundo</h2>
        <p className="section-text">
          En el mundo hay más de 7,000 lenguas. Cada una tiene sonidos, palabras y formas especiales de decir las cosas. Aprender sobre ellas nos ayuda a respetar a los demás.
        </p>
        <h3>Actividad: Saludos en Diferentes Idiomas</h3>
        <p>
          Aprende cómo se dice “hola” en tres idiomas diferentes. Por ejemplo:
        </p>
        <ul>
          <li>Inglés: Hello</li>
          <li>Francés: Bonjour</li>
          <li>Alemán: Hallo</li>
        </ul>
        <p>Practica saludando a tus compañeros usando estas palabras. ¡Es divertido y educativo!</p>
      </section>

      {/* The evolution of the Language */}
      <section className="section">
        <h2 className="section-title">4. ¿Cómo Cambian las Palabras?</h2>
        <p className="section-text">
          Las palabras cambian con el tiempo. Algunas se crean nuevas, como “internet,” y otras cambian de significado. Por ejemplo, “ratón” ahora también significa un dispositivo de computadora.
        </p>
        <h3>Actividad: Palabras del Futuro</h3>
        <p>
          Imagina una palabra nueva que podría usarse en el futuro. Piensa en:
        </p>
        <ul>
          <li>¿Qué significa?</li>
          <li>¿Cómo se usaría?</li>
          <li>Escribe una frase con tu palabra inventada.</li>
        </ul>
      </section>

      {/* The Importance of the Language */}
      <section className="section">
        <h2 className="section-title">5. ¿Por qué es Importante?</h2>
        <p className="section-text">
          El lenguaje es importante porque nos ayuda a aprender, a jugar con las palabras y a comunicarnos con los demás. ¡Es como un superpoder que todos tenemos!
        </p>
        <h3>Actividad: Historias Compartidas</h3>
        <p>
          En grupos pequeños, cuenten una historia corta usando palabras que todos aporten. Por ejemplo:
        </p>
        <ul>
          <li>Primero, una persona comienza con una frase.</li>
          <li>Luego, los demás continúan agregando más frases.</li>
          <li>¡Así crean una historia divertida juntos!</li>
        </ul>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Revisión: Juego de Preguntas</h2>
        <p>Demuestra cuánto has aprendido:</p>
        <ol>
          <li><strong>¿Qué es el lenguaje?</strong>
            <ul>
              <li>a) Una forma de comunicarnos.</li>
              <li>b) Solo hablar con palabras.</li>
              <li>c) Algo que no usamos todos los días.</li>
            </ul>
          </li>
          <li><strong>¿Por qué cambian las palabras?</strong>
            <ul>
              <li>a) Porque el mundo cambia y necesitamos nuevas formas de expresarnos.</li>
              <li>b) Porque dejamos de usarlas.</li>
              <li>c) Porque ya no son importantes.</li>
            </ul>
          </li>
          <li><strong>¿Qué aprendemos al conocer otros idiomas?</strong>
            <ul>
              <li>a) A respetar y entender otras culturas.</li>
              <li>b) A olvidarnos de nuestro idioma.</li>
              <li>c) A hablar todos de la misma manera.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusión</h2>
        <p className="section-text">
          Aprender sobre el lenguaje nos ayuda a entender el mundo, a comunicarnos mejor y a respetar la diversidad. ¡Explora, juega y diviértete con las palabras!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go back</button>
      </div>

      <footer className="footer">
        <p>"Las palabras son las llaves que abren las puertas del conocimiento y la imaginación." - Helen Keller</p>
      </footer>
    </div>
  );
};

export default SpanishUnit3;
