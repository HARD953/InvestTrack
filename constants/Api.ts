// src/constants/api.js
const API = {
    baseUrl: 'https://api.example.com/v1',
    endpoints: {
      login: '/auth/login',
      register: '/auth/register',
      getUser: '/user',
      updateUser: '/user/update',
      // Ajoutez d'autres points de terminaison si nécessaire
    },
    timeout: 5000, // Timeout pour les requêtes API en millisecondes
  };
  
  export default API;
  