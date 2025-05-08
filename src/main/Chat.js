import React, { useEffect, useState } from "react";
import axios from "axios";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const Chat = () => {
  const [messages, setMessages] = useState([]); // Lista de mensajes
  const [message, setMessage] = useState(""); // Nuevo mensaje a enviar
  const [stompClient, setStompClient] = useState(null); // Cliente WebSocket
  const [id, setId] = useState(null); // ID del usuario autenticado

  // Obtener el ID del usuario
  useEffect(() => {

    const storedId = localStorage.getItem("id");

    if (storedId) {
      setId(storedId);
    }
    
  }, []);

  // Cargar mensajes y configurar WebSocket
  useEffect(() => {
    if (!id) return; // No ejecutar hasta que el ID esté disponible

    // Obtener TODOS los mensajes (no solo los de un usuario)
    axios.get("http://localhost:8080/messages/list")
      .then((response) => setMessages(response.data))
      .catch((error) => console.error("Error al obtener mensajes:", error));

    // Configurar WebSocket
    const socket = new SockJS("http://localhost:8080/chat-websocket");
    const client = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        console.log("✅ Conectado al WebSocket");

        // Suscribirse a nuevos mensajes
        client.subscribe("/topic/messages", (msg) => {
          const newMessage = JSON.parse(msg.body);
          setMessages((prev) => [...prev, newMessage]); // Agregar nuevo mensaje a la lista
        });
      },
      onStompError: (frame) => {
        console.error("❌ Error en STOMP:", frame);
      }
    });

    client.activate();
    setStompClient(client);

    return () => client.deactivate(); // Desconectar WebSocket al salir
  }, [id]); // Ejecutar solo cuando `id` esté disponible

  // Enviar mensaje
  const sendMessage = () => {
    if (message.trim() !== "" && stompClient?.connected && id) {
      const msgObj = { id: id, content: message, timestamp: new Date().toISOString() };
      
      stompClient.publish({
        destination: "/app/chat-websocket",
        body: JSON.stringify(msgObj),
      });

      setMessage(""); // Limpiar campo de texto después de enviar
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Real-time chat</h2>
      <div className="card">
        <div className="card-body">
          <div className="chat-messages p-3 border rounded" style={{ maxHeight: "300px", overflowY: "auto" }}>
            {messages.length > 0 ? (
              messages.map((msg, i) => (
                <p key={i}>
                  <strong>User {msg.id}:</strong> {msg.content}
                </p>
              ))
            ) : (
              <p className="text-muted">There is not any message yet.</p>
            )}
          </div>

          <div className="input-group mt-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              rows="3"
              className="form-control"
              style={{ resize: "none" }}
            />
          </div>

          <div className="text-center mt-3">
            <button onClick={sendMessage} className="btn btn-primary w-100">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
