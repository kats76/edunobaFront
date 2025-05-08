import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./SpanishUnit.css";

const SpanishUnit1 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="app-container">
        {/* Title */}
      <h1 className="title">Escuchar, Hablar y Conversar</h1>

      {/* Key Objetives */}
      <section className="section">
        <h3 className="section-title">Objetivos</h3>
        <ul>
          <li>Desarrollar habilidades de escucha activa y comprensión oral.</li>
          <li>Practicar la expresión oral con claridad y confianza.</li>
          <li>Participar en conversaciones respetuosas y significativas.</li>
          <li>Reconocer la importancia de escuchar y dialogar para construir relaciones.</li>
        </ul>
      </section>

      {/* Listen */}
      <section className="section">
        <h2 className="section-title">1. Escuchar</h2>
        <p className="section-text">
          Escuchar es una de las habilidades más importantes para la comunicación. Implica prestar atención a las palabras, el tono y el lenguaje corporal de quien habla.
        </p>
        <h3>Actividad: Escucha y Responde</h3>
        <p>
          Escucha una breve historia o instrucción que tu profesor o compañero te comparta. Luego, responde a preguntas como:
        </p>
        <ul>
          <li>¿De qué trató la historia?</li>
          <li>¿Qué sucedió primero, después y al final?</li>
          <li>¿Qué opinas sobre lo que escuchaste?</li>
        </ul>
      </section>

      {/* Speak */}
      <section className="section">
        <h2 className="section-title">2. Hablar</h2>
        <p className="section-text">
          Hablar implica expresar ideas y sentimientos de manera clara y estructurada. Es importante articular bien las palabras y usar un vocabulario apropiado.
        </p>
        <h3>Actividad: Presentación Breve</h3>
        <p>
          Prepara una presentación de 1-2 minutos sobre un tema que te guste, como tu mascota, tu deporte favorito o un lugar que quieras visitar. Habla frente a la clase o un compañero.
        </p>
        <ul>
          <li>Incluye una introducción, un desarrollo y una conclusión.</li>
          <li>Usa gestos y expresión facial para enfatizar tu mensaje.</li>
          <li>Pide retroalimentación de tus compañeros.</li>
        </ul>
      </section>

      {/* Converse */}
      <section className="section">
        <h2 className="section-title">3. Conversar</h2>
        <p className="section-text">
          Conversar es compartir ideas, hacer preguntas y responder en un diálogo respetuoso. Una buena conversación implica escuchar y turnarse para hablar.
        </p>
        <h3>Actividad: Rueda de Conversación</h3>
        <p>
          Forma un círculo con tus compañeros. Hablen sobre un tema elegido por el grupo, como “Mi actividad favorita” o “Qué quiero ser cuando crezca”. Cada estudiante:
        </p>
        <ul>
          <li>Comparte su opinión en 1 minuto.</li>
          <li>Escucha a los demás sin interrumpir.</li>
          <li>Hace una pregunta o comentario sobre lo que escuchó.</li>
        </ul>
      </section>

      {/* The Importance of these Skills */}
      <section className="section">
        <h2 className="section-title">4. ¿Por qué es importante?</h2>
        <p className="section-text">
          Las habilidades de escuchar, hablar y conversar son esenciales para el aprendizaje, la colaboración y la construcción de relaciones. Ayudan a resolver conflictos, compartir ideas y trabajar en equipo.
        </p>
        <h3>Actividad: Reflexión en Grupo</h3>
        <p>
          En parejas o grupos pequeños, discutan:
        </p>
        <ul>
          <li>¿Cuándo es importante escuchar?</li>
          <li>¿Cómo te sientes cuando alguien te escucha atentamente?</li>
          <li>¿Qué puedes hacer para ser mejor comunicador?</li>
        </ul>
      </section>

      {/* Review */}
      <section className="section">
        <h2 className="section-title">5. Revisión: Quiz Divertido</h2>
        <p>Prueba lo que has aprendido:</p>
        <ol>
          <li><strong>¿Qué significa escuchar activamente?</strong>
            <ul>
              <li>a) Mirar al hablante y prestar atención</li>
              <li>b) Hablar al mismo tiempo que otra persona</li>
              <li>c) Pensar en otra cosa mientras alguien habla</li>
            </ul>
          </li>
          <li><strong>¿Cómo puedes mejorar tu forma de hablar?</strong>
            <ul>
              <li>a) Usando palabras claras y organizadas</li>
              <li>b) Hablando rápido sin parar</li>
              <li>c) No mirar a tu audiencia</li>
            </ul>
          </li>
          <li><strong>¿Qué es importante en una conversación?</strong>
            <ul>
              <li>a) Escuchar y responder respetuosamente</li>
              <li>b) Hablar sin dejar que otros participen</li>
              <li>c) Ignorar las ideas de los demás</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2 className="section-title">Conclusión</h2>
        <p className="section-text">
          Escuchar, hablar y conversar son habilidades esenciales que usamos todos los días. Practicar estas habilidades nos ayuda a comprender mejor a los demás, expresar nuestras ideas y colaborar de manera efectiva. ¡Sigamos mejorando juntos!
        </p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>

      <footer className="footer">
        <p>"La comunicación es la clave para entendernos y crecer juntos." - Unknown</p>
      </footer>
    </div>
  );
};

export default SpanishUnit1;
