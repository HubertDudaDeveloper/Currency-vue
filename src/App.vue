<template>
  <header>
    <nav>
      <h2>Wybierz opcje:</h2>
      <section class="home__content">
        <router-link to="/"><button class="home__content-item" name="convert" id="convert"><label for="convert">Konwertuj Walute</label></button></router-link>
        <router-link to="/fluctuation"><button class="home__content-item" name="fluctuation" id="fluctuation"><label for="fluctuation">Waluta Pomiędzy</label></button></router-link>
        <router-link to="/about"><button class="home__content-item" name="latest" id="latest"><label for="latest">Obecna waluta</label></button></router-link>
        <router-link to="/about"><button class="home__content-item" name="timeseries" id="timeseries"><label for="timeseries">Waluta Dniowa</label></button></router-link>
        <router-link to="/about"><button class="home__content-item" name="date" id="date"><label for="date">Waluta datowa</label></button></router-link>
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
if (!localStorage.data) {
  onMounted(async () => {
    await axios.get('https://api.apilayer.com/exchangerates_data/symbols', { headers: { apikey: process.env.VUE_APP_API_KEY } })
      .then(res => {
        store.state.data = res.data.symbols
        localStorage.data = JSON.stringify(res.data.symbols)
      })
  })
} else {
  store.state.data = JSON.parse(localStorage.data)
}

</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  display: grid;
  justify-content: center;
}
#app {
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
  }
}

</style>
