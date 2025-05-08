import axios from 'axios';

// Configura Axios para enviar cookies en todas las peticiones
axios.defaults.withCredentials = true; // Esto es importante para manejar las cookies en el frontend

// Interceptor de respuesta para manejar errores 401 (Token expirado)
axios.interceptors.response.use(
  response => response, // Si la respuesta es exitosa, simplemente la devuelve
  async error => {
    if (error.response && error.response.status === 401) {
      // Si el error es 401 (Token expirado)
      try {
        // Realizamos la solicitud al endpoint de refresh
        const refreshResponse = await axios.post('http://localhost:8080/api/user/auth/refresh', {}, {
          withCredentials: true, // Importante para enviar las cookies
        });

        // Si obtenemos un nuevo token, repetimos la solicitud original
        const newAccessToken = refreshResponse.data.accessToken;

        // Ahora actualizamos el header con el nuevo token
        error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;

        // Reintentar la solicitud original con el nuevo token
        return axios(error.config);
      } catch (refreshError) {
        // Si falla el refresh token (por ejemplo, si también ha expirado), redirigir al login
        console.log('Refresh token expired or invalid');
        window.location.href = '/login';  // Redirigir al login
      }
    }
    return Promise.reject(error);
  }
);

export default axios;
