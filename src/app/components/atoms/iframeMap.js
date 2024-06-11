import React, { useState } from "react";

const MapComponent = ({ setLocation, location }) => {
  const handleMapClick = (event) => {
    console.log("hum tum", event);
    const latitude = event.latLng.lat();
    const longitude = event.latLng.lng();

    setLocation({
      latitude: latitude,
      longitude: longitude,
      //   address: "",
    });

    // fetch(
    //   `https://maps.googleapis.com/maps/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyB3fZvHRP8c7AfQUWGWLTRJqsyCFrgGQWA`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.status === "OK") {
    //       console.log("data", data);
    //       setLocation({
    //         ...location,
    //         address: data.results[0].formatted_address,
    //       });
    //     } else {
    //       console.error("Geocoding failed:", data.status);
    //     }
    //   })
    //   .catch((error) => console.error("Error fetching geocoding data:", error));
  };

  // Load the Google Maps JavaScript API
  const loadMapScript = () => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB3fZvHRP8c7AfQUWGWLTRJqsyCFrgGQWA&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => initMap();
  };

  // Initialize the map
  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 31.525906046867604, lng: 74.34418217609871 },
      zoom: 15,
    });

    map.addListener("click", handleMapClick);
  };

  // Load the map script when the component mounts
  React.useEffect(() => {
    loadMapScript();
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      {/* <div>
        Latitude: {location.latitude}
        <br />
        Longitude: {location.longitude}
        <br />
        Address: {location.address}
      </div> */}
    </div>
  );
};

export default MapComponent;
