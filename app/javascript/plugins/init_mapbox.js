import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

const mapElement = document.getElementById("map");

const addMarkers = (marker, map) => {
  const popup = new mapboxgl.Popup().setHTML(marker.infoWindow);

  const element = document.createElement('div');
  element.className = 'marekr';
  element.style.backgroundImage = `url('${marker.image_url}')`;
  element.style.backgroundSize = 'containe';
  element.style.backgroundRepeat = 'no-repeat';
  element.style.width = '40px';
  element.style.height = '40px';

  new mapboxgl.Marker(element)
    .setLngLat([marker.lng, marker.lat])
    .setPopup(popup)
    .addTo(map);
}

const fitMapToMarkers = (markers, map) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([marker.lng, marker.lat]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 })
};

const initMapbox = () => {
  if(mapElement) {
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
    });

    map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken,
                                      mapboxgl: mapboxgl }));

    const markers = JSON.parse(mapElement.dataset.markers)
    markers.forEach((marker) =>  addMarkers(marker, map))

    fitMapToMarkers(markers, map)

  }
}

export { initMapbox };
