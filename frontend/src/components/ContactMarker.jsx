// import { Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';

// // Define role icons with colors
// const roleIcons = {
//   'Contractor': { color: '#60a5fa', shape: 'star' },
//   'Home Owner': { color: '#34d399', shape: 'home' },
//   'Affiliate': { color: '#a78bfa', shape: 'circle' },
//   'Referral Partner': { color: '#fbbf24', shape: 'square' },
//   'Community Partner': { color: '#f87171', shape: 'triangle' },
//   'Geo Tech': { color: '#6366f1', shape: 'diamond' }
// };

// // Create custom icon for each role
// const createIcon = (role) => {
//   const roleInfo = roleIcons[role] || { color: '#9ca3af', shape: 'circle' };
  
//   // Create SVG icon based on role
//   const svgIcon = L.divIcon({
//     html: `
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="${roleInfo.color}" stroke="white" stroke-width="1">
//         ${getSvgPath(roleInfo.shape)}
//       </svg>
//     `,
//     className: '',
//     iconSize: [24, 24],
//     iconAnchor: [12, 12]
//   });
  
//   return svgIcon;
// };

// // Get SVG path based on shape
// const getSvgPath = (shape) => {
//   switch(shape) {
//     case 'star':
//       return '<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />';
//     case 'home':
//       return '<path d="M3,12 L5,10 L5,5 L9,5 L9,7 L15,7 L15,5 L19,5 L19,10 L21,12 L21,21 L14,21 L14,15 L10,15 L10,21 L3,21 Z" />';
//     case 'square':
//       return '<rect x="4" y="4" width="16" height="16" />';
//     case 'triangle':
//       return '<polygon points="12,2 22,22 2,22" />';
//     case 'diamond':
//       return '<polygon points="12,2 22,12 12,22 2,12" />';
//     case 'circle':
//     default:
//       return '<circle cx="12" cy="12" r="10" />';
//   }
// };

// // Function to create a slight position offset for multiple markers
// const getOffsetPosition = (basePosition, index, total) => {
//   // Only apply offset if there are multiple roles
//   if (total <= 1) return basePosition;
  
//   // Calculate angle for circular arrangement
//   const angle = (2 * Math.PI * index) / total;
  
//   // Define offset distance (in coordinate units)
//   const offsetDistance = 0.0001; // Adjust as needed
  
//   // Calculate offset
//   const latOffset = offsetDistance * Math.sin(angle);
//   const lngOffset = offsetDistance * Math.cos(angle);
  
//   return [basePosition[0] + latOffset, basePosition[1] + lngOffset];
// };

// const ContactMarker = ({ contact }) => {
//   if (!contact.location) return null;
  
//   // Create position array once
//   const basePosition = [contact.location.lat, contact.location.lng];
//   const totalRoles = contact.projectRoles.length;
  
//   return (
//     <>
//       {contact.projectRoles.map((role, index) => {
//         const icon = createIcon(role);
//         const position = getOffsetPosition(basePosition, index, totalRoles);
        
//         return (
//           <Marker
//             key={`${contact.id || contact.email}-${role}`}
//             position={position}
//             icon={icon}
//           >
//             <Popup>
//               <div className="p-2 max-w-xs">
//                 <h3 className="font-bold">{contact.name}</h3>
//                 <p className="text-sm">{contact.email}</p>
//                 <p className="text-sm">{contact.phone}</p>
//                 <p className="text-sm text-gray-600">{contact.address}</p>
                
//                 <div className="mt-2">
//                   <p className="text-xs font-semibold mb-1">Project Roles:</p>
//                   <div className="flex flex-wrap">
//                     {contact.projectRoles.map((contactRole, roleIndex) => (
//                       <span
//                         key={roleIndex}
//                         className={`role-pill role-${contactRole.toLowerCase().replace(' ', '')}`}
//                         style={{
//                           backgroundColor: roleIcons[contactRole]?.color || '#9ca3af',
//                           color: 'white',
//                           padding: '2px 6px',
//                           borderRadius: '9999px',
//                           fontSize: '0.75rem',
//                           margin: '0 2px 2px 0',
//                           display: 'inline-block'
//                         }}
//                       >
//                         {contactRole}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Popup>
//           </Marker>
//         );
//       })}
//     </>
//   );
// };

// export default ContactMarker;



