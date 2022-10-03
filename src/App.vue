<template>
  <header>
    <nav>
      <h2>Wybierz opcje:</h2>
      <section class="home__content">
        <router-link to="/"><button class="home__content-item" name="convert" id="convert">Konwertuj Walute</button></router-link>
        <router-link to="/fluctuation"><button class="home__content-item" name="fluctuation" id="fluctuation">Waluta Pomiędzy</button></router-link>
        <router-link to="/latest"><button class="home__content-item" name="latest" id="latest">Obecna waluta</button></router-link>
        <router-link to="/about"><button class="home__content-item" name="timeseries" id="timeseries">Waluta Dniowa</button></router-link>
        <router-link to="/about"><button class="home__content-item" name="date" id="date">Waluta datowa</button></router-link>
      </section>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
  </footer>
</template>
<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { onMounted, ref } from 'vue'
import axios, { HeadersDefaults } from 'axios'
import store from '@/store/index'

const info = ref<any>()
if (!localStorage.currencydata) {
  onMounted(async () => {
    await axios.get('https://api.apilayer.com/exchangerates_data/symbols', { headers: { apikey: process.env.VUE_APP_API_KEY } })
      .then(res => {
        store.state.data = res.data.symbols
        localStorage.currencydata = JSON.stringify(res.data.symbols)
      })
  })
} else {
  store.state.data = JSON.parse(localStorage.currencydata)
}

</script>
<style lang="scss">

$primary-color: #262161;
$secondary-color: #ef3f37;
$third-color: #fbaf41;

@mixin text-font {
  color: white;
  font-weight: bolder;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: capitalize;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  width: 98vw;
}
body {
  display: grid;
  justify-content: center;
  max-width: 98vw;
  background: $primary-color;
  @include text-font;
}

#app {
  padding: 10px 0px;
  display: grid;
  justify-content: center;
  min-width: 320px;
  max-width: 1440px;
}

main {
  min-height: 90vh;
  width: 100%;
}

.home__content {

  &-item {
    padding: 10px;
    margin: 10px;
    background-color: $secondary-color;
    border-radius: 25px;
    border: none;
    box-shadow: 1px 1px 1px lightcoral;
    cursor: pointer;
    transition: 0.5s;
    @include text-font;
        &:hover {
      scale: 1.05;
      rotate: 2.5deg;
    }
  }
}

</style>
