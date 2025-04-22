import { useState, useEffect } from 'react';
import api from '../services/api';

const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    roles: [],
    location: ''
  });

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const data = await api.getContacts();
        setContacts(data);
        setFilteredContacts(data);
        setLoading(false);
      } catch (err) {
        setError('No contacts found for entered location!');
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  useEffect(() => {
    // Apply filters
    let filtered = [...contacts];
    
    // Filter by roles
    if (filters.roles.length > 0) {
      filtered = filtered.filter(contact => 
        contact.projectRoles.some(role => 
          filters.roles.includes(role)
        )
      );
    }
    
    // Filter by location
    if (filters.location) {
      const locationLower = filters.location.toLowerCase();
      filtered = filtered.filter(contact => 
        contact.address.toLowerCase().includes(locationLower)
      );
    }
    
    setFilteredContacts(filtered);
  }, [filters, contacts]);

  const updateFilters = (newFilters) => {
    setFilters({...filters, ...newFilters});
  };

  const clearFilters = () => {
    setFilters({
      roles: [],
      location: ''
    });
  };

  return {
    contacts: filteredContacts,
    loading,
    error,
    filters,
    updateFilters,
    clearFilters
  };
};

export default useContacts;