import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Define role icons with colors
const roleIcons = {
  'Contractor': { color: '#60a5fa', shape: 'star' },
  'Home Owner': { color: '#34d399', shape: 'home' },
  'Affiliate': { color: '#a78bfa', shape: 'circle' },
  'Referral Partner': { color: '#fbbf24', shape: 'square' },
  'Community Partner': { color: '#f87171', shape: 'triangle' },
  'Geo Tech': { color: '#6366f1', shape: 'diamond' }
};

// Create custom icon for each role
const createIcon = (role) => {
  const roleInfo = roleIcons[role] || { color: '#9ca3af', shape: 'circle' };
  
  // Create SVG icon based on role
  const svgIcon = L.divIcon({
    html: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="${roleInfo.color}" stroke="white" stroke-width="1">
        ${getSvgPath(roleInfo.shape)}
      </svg>
    `,
    className: '',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
  
  return svgIcon;
};

// Get SVG path based on shape
const getSvgPath = (shape) => {
  switch(shape) {
    case 'star':
      return '<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />';
    case 'home':
      return '<path d="M3,12 L5,10 L5,5 L9,5 L9,7 L15,7 L15,5 L19,5 L19,10 L21,12 L21,21 L14,21 L14,15 L10,15 L10,21 L3,21 Z" />';
    case 'square':
      return '<rect x="4" y="4" width="16" height="16" />';
    case 'triangle':
      return '<polygon points="12,2 22,22 2,22" />';
    case 'diamond':
      return '<polygon points="12,2 22,12 12,22 2,12" />';
    case 'circle':
    default:
      return '<circle cx="12" cy="12" r="10" />';
  }
};

// Function to create a slight position offset for multiple markers
const getOffsetPosition = (basePosition, index, total) => {
  // Only apply offset if there are multiple roles
  if (total <= 1) return basePosition;
  
  // Calculate angle for circular arrangement
  const angle = (2 * Math.PI * index) / total;
  
  // Define offset distance (in coordinate units)
  const offsetDistance = 0.0001; // Adjust as needed
  
  // Calculate offset
  const latOffset = offsetDistance * Math.sin(angle);
  const lngOffset = offsetDistance * Math.cos(angle);
  
  return [basePosition[0] + latOffset, basePosition[1] + lngOffset];
};

const ContactMarker = ({ contact }) => {
  // Enhanced validation check
  if (!contact || !contact.location || 
      typeof contact.location.lat !== 'number' || 
      typeof contact.location.lng !== 'number' ||
      isNaN(contact.location.lat) || 
      isNaN(contact.location.lng)) {
    console.log(`Skipping invalid contact location:`, contact?.id || 'unknown');
    return null;
  }
  
  // Ensure projectRoles is an array, with default if missing
  const projectRoles = Array.isArray(contact.projectRoles) && contact.projectRoles.length > 0 
    ? contact.projectRoles 
    : ['Contractor']; // Default role if none specified
  
  // Create position array once
  const basePosition = [contact.location.lat, contact.location.lng];
  const totalRoles = projectRoles.length;
  
  return (
    <>
      {projectRoles.map((role, index) => {
        try {
          const icon = createIcon(role);
          const position = getOffsetPosition(basePosition, index, totalRoles);
          
          return (
            <Marker
              key={`${contact.id || contact.email || index}-${role}`}
              position={position}
              icon={icon}
            >
              <Popup>
                <div className="p-2 max-w-xs">
                  <h3 className="font-bold">{contact.name || 'Unknown Contact'}</h3>
                  {contact.email && <p className="text-sm">{contact.email}</p>}
                  {contact.phone && <p className="text-sm">{contact.phone}</p>}
                  {contact.address && <p className="text-sm text-gray-600">{contact.address}</p>}
                  
                  <div className="mt-2">
                    <p className="text-xs font-semibold mb-1">Project Roles:</p>
                    <div className="flex flex-wrap">
                      {projectRoles.map((contactRole, roleIndex) => (
                        <span
                          key={roleIndex}
                          className={`role-pill role-${contactRole.toLowerCase().replace(' ', '')}`}
                          style={{
                            backgroundColor: roleIcons[contactRole]?.color || '#9ca3af',
                            color: 'white',
                            padding: '2px 6px',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            margin: '0 2px 2px 0',
                            display: 'inline-block'
                          }}
                        >
                          {contactRole}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        } catch (err) {
          console.error(`Error rendering marker for contact ${contact.id || 'unknown'}:`, err);
          return null;
        }
      })}
    </>
  );
};

export default ContactMarker;