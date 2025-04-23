import axios from 'axios';

// const API_URL = 'https://hubspot-backend.onrender.com/api';
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://hubspot-backend.onrender.com/api'
  : 'http://localhost:5000/api';

const api = {
  getContacts: async () => {
    try {
      const response = await axios.get(`${API_URL}/contacts`);
      return response.data.contacts;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  }
};

export default api;
