<template>
  <div class="container">
    <div>
      <img class="main-index-logo" src="../assets/images/main_logo.svg" alt="main logo">
      <h1 class="title">
        wb-nuxt-template
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--doc"
        >
          Nuxt.js Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 8em;
}

.main-index-logo {
  width: 95%;
  max-width: 22em;
  margin-bottom: 1em;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 75px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.button--doc {
  border: 1px solid lightgrey;
  color: black;
  padding: 0.5em 1.75em;
  border-radius: 3px;
  font-weight: 300;
  font-size: 20px;
  text-decoration: none;
  display: block;
  margin: 2em auto 1.5em;
  width: 95%;
  max-width: 10em;
  transition: 0.25s ease-in-out;
  &:hover {
    cursor: pointer;
    border-color: mediumspringgreen;
    background-color: white;
    color: mediumspringgreen;
  }
}

.button--grey {
  border: 1px solid lightgrey;
  color: black;
  padding: 0.5em 1.75em;
  border-radius: 3px;
  font-weight: 300;
  font-size: 20px;
  text-decoration: none;
  display: block;
  margin: 1em auto;
  width: 95%;
  max-width: 10em;
  transition: 0.25s ease-in-out;
  &:hover {
    cursor: pointer;
    border-color: cornflowerblue;
    background-color: white;
    color: cornflowerblue;
  }
}
</style>
