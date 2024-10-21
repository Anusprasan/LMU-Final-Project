import React, { useEffect, useRef, useState } from 'react';

export default function MultipleMarkersMap() {
  const mapRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Array of locations for the markers
  const locations = [
    { lat: 40.7128, lng: -74.0060, title: 'New York City' }, // NYC
    { lat: 34.0522, lng: -118.2437, title: 'Los Angeles' },   // LA
    { lat: 51.5074, lng: -0.1278, title: 'London' },          // London
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for resizing
    window.addEventListener('resize', handleResize);

    // Initialize the map
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: locations[0], // Center the map on the first location
        zoom: 3,              // Zoom level for better visibility of all markers
      });

      // Add markers to the map
      locations.forEach((location) => {
        new window.google.maps.Marker({
          position: location,
          map: map,
          title: location.title,
        });
      });
    };

    // Load the map when the component mounts
    if (window.google) {
      initMap();
    } else {
      // In case Google Maps script is not yet loaded
      window.initMap = initMap;
    }

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
     
      {/* Map Container */}
      <div ref={mapRef} style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
}
