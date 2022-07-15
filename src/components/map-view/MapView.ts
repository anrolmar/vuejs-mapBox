import { defineComponent, onMounted, ref, watch } from 'vue';
import { useMap, usePlaces } from '@/composables';

import Mapboxgl from 'mapbox-gl';

export default defineComponent({
  name: 'MapView',
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const { userLocation, isUserLocationReady } = usePlaces();
    const { setMap } = useMap();

    const initMap = async () => {
      if (!mapElement.value) throw new Error('Container does not exist');
      if (!userLocation.value) throw new Error('User location does not exist');

      await Promise.resolve();

      const map = new Mapboxgl.Map({
        container: mapElement.value,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: userLocation.value,
        zoom: 15,
      });

      const myLocationPopUp = new Mapboxgl.Popup().setLngLat(userLocation.value).setHTML(`
				<h4>Here I am</h4>
				<p>Currently in Valencia</p>
			`);

      new Mapboxgl.Marker().setLngLat(userLocation.value).setPopup(myLocationPopUp).addTo(map);
      setMap(map);
    };

    onMounted(() => {
      if (isUserLocationReady.value) initMap();
    });

    watch(isUserLocationReady, (newValue) => {
      if (isUserLocationReady.value) initMap();
    });

    return {
      isUserLocationReady,
      mapElement,
    };
  },
});
