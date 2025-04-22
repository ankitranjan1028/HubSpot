// import { useEffect } from 'react';
// import { MapContainer, TileLayer, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import ContactMarker from './ContactMarker';
// import Legend from './Legend';

// // Define center of map - this will adjust based on contacts
// const defaultCenter = [39.8283, -98.5795]; // Center of US
// const defaultZoom = 4;

// const MapRecenter = ({ contacts }) => {
//   const map = useMap();
  
//   useEffect(() => {
//     if (contacts && contacts.length > 0) {
//       const bounds = contacts.reduce((bounds, contact) => {
//         if (contact.location) {
//           bounds.push([contact.location.lat, contact.location.lng]);
//         }
//         return bounds;
//       }, []);
      
//       if (bounds.length > 0) {
//         map.fitBounds(bounds, { padding: [50, 50] });
//       }
//     }
//   }, [contacts, map]);
  
//   return null;
// };

// const MapView = ({ contacts }) => {
//   if (!contacts || contacts.length === 0) {
//     return (
//       <div className="flex items-center justify-center h-full">
//         <div className="error-notification">
//           Failed to load contacts
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative h-full">
//       <MapContainer 
//         center={defaultCenter} 
//         zoom={defaultZoom} 
//         className="h-full w-full"
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
        
//         {contacts.map((contact) => (
//           <ContactMarker key={contact.id} contact={contact} />
//         ))}
        
//         <MapRecenter contacts={contacts} />
//         <Legend />
//       </MapContainer>
//     </div>
//   );
// };

// export default MapView;


import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ContactMarker from './ContactMarker';
import Legend from './Legend';

// Define center of map - this will adjust based on contacts
const defaultCenter = [39.8283, -98.5795]; // Center of US
const defaultZoom = 4;

const MapRecenter = ({ contacts }) => {
  const map = useMap();
  
  useEffect(() => {
    if (contacts && contacts.length > 0) {
      const bounds = contacts.reduce((bounds, contact) => {
        if (contact.location) {
          bounds.push([contact.location.lat, contact.location.lng]);
        }
        return bounds;
      }, []);
      
      if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  }, [contacts, map]);
  
  return null;
};

const MapView = ({ contacts }) => {
  if (!contacts || contacts.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="error-notification">
        No contacts found for entered location!
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full">
      <MapContainer 
        center={defaultCenter} 
        zoom={defaultZoom} 
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {contacts.map((contact) => (
          <ContactMarker key={contact.id} contact={contact} />
        ))}
        
        <MapRecenter contacts={contacts} />
        <Legend />
      </MapContainer>
    </div>
  );
};

export default MapView;