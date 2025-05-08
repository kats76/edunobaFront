import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./SpanishUnit.css";

const SpanishUnit4 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
        {/* Title */}
      <h1 className="title">Explorando la Literatura</h1>

      {/* Key Objectives */}
      <section className="section">
        <h3 className="section-title">Objetivos</h3>
        <ul>
          <li>Descubrir el mundo de los libros y los cuentos.</li>
          <li>Desarrollar la imaginación y la creatividad a través de la lectura.</li>
          <li>Identificar los elementos básicos de una historia (personajes, lugar, acción).</li>
          <li>Fomentar el hábito de leer como una actividad divertida y enriquecedora.</li>
        </ul>
      </section>

      {/* What is Literature? */}
      <section className="section">
        <h2 className="section-title">1. ¿Qué es la Literatura?</h2>
        <p className="section-text">
          La literatura son historias que se cuentan a través de palabras. Pueden ser cuentos, poesías o aventuras mágicas que nos llevan a otros mundos.
        </p>
        <h3>Actividad: Mis Historias Favoritas</h3>
        <p>
          Piensa en una historia que te guste mucho, ya sea un cuento, una película o algo que te hayan contado. Reflexiona:
        </p>
        <ul>
          <li>¿Qué te gustó más de esa historia?</li>
          <li>¿Quiénes eran los personajes principales?</li>
          <li>¿Cómo podrías cambiar el final?</li>
        </ul>
      </section>

      {/* Elements of a Story */}
      <section className="section">
        <h2 className="section-title">2. Los Elementos de una Historia</h2>
        <p className="section-text">
          Toda historia tiene personajes (quiénes), un lugar (dónde) y una acción (qué sucede). Estos elementos juntos crean aventuras mágicas o misterios por resolver.
        </p>
        <h3>Actividad: Crea tu Aventura</h3>
        <p>
          Imagina una historia corta con los siguientes elementos:
        </p>
        <ul>
          <li>Un personaje curioso (como un gato o un niño explorador).</li>
          <li>Un lugar especial (como un castillo o un bosque encantado).</li>
          <li>Una acción emocionante (encontrar un tesoro, resolver un misterio).</li>
        </ul>
        <p>
          Escribe tres frases que cuenten lo que pasa en tu historia. ¡Comparte con tus compañeros!
        </p>
      </section>

      {/* The Magic of Poetry */}
      <section className="section">
        <h2 className="section-title">3. La Magia de la Poesía</h2>
        <p className="section-text">
          La poesía usa palabras como pinceles para pintar imágenes en nuestra mente. Las rimas y los ritmos hacen que las palabras bailen.
        </p>
        <h3>Actividad: Poemas Divertidos</h3>
        <p>
          Completa estas frases para crear un pequeño poema:
        </p>
        <ul>
          <li>En el cielo brilla el ________,</li>
          <li>Las estrellas bailan y ________,</li>
          <li>La noche es mágica porque ________.</li>
        </ul>
        <p>
          Usa tu imaginación para terminarlo como más te guste.
        </p>
      </section>

      {/* Classic Tales */}
      <section className="section">
        <h2 className="section-title">4. Cuentos Clásicos</h2>
        <p className="section-text">
          Los cuentos clásicos son historias que se han contado durante muchos años. Algunos como "Caperucita Roja" o "Los Tres Cerditos" enseñan lecciones importantes.
        </p>
        <h3>Actividad: ¿Qué Harías Tú?</h3>
        <p>
          Escoge un cuento clásico y responde:
        </p>
        <ul>
          <li>¿Qué harías si fueras el personaje principal?</li>
          <li>¿Cambiarías algo en la historia? ¿Por qué?</li>
          <li>Dibuja una escena de la historia que más te guste.</li>
        </ul>
      </section>

      {/* Why is Reading Important? */}
      <section className="section">
        <h2 className="section-title">5. ¿Por qué Leer es Importante?</h2>
        <p className="section-text">
          Leer nos ayuda a aprender cosas nuevas, a imaginar mundos diferentes y a entender cómo piensan otras personas. ¡Es como tener superpoderes!
        </p>
        <h3>Actividad: Mi Libro Favorito</h3>
        <p>
          Piensa en un libro o historia que te guste mucho. Comparte con la clase:
        </p>
        <ul>
          <li>¿De qué trata?</li>
          <li>¿Quién es tu personaje favorito?</li>
          <li>¿Por qué recomendarías este libro a un amigo?</li>
        </ul>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">6. Revisión: Adivinanzas Literarias</h2>
        <p>Resuelve estas preguntas para demostrar cuánto sabes:</p>
        <ol>
          <li><strong>¿Qué elementos tiene una historia?</strong>
            <ul>
              <li>a) Personajes, lugar y acción.</li>
              <li>b) Solo personajes.</li>
              <li>c) Una portada bonita.</li>
            </ul>
          </li>
          <li><strong>¿Qué hace especial a la poesía?</strong>
            <ul>
              <li>a) Usa rimas y palabras mágicas.</li>
              <li>b) Siempre cuenta historias largas.</li>
              <li>c) Es difícil de entender.</li>
            </ul>
          </li>
          <li><strong>¿Qué aprendemos al leer cuentos clásicos?</strong>
            <ul>
              <li>a) Lecciones importantes y valores.</li>
              <li>b) Solo historias de personajes antiguos.</li>
              <li>c) Cómo escribir siempre igual.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusión</h2>
        <p className="section-text">
          La literatura es un mundo mágico que está esperando a ser explorado. Cada libro es una puerta a nuevas aventuras. ¡Lee, sueña y crea tus propias historias!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Volver</button>
      </div>

      <footer className="footer">
        <p>"Un libro es un sueño que tienes en tus manos." -  Neil Gaiman</p>
      </footer>
    </div>
  );
};

export default SpanishUnit4;
