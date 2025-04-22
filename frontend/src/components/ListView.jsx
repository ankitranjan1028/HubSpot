import React from 'react';

const ListView = ({ contacts }) => {
  if (!contacts || contacts.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="error-notification">
          Failed to load contacts
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map(contact => (
          <div key={contact.id} className="bg-white rounded-lg shadow p-4 border border-gray-200">
            <h3 className="font-bold text-lg">{contact.name}</h3>
            <div className="text-sm space-y-1 mt-2">
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p className="text-gray-500">{contact.address}</p>
            </div>
            
            <div className="mt-3">
              <p className="text-xs font-semibold text-gray-500 mb-1">Project Roles:</p>
              <div className="flex flex-wrap">
                {contact.projectRoles.map((role, index) => (
                  <span 
                    key={index} 
                    className={`role-pill role-${role.toLowerCase().replace(' ', '')}`}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListView;