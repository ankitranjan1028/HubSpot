const hubspotClient = require('../config/hubspot');
const NodeGeocoder = require('node-geocoder');

// Configure geocoder
const geocoder = NodeGeocoder({
  provider: 'openstreetmap'
});

// Get all contacts with project roles
exports.getContacts = async (req, res) => {
  try {
    // Fetch contacts with project_roles property
    const response = await hubspotClient.get('/crm/v3/objects/contacts', {
      params: {
        properties: 'firstname,lastname,email,phone,address,city,state,zip,country,project_roles',
        limit: 100
      }
    });

    // Filter contacts that have project_roles
    let contacts = response.data.results.filter(
      contact => contact.properties.project_roles && contact.properties.project_roles !== ''
    );

    // Add geocoded locations
    contacts = await Promise.all(contacts.map(async (contact) => {
      const fullName = `${contact.properties.firstname || ''} ${contact.properties.lastname || ''}`.trim();
      const address = formatAddress(contact.properties);
      
      // Get coordinates
      let location = null;
      if (address) {
        try {
          const geoResults = await geocoder.geocode(address);
          if (geoResults && geoResults.length > 0) {
            location = {
              lat: geoResults[0].latitude,
              lng: geoResults[0].longitude
            };
          }
        } catch (error) {
          console.error('Geocoding error:', error);
        }
      }

      // Format project roles as array
      const projectRoles = contact.properties.project_roles ? 
        contact.properties.project_roles.split(';') : [];

      return {
        id: contact.id,
        name: fullName,
        email: contact.properties.email || '',
        phone: contact.properties.phone || '',
        address: address,
        location: location || { lat: 40.7128, lng: -74.0060 }, // Default to NYC if geocoding fails
        projectRoles: projectRoles
      };
    }));

    res.json({ contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error.response?.data || error.message);
    res.status(500).json({ message: 'Failed to fetch contacts' });
  }
};

// Helper function to format address
function formatAddress(properties) {
  const addressParts = [
    properties.address,
    properties.city,
    properties.state,
    properties.zip,
    properties.country
  ].filter(Boolean);
  
  return addressParts.join(', ');
}