import React from 'react';
import ReactDOM from 'react-dom/client';  
// Importación de estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'; // Tus estilos personalizados

// Componentes
import App from './App';
import AuthProvider from './context/AuthProvider'; // Proveedor de autenticación (revisado aquí)

// Creación del root (forma recomendada en React 18+)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizado de la aplicación
root.render(
  <React.StrictMode>
    {/* AuthProvider envuelve toda la aplicación para manejo global de autenticación */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
