import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    Language: 'es',
    access_token: 'pk.eyJ1IjoiYW5yb2xtYXIiLCJhIjoiY2w1YjNudmZlMDNzZjNpcThqZDBxazE5cSJ9.13NmUTWixDHzOnehlSboNw',
  },
});

export default searchApi;
