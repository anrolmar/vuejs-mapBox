import { Feature, PlacesResponse } from '@/interfaces/places';

import { ActionTree } from 'vuex';
import { MUTATIONS } from './mutations';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';

const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => commit(MUTATIONS.SET_LNG_LAT, { lng: coords.longitude, lat: coords.latitude }),
      (error) => {
        console.error(error);
        throw new Error('No geolocation :(');
      },
    );
  },

  async searchPlacesByTerm({ commit, state }, query: string): Promise<Feature[]> {
    if (query.length === 0) {
      commit('setPlaces', []);
      return [];
    }

    if (!state.userLocation) {
      throw new Error('There no user location');
    }

    const response = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation?.join(','),
      },
    });

    commit('setPlaces', response.data.features);

    return response.data.features;
  },
};

export default actions;
