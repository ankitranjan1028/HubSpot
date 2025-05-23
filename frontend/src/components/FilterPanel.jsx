import { useState, useEffect } from 'react';

const roleOptions = [
  { id: 'Contractor', label: 'Contractor' },
  { id: 'Home Owner', label: 'Home Owner' },
  { id: 'Affiliate', label: 'Affiliate' },
  { id: 'Referral Partner', label: 'Referral Partner' },
  { id: 'Community Partner', label: 'Community Partner' },
  { id: 'Geo Tech', label: 'Geo Tech' }
];

const FilterPanel = ({ filters, updateFilters, clearFilters }) => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [location, setLocation] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 768);
  
  // Initialize from filters prop
  useEffect(() => {
    setSelectedRoles(filters.roles || []);
    setLocation(filters.location || '');
  }, [filters]);
  
  const handleRoleChange = (role) => {
    let newRoles;
    if (selectedRoles.includes(role)) {
      newRoles = selectedRoles.filter(r => r !== role);
    } else {
      newRoles = [...selectedRoles, role];
    }
    setSelectedRoles(newRoles);
  };
  
  const handleApplyFilters = () => {
    updateFilters({
      roles: selectedRoles,
      location: location
    });
    
    // Auto-collapse on mobile after applying filters
    if (window.innerWidth <= 768) {
      setIsCollapsed(true);
    }
  };
  
  const handleClearFilters = () => {
    setSelectedRoles([]);
    setLocation('');
    clearFilters();
  };
  
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  return (
    <div className={`filter-panel p-4 w-full md:w-80 md:min-w-80 overflow-y-auto border-r border-gray-200 ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Mobile filter toggle */}
      <div className="filter-toggle md:hidden" onClick={toggleCollapse}>
        <h2 className="text-lg font-semibold">Filter Contacts</h2>
        <span className={`filter-toggle-icon ${isCollapsed ? '' : 'open'}`}>
          ▼
        </span>
      </div>
      
      {/* Desktop heading (always visible) */}
      <h2 className="text-lg font-semibold mb-4 hidden md:block">Filter Contacts</h2>
      
      <div className="filter-content">
        <div className="mb-6">
          <h3 className="font-medium mb-2">Project Roles</h3>
          <div className="space-y-2">
            {roleOptions.map((role) => (
              <div key={role.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={role.id}
                  checked={selectedRoles.includes(role.id)}
                  onChange={() => handleRoleChange(role.id)}
                  className="mr-2"
                />
                <label htmlFor={role.id}>{role.label}</label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium mb-2">Location</h3>
          <input
            type="text"
            placeholder="City, State, or Region"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div className="filter-buttons">
          <button 
            onClick={handleApplyFilters}
            className="btn btn-primary flex-1"
          >
            Apply Filters
          </button>
          <button 
            onClick={handleClearFilters}
            className="btn btn-secondary flex-1"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;