<template>
  <div
    id="app"
    :class="`${currentRoute}-body-selected animated`"
    :style="{ backgroundColor: currentBackgroundColor }"
  >
    <TheHeader
      id="header"
      :header-visible="headerVisible"
      :current-route="currentRoute"
    />
    <nuxt id="main-body" :class="`${currentRoute}-inner-selected`" />
    <TheFooter />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import constants from '@/assets/libs/constants';
import * as router from 'vue-router';

export default {
  components: {
    TheHeader: () => import('@/components/Header'),
    TheFooter: () => import('@/components/Footer'),
  },
  computed: {
    ...mapState(['headerVisible', 'currentRoute', 'currentBackgroundColor']),
  },
  watch: {
    $route(to, from) {
      this.setCurrentRouteInfo(this.$route);

      if (to.name !== from.name) {
        document.body.classList.remove('modal-open');
      }
    },
  },
  methods: {
    ...mapActions(['setCurrentRouteInfo']),
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  min-height: 100vh;
  animation: 0.5s fadeInlinear;
}
</style>
