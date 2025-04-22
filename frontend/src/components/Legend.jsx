// import { useEffect } from 'react';
// import L from 'leaflet';

// const Legend = () => {
//   useEffect(() => {
//     const legendControl = L.control({ position: 'bottomright' });

//     legendControl.onAdd = function() {
//       const div = L.DomUtil.create('div', 'info legend');
      
//       div.style.backgroundColor = 'white';
//       div.style.padding = '10px';
//       div.style.borderRadius = '4px';
//       div.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
      
//       div.innerHTML = `
//         <h4 style="margin: 0 0 8px 0; font-weight: bold;">Project Roles</h4>
//         <div>
//           <div style="display: flex; align-items: center; margin-bottom: 4px;">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="#60a5fa" stroke="white" stroke-width="1" style="margin-right: 6px;">
//               <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
//             </svg>
//             <span>Contractor</span>
//           </div>
//           <div style="display: flex; align-items: center; margin-bottom: 4px;">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="#34d399" stroke="white" stroke-width="1" style="margin-right: 6px;">
//               <path d="M3,12 L5,10 L5,5 L9,5 L9,7 L15,7 L15,5 L19,5 L19,10 L21,12 L21,21 L14,21 L14,15 L10,15 L10,21 L3,21 Z" />
//             </svg>
//             <span>Home Owner</span>
//           </div>
//           <div style="display: flex; align-items: center; margin-bottom: 4px;">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="#a78bfa" stroke="white" stroke-width="1" style="margin-right: 6px;">
//               <circle cx="12" cy="12" r="10" />
//             </svg>
//             <span>Affiliate</span>
//           </div>
//           <div style="display: flex; align-items: center; margin-bottom: 4px;">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="white" stroke-width="1" style="margin-right: 6px;">
//               <rect x="4" y="4" width="16" height="16" />
//             </svg>
//             <span>Referral Partner</span>
//           </div>
//           <div style="display: flex; align-items: center; margin-bottom: 4px;">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="#f87171" stroke="white" stroke-width="1" style="margin-right: 6px;">
//               <polygon points="12,2 22,22 2,22" />
//             </svg>
//             <span>Community Partner</span>
//           </div>
//           <div style="display: flex; align-items: center;">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="#6366f1" stroke="white" stroke-width="1" style="margin-right: 6px;">
//               <polygon points="12,2 22,12 12,22 2,12" />
//             </svg>
//             <span>Geo Tech</span>
//           </div>
//         </div>
//       `;
      
//       return div;
//     };

//     legendControl.addTo(document.querySelector('.leaflet-container')?._leaflet_map);
    
//     return () => {
//       document.querySelector('.leaflet-container')?._leaflet_map?.removeControl(legendControl);
//     };
//   }, []);

//   return null;
// };

// export default Legend;




import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

const Legend = () => {
  const map = useMap();
  
  useEffect(() => {
    if (!map) return;
    
    const legendControl = L.control({ position: 'bottomright' });

    legendControl.onAdd = function() {
      const div = L.DomUtil.create('div', 'info legend');
      
      div.style.backgroundColor = 'white';
      div.style.padding = '10px';
      div.style.borderRadius = '4px';
      div.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
      
      div.innerHTML = `
        <h4 style="margin: 0 0 8px 0; font-weight: bold;">Project Roles</h4>
        <div>
          <div style="display: flex; align-items: center; margin-bottom: 4px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#60a5fa" stroke="white" stroke-width="1" style="margin-right: 6px;">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
            <span>Contractor</span>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 4px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#34d399" stroke="white" stroke-width="1" style="margin-right: 6px;">
              <path d="M3,12 L5,10 L5,5 L9,5 L9,7 L15,7 L15,5 L19,5 L19,10 L21,12 L21,21 L14,21 L14,15 L10,15 L10,21 L3,21 Z" />
            </svg>
            <span>Home Owner</span>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 4px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#a78bfa" stroke="white" stroke-width="1" style="margin-right: 6px;">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span>Affiliate</span>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 4px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="white" stroke-width="1" style="margin-right: 6px;">
              <rect x="4" y="4" width="16" height="16" />
            </svg>
            <span>Referral Partner</span>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 4px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#f87171" stroke="white" stroke-width="1" style="margin-right: 6px;">
              <polygon points="12,2 22,22 2,22" />
            </svg>
            <span>Community Partner</span>
          </div>
          <div style="display: flex; align-items: center;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#6366f1" stroke="white" stroke-width="1" style="margin-right: 6px;">
              <polygon points="12,2 22,12 12,22 2,12" />
            </svg>
            <span>Geo Tech</span>
          </div>
        </div>
      `;
      
      return div;
    };

    legendControl.addTo(map);
    
    return () => {
      legendControl.remove();
    };
  }, [map]);

  return null;
};

export default Legend;