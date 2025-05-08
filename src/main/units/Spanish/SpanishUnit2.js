import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./SpanishUnit.css";

const SpanishUnit2 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
        {/* Title */}
      <h1 className="title">Lectura y Escritura</h1>

      {/* Key Objetives */}
      <section className="section">
        <h3 className="section-title">Objetivos</h3>
        <ul>
          <li>Desarrollar habilidades de lectura comprensiva y crítica.</li>
          <li>Escribir textos claros, estructurados y creativos.</li>
          <li>Fomentar el amor por la lectura y la escritura como formas de expresión personal.</li>
          <li>Identificar la importancia de leer y escribir en nuestra vida diaria.</li>
        </ul>
      </section>

      {/* Read */}
      <section className="section">
        <h2 className="section-title">1. Leer</h2>
        <p className="section-text">
          Leer es una ventana al conocimiento y la imaginación. Ayuda a mejorar nuestra comprensión, vocabulario y creatividad.
        </p>
        <h3>Actividad: Lectura Guiada</h3>
        <p>
          Lee un cuento corto o un fragmento de un libro. Luego, responde a las siguientes preguntas:
        </p>
        <ul>
          <li>¿Cuál es el tema principal del texto?</li>
          <li>¿Quiénes son los personajes principales?</li>
          <li>¿Qué aprendiste o qué te hizo sentir esta lectura?</li>
        </ul>
      </section>

      {/* Write */}
      <section className="section">
        <h2 className="section-title">2. Escribir</h2>
        <p className="section-text">
          Escribir es una herramienta poderosa para comunicar ideas, contar historias y expresar sentimientos. Implica organizar nuestros pensamientos de manera clara y creativa.
        </p>
        <h3>Actividad: Escribe tu Historia</h3>
        <p>
          Escribe una historia corta sobre un día especial en tu vida. Asegúrate de incluir:
        </p>
        <ul>
          <li>Una introducción que presente el escenario y los personajes.</li>
          <li>Un desarrollo con los eventos principales.</li>
          <li>Una conclusión que cierre la historia de forma interesante.</li>
        </ul>
        <p>Comparte tu historia con un compañero y pide retroalimentación.</p>
      </section>

      {/* Read and Write Together */}
      <section className="section">
        <h2 className="section-title">3. Leer y Escribir Juntos</h2>
        <p className="section-text">
          Leer y escribir son habilidades complementarias. Leer nos inspira a escribir, y escribir nos ayuda a comprender mejor lo que leemos.
        </p>
        <h3>Actividad: Diario de Lectura</h3>
        <p>
          Lleva un diario donde escribas sobre los libros o textos que lees. Incluye:
        </p>
        <ul>
          <li>El título y el autor.</li>
          <li>Una breve reseña o resumen.</li>
          <li>Tu opinión o lo que aprendiste de la lectura.</li>
        </ul>
      </section>

      {/* The Importance of these Skills */}
      <section className="section">
        <h2 className="section-title">4. ¿Por qué es importante?</h2>
        <p className="section-text">
          Leer y escribir son esenciales para aprender, expresarnos y conectarnos con los demás. Nos ayudan a desarrollar empatía, creatividad y pensamiento crítico.
        </p>
        <h3>Actividad: Debate Literario</h3>
        <p>
          En grupos, hablen sobre un libro o texto que hayan leído. Discutan:
        </p>
        <ul>
          <li>¿Qué les gustó o no les gustó del texto?</li>
          <li>¿Qué mensaje creen que el autor quería transmitir?</li>
          <li>¿Qué cambiarían o agregarían al texto?</li>
        </ul>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">5. Revisión: Quiz Divertido</h2>
        <p>Prueba lo que has aprendido:</p>
        <ol>
          <li><strong>¿Qué preguntas debes hacerte al leer un texto?</strong>
            <ul>
              <li>a) ¿De qué trata y quiénes son los personajes?</li>
              <li>b) ¿Qué estaba haciendo ayer?</li>
              <li>c) ¿Qué voy a comer después?</li>
            </ul>
          </li>
          <li><strong>¿Qué hace que una historia sea interesante?</strong>
            <ul>
              <li>a) Una introducción clara, eventos emocionantes y un buen final.</li>
              <li>b) Solo palabras largas y complicadas.</li>
              <li>c) Dejar las ideas sin terminar.</li>
            </ul>
          </li>
          <li><strong>¿Cómo puedes mejorar tu escritura?</strong>
            <ul>
              <li>a) Revisando y organizando tus ideas.</li>
              <li>b) Escribiendo sin pensar en el tema.</li>
              <li>c) Ignorando la retroalimentación.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusión</h2>
        <p className="section-text">
          La lectura y la escritura son habilidades fundamentales que enriquecen nuestras vidas. Practicarlas nos abre las puertas al conocimiento, la creatividad y la comunicación efectiva. ¡Sigue leyendo y escribiendo para explorar nuevas ideas y expresar tu mundo!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"Leer y escribir nos ayudan a entender el mundo y a compartir nuestras ideas con los demás." - Unknown</p>
      </footer>
    </div>
  );
};

export default SpanishUnit2;
