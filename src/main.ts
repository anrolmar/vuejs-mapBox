import App from './App.vue';
import { createApp } from 'vue';
import mapboxgl from 'mapbox-gl';
import router from './router';
import store from './store';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5yb2xtYXIiLCJhIjoiY2w1YjNudmZlMDNzZjNpcThqZDBxazE5cSJ9.13NmUTWixDHzOnehlSboNw';

if (!navigator.geolocation) {
  throw new Error('Browser does not support Geolocation');
}

createApp(App).use(store).use(router).mount('#app');
