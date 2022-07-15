import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: 'pk.eyJ1IjoiYW5yb2xtYXIiLCJhIjoiY2w1YjNudmZlMDNzZjNpcThqZDBxazE5cSJ9.13NmUTWixDHzOnehlSboNw',
  },
});

export default directionsApi;
