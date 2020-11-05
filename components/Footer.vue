<template>
  <div class="footer-wrapper">
    <div class="footer-inner">
      <ul class="footer-items">
        <li>© Company Name, {{ currentYear }}</li>
        <li><span>//</span></li>
        <li v-for="footerItem in footerItems">
          <nuxt-link v-if="footerItem.route" :to="footerItem.route">{{
            footerItem.title
          }}</nuxt-link>
        </li>
        <li><span>//</span></li>
        <li>
          <nuxt-link to="about"> Contact </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      footerItems: [
        {
          id: 1,
          title: 'GDRP',
          href: null,
          route: 'gdrp',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-wrapper {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  left: 0;
  font-family: 'Gotham', sans-serif;
  .footer-inner {
    padding: 0.85em 2em;
    ul {
      li {
        color: white;
        a {
          color: white;
          &:visited,
          &:focus,
          &:active {
            color: white;
          }
          &:hover {
            color: grey;
          }
        }
      }
    }
    .footer-items {
      li {
        display: inline-block;
        // font-family: $primary-font;
        font-size: 15px;
        color: white;
        font-weight: 300;
        margin-right: 1em;
        a {
          font-size: 15px;
          text-decoration: underline;
          transition: 0.3s ease-in-out;
          font-weight: 300;
          &:hover {
            color: crimson;
            cursor: pointer;
          }
        }
        &:last-of-type {
          margin-right: 0;
        }
        span {
          margin: 0 0.5em 0 0.5em;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .footer-inner {
    padding: 0.5em 0.5em !important;
    text-align: center;
  }
  .footer-items {
    width: 95%;
    margin: 0 auto;
    li {
      text-align: center;
      font-size: 12px !important;
      margin-right: 0.25em !important;
      line-height: 23px;
      a {
        font-size: 12px !important;
      }
    }
  }
}
</style>
