import React from 'react';
import GoogleMap from 'react-google-map';
import GoogleMapLoader from 'react-google-maps-loader';

const MY_API_KEY = 'AIzaSyAYpyx64mfsGC_Cmn3ZSIq4l8uDK-9ghb8';

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
          title: 'La Tortuga Azul',
          position: {
            lat: 38.087279,
            lng: -3.6188435
          },
          onLoaded: (googleMaps, map, marker) => {
            // Set Marker animation
            //marker.setAnimation(googleMaps.Animation.BOUNCE);

            // Define Marker InfoWindow
            const infoWindow = new googleMaps.InfoWindow({
              content: `
                <div class='map-info'>
                  <h3>Complejo "La Tortuga Azul"</h3>
                </div>
              `,
            });

            // Open InfoWindow when Marker will be clicked
            googleMaps.event.addListener(marker, 'click', () => {
              infoWindow.open(map, marker)
            });

            // Open InfoWindow directly
            //infoWindow.open(map, marker);
          },
        },
        {
          title: 'Palacio de los Marqueses de Linares',
          position: {
            lat: 38.0862276,
            lng: -3.6277978
          },
          onLoaded: (googleMaps, map, marker) => {
            // Set Marker animation
            //marker.setAnimation(googleMaps.Animation.BOUNCE);

            // Define Marker InfoWindow
            const infoWindow = new googleMaps.InfoWindow({
              content: `
                <div class='map-info'>
                  <h3>Palacio de los Marqueses de Linares</h3>
                </div>
              `,
            });

            // Open InfoWindow when Marker will be clicked
            googleMaps.event.addListener(marker, 'click', () => {
              infoWindow.open(map, marker)
            });

            // Open InfoWindow directly
            //infoWindow.open(map, marker);
          },
        },
        {
          title: 'Hotel Santiago',
          position: {
            lat: 38.0939063,
            lng: -3.6390555
          },
          onLoaded: (googleMaps, map, marker) => {
            // Set Marker animation
            //marker.setAnimation(googleMaps.Animation.BOUNCE);

            // Define Marker InfoWindow
            const infoWindow = new googleMaps.InfoWindow({
              content: `
                <div class='map-info'>
                  <h3>Hotel Santiago</h3>
                </div>
              `,
            });

            // Open InfoWindow when Marker will be clicked
            googleMaps.event.addListener(marker, 'click', () => {
              infoWindow.open(map, marker)
            });

            // Open InfoWindow directly
            //infoWindow.open(map, marker);
          },
        }
      ]}
      center={{lat: 38.0933542, lng: -3.6321662}}
      zoom={14}
      onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.ROADMAP)
      }}
    />
  </div>
);

/*export default GoogleMapLoader(Map, {
  libraries: ['places'],
  key: MY_API_KEY,
})*/

export default (props) => <iframe src='https://www.google.com/maps/d/embed?mid=19i7deQqZqGOD2kfwPiK6ZDPy8Xc' style={{border: 'none', width: '100%'}} height='300px' />;
