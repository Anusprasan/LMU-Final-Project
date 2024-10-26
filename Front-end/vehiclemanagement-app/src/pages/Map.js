import React, { useEffect, useRef, useState } from 'react';

export default function MultipleMarkersMap() {
  const [locations, setLocations] = useState([]);

  const mapRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Fetch locations from the API
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("https://localhost:7096/api/Devicedata/GetLocation");
        const data = await response.json();

        const mappedLocations = data.map((location) => ({
          lat: location.lat,
          lng: location.lng,
          title: location.title,
        }));

        setLocations(mappedLocations); // Update the state with fetched locations
      } catch (err) {
        console.error("Error fetching locations:", err);
      }
    };

    fetchLocations();
  }, []);

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
      if (locations.length > 0) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: locations[0], // Center the map on the first location
          zoom: 8,              // Zoom level for better visibility of all markers
        });

        // Add markers to the map
        locations.forEach((location) => {
          new window.google.maps.Marker({
            position: location,
            map: map,
            label: location.title,  // Set label to the location's title
            title: location.title,  // This adds the title tooltip on hover
          });
        });
      }
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
  }, [locations]); // Add locations as a dependency to reinitialize the map when locations change

  return (
    <div>
      {/* Map Container */}
      <div ref={mapRef} style={{ width: '100%', height: '800px' }}></div>
    </div>
  );
}
