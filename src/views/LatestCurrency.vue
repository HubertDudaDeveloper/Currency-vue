<template>
    <div>
        <SelectOption :prop="base" :option="store.state.data" @SelectedValue="saveBase"/>
        <SelectOption :prop="symbols" :option="store.state.data" @SelectedValue="saveSymbols"/>
        <button v-on:click="latestCurrency">Klik</button>
        <p id="result"></p>
        </div>
</template>
<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
import SelectOption from '../components/SelectOption.vue'
import store from '@/store/index'
import axios from 'axios'

const name = ref('fluctuation')
const info = ref({})
const base = ref({
  label: 'Podstawa',
  placeholder: 'Waluta',
  name: 'SelectConvertBase'
})

const symbols = ref({
  label: 'Waluta',
  placeholder: 'Waluta',
  name: 'SelectConvertBase'
})

const saveSymbols = (value) => {
  store.state.latest.symbols = value
}

const saveBase = (value) => {
  store.state.latest.base = value
}

const latestCurrency = () => {
  const fullUrl = 'https://api.apilayer.com/exchangerates_data/latest?symbols=' + store.state.latest.symbols + '&base=' + store.state.latest.base
  axios.get(fullUrl, { headers: { apikey: process.env.VUE_APP_API_KEY } })
    .then((res) => {
      const key = store.state.latest.symbols
      info.value = res.data.rates[key]
      document.getElementById('result').innerText = res.data.rates[key]
      console.log(res.data.rates[key])
    })
}

</script>
<style lang="scss">

</style>
