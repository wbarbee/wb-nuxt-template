import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
  });
};
export default createStore;

export const state = () => ({
  headerVisible: false,
  submitFormMode: null,
  currentRoute: null,
  currentBackgroundColor: null,
  currentFocalImg: null,
  imgFocused: false,
  zoomImgTitle: null,
  zoomImgDimensions: null,
  zoomImgMedium: null,
  zoomImgYear: null,
});

export const mutations = {
  HIDE_HEADER(state) {
    state.headerVisible = false;
  },
  SHOW_HEADER(state) {
    state.headerVisible = true;
  },
  FORM_SUBMIT_START(state) {
    state.submitFormMode = 'in_progress';
  },
  FORM_SUBMIT_SUCCESS(state) {
    state.submitFormMode = 'success';
  },
  FORM_SUBMIT_FAIL(state) {
    state.submitFormMode = 'failed';
  },
  SET_CURRENT_ROUTE_NAME(state, routeName) {
    state.currentRoute = routeName;
  },
};

export const getters = {
  isMobile: function() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  },
};

export const actions = {
  showHeader({ commit }) {
    commit('SHOW_HEADER');
  },
  hideHeader({ commit }) {
    commit('HIDE_HEADER');
  },
  setCurrentRouteInfo({ commit }, routeObj) {
    commit('SET_CURRENT_ROUTE_NAME', routeObj.name);
  },
  async submitForm({ commit }, formInfo) {
    commit('FORM_SUBMIT_START', formInfo);
    console.log(formInfo);
    try {
      const searchParams = new URLSearchParams();
      searchParams.set('form-name', 'contact-submit');
      searchParams.set('userName', formInfo.full_name);
      searchParams.set('userEmail', formInfo.email);
      searchParams.set('userMessage', formInfo.message);
      const res = await fetch(location.host, {
        method: 'post',
        body: searchParams,
      });

      if (!res.ok) {
        return commit('FORM_SUBMIT_FAIL', res.statusText);
      }

      setTimeout(() => {
        commit('FORM_SUBMIT_SUCCESS');
      }, 3000);
    } catch (e) {
      commit('FORM_SUBMIT_FAIL', e.message);
    }
  },
};
