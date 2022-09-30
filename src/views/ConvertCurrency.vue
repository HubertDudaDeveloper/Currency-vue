<template>
  <div class="convert">
    <SelectOption :prop="base" :option="store.state.data" @SelectedValue="postSelectBase"/>
    <SelectOption :prop="to" :option="store.state.data" @SelectedValue="postSelectTo"/>
    <label for="amount">Kwota waluty:</label>
    <input id="amount" placeholder="Wprowadź kwotę" v-model="store.state.convert.amount" @blur="convert">
    <div>
    <h3>{{ store.state.base }} {{ store.state.convert.amount }} = {{ store.state.convert.to }}
      <strong id="result"></strong>
    </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
import SelectOption from '../components/SelectOption.vue'
import store from '@/store/index'
import axios from 'axios'

const name = ref('ConvertCurrency')

const base = ref({
  label: 'Wybierz walute do konwertowania',
  placeholder: 'Waluta',
  name: 'SelectConvertBase'
})

const to = ref({
  label: 'Wybierz walute na jaką chcesz konwertować',
  placeholder: 'Waluta',
  name: 'SelectConvertTo'
})

const postSelectBase = (value) => {
  store.state.base = value
}

const postSelectTo = (value) => {
  store.state.convert.to = value
}
const info = {
  value: null
}

const convert = () => {
  const fullUrl = 'https://api.apilayer.com/exchangerates_data/convert?to=' + store.state.convert.to + '&from=' + store.state.base + '&amount=' + store.state.convert.amount
  axios.get(fullUrl, { headers: { apikey: process.env.VUE_APP_API_KEY } })
    .then(res => {
      info.value = res.data.result
      document.getElementById('result').innerText = res.data.result
    })
}
</script>
<style lang="scss">
  .convert {
    display: flex;
    flex-direction: column;
  }
</style>
