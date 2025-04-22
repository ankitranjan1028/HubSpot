const axios = require('axios');

// Configure axios instance for HubSpot API
const hubspotClient = axios.create({
  baseURL: 'https://api.hubapi.com',
  headers: {
    'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

module.exports = hubspotClient;