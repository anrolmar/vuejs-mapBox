<template>
  <MapView />
  <SearchBar />
  <MyLocationButton />
  <TripDetails />
</template>

<script lang="ts">
import { usePlaces } from '@/composables';
import { defineComponent } from 'vue';
import MapView from '@/components/map-view/MapView.vue';
import MyLocationButton from '@/components/my-location-button/MyLocationButton.vue';
import SearchBar from '@/components/search-bar/SearchBar.vue';
import TripDetails from '@/components/trip-details/TripDetails.vue';

export default defineComponent({
  name: 'HomeView',
  components: { MapView, MyLocationButton, SearchBar, TripDetails },
  setup() {
    usePlaces();
  },
});
</script>
