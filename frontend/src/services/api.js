// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;


// const api = {
//   getContacts: async () => {
//     try {
//       const response = await axios.get(`${API_URL}/contacts`);
//       return response.data.contacts;
//     } catch (error) {
//       console.error('Error fetching contacts:', error);
//       throw error;
//     }
//   }
// };

// export default api;

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = {
  getContacts: async () => {
    try {
      const response = await axios.get(`${API_URL}/contacts`, {
        withCredentials: true, 
      });
      return response.data.contacts;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  }
};

export default api;
