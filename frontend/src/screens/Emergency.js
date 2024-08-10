import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Emergency() {
  const [location, setLocation] = useState({
    latitude: null,  // Set to null initially
    longitude: null  // Set to null initially
  });

  const handleChooseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          console.log('Location:', latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <>
      <button onClick={handleChooseLocation}>Get location</button>
      {
        location.latitude && location.longitude ? (
          <MapContainer center={[location.latitude, location.longitude]} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.latitude, location.longitude]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        ) : (
          <p>Please click the button to get your location.</p>
        )
      }
    </>
  )
}
