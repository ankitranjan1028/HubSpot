import { useState } from 'react';
import FilterPanel from './FilterPanel';
import MapView from './MapView';
import ListView from './ListView';
import useContacts from '../hooks/useContacts';

const ContactDirectory = () => {
  const { contacts, loading, error, filters, updateFilters, clearFilters } = useContacts();
  const [viewMode, setViewMode] = useState('map'); // 'map' or 'list'

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading contacts...</div>;
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white shadow p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-700">ProStruct Engineering Contact Directory</h1>
          <div className="flex space-x-2">
            <button 
              className={`px-4 py-2 rounded ${viewMode === 'map' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setViewMode('map')}
            >
              Map View
            </button>
            <button 
              className={`px-4 py-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setViewMode('list')}
            >
              List View
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <FilterPanel 
          filters={filters} 
          updateFilters={updateFilters} 
          clearFilters={clearFilters} 
        />
        
        <div className="flex-1 overflow-hidden">
          {error ? (
            <div className="error-notification m-4">
              {error}
            </div>
          ) : (
            viewMode === 'map' ? (
              <MapView contacts={contacts} />
            ) : (
              <ListView contacts={contacts} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactDirectory;