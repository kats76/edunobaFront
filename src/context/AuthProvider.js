import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false); // Para manejar estado de carga
  const [error, setError] = useState(null); // Para manejar errores

  // Cargar el token desde las cookies al montar el componente
  useEffect(() => {
    const storedToken = Cookies.get("token");

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Función para establecer el token en las cookies y en el estado
  const setAuthToken = (newToken) => {
    Cookies.set("token", newToken, { expires: 7 }); // Establece el token con expiración de 7 días
    setToken(newToken);
  };

  // Función para eliminar el token del estado y las cookies
  const removeAuthToken = () => {
    Cookies.remove("token");
    setToken(null);
  };

  // Función para verificar si el usuario está autenticado
  const isAuthenticated = () => {
    return !!token;
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setAuthToken,
        removeAuthToken,
        isAuthenticated,
        loading,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
