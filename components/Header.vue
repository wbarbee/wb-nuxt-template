<template>
  <div class="header-wrapper">
    <div class="inner-text">
      <h2>
        <nuxt-link to="/">HEADER</nuxt-link>
      </h2>
      <vue-dropdown
        class="nav-dropdown"
        :config="config"
        :current-route="currentRoute"
        @setSelectedOption="setNewSelectedOption($event)"
      ></vue-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import 'vue2-animate/dist/vue2-animate.min.css';
import constants from '@/assets/libs/constants';
import vueDropdown from '@/components/vue-dropdown';

export default {
  name: 'TheHeader',
  data() {
    return {
      config: {
        options: [
          {
            value: 'Value 1',
            href: 'page_1',
            selected: false,
          },
          {
            value: 'Value 2',
            href: 'page_2',
            selected: false,
          },
          {
            value: 'Value 3',
            href: 'page_3',
            selected: false,
          },
        ],
        placeholder: 'Menu',
        backgroundColor: 'white',
        textColor: 'black',
        borderRadius: '1.5em',
        border: '1px solid gray',
        width: 180,
      },
    };
  },
  methods: {
    setNewSelectedOption(selectedOption) {
      this.config.placeholder = selectedOption.value;
    },
  },
  props: {
    headerVisible: Boolean,
    currentRoute: String,
  },
};
</script>

<style scoped lang="scss">
.header-wrapper {
  width: 100%;
  height: 3.25em;
  font-family: 'Open Sans', sans-serif;
  .inner-text {
    width: 100%;
    padding-top: 0.95em;
    padding-bottom: 1.5em;
    h2 {
      display: inline-block;
      width: 23em;
      padding-left: 1em;
      margin: 0;
      a {
        text-transform: uppercase;
        text-align: center;
        font-size: 20px;
        color: black;
        padding-bottom: 0.25em;
        letter-spacing: 13px;
        font-weight: 700;
        width: auto;
        transition: 0.3s ease-in-out;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        &.nuxt-link-exact-active {
          cursor: default;
        }
        &:active,
        &:focus,
        &:visited {
          color: black;
        }
      }
    }
    .nav-dropdown {
      margin: 0;
      position: absolute;
      right: 1.5em;
      top: 0;
      z-index: 100;
    }
  }
}

@media (min-width: 767px) {
  a {
    &:not(.nuxt-link-exact-active) {
      &:hover {
        opacity: 0.5 !important;
        border-bottom: 1px solid #ff7043 !important;
      }
    }
  }
}

@media (max-width: 767px) {
  .header-wrapper {
    height: 4em !important;
  }

  .nav-dropdown {
    right: 0.5em !important;
    top: 0.25em !important;
  }

  h2 {
    width: 16em !important;
    a {
      line-height: 18px !important;
      font-size: 16px !important;
    }
  }
}

a {
  &:visited,
  &:focus,
  &:active {
    opacity: 1 !important;
    text-decoration: none !important;
  }
}
</style>
