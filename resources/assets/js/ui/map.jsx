import React from "react";
import GoogleMap from "react-google-map";
import GoogleMapLoader from "react-google-maps-loader";

const MY_API_KEY = "AIzaSyAYpyx64mfsGC_Cmn3ZSIq4l8uDK-9ghb8";

const Map = ({googleMaps}) => (
  // GoogleMap component has a 100% height style.
  // You have to set the DOM parent height.
  // So you can perfectly handle responsive with differents heights.
  <div style={{
    width: '100%',
    height: '300px'
  }}>
    <GoogleMap
      googleMaps={googleMaps}
      // You can add and remove coordinates on the fly.
      // The map will rerender new markers and remove the old ones.
      coordinates={[
        {
          title: "Toulouse",
          position: {
            lat: 38.087279,
            lng: -3.6188435
          },
          onLoaded: (googleMaps, map, marker) => {
            // Set Marker animation
            marker.setAnimation(googleMaps.Animation.BOUNCE);

            // Define Marker InfoWindow
            const infoWindow = new googleMaps.InfoWindow({
              content: `
                <div class="map-info">
                  <h3>Complejo "La Tortuga Azul"</h3>
                  <div>Calle Jerez, s/n<br>23700 Linares</div>
                </div>
              `,
            });

            // Open InfoWindow when Marker will be clicked
            googleMaps.event.addListener(marker, "click", () => {
              infoWindow.open(map, marker)
            });

            // Open InfoWindow directly
            infoWindow.open(map, marker);
          },
        }
      ]}
      center={{lat: 38.0865582, lng: -3.6183043999999427}}
      zoom={16}
      onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.ROADMAP)
      }}
    />
  </div>
);

export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: MY_API_KEY,
})
