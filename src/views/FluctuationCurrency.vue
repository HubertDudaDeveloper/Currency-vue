<template>
  <div class="fluctuation">
    <h1>fluktuacja waluty</h1>
    <SelectOption :prop="symbols" :option="store.state.data" @SelectedValue="saveSymbols"/>
    <SelectDate :prop="startDate" @sendDate="saveDate" />
    <SelectDate :prop="endDate" @sendDate="saveDate" />
    <button @click="fluctuation">Porównaj!</button>
    <h3 id="result"></h3>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import store from '@/store/index'
import SelectDate from '@/components/SelectDate.vue'
import SelectOption from '@/components/SelectOption.vue'
import axios from 'axios'

const name = ref('fluctuation')
const info = ref({})
const symbols = ref({
  label: 'Wybierz walute do porównania wartości',
  placeholder: 'Waluta',
  name: 'SelectConvertBase'
})

const startDate = {
  label: 'Data od',
  name: 'startdate'
}

const endDate = {
  label: 'Data do',
  name: 'enddate'
}

const saveSymbols = (value) => {
  store.state.fluctuation.symbols = value
}

const saveDate = (name, value) => {
  console.log(name)
  switch (name) {
    case 'startdate':
      store.state.fluctuation.start = value
      break
    case 'enddate':
      store.state.fluctuation.end = value
      break
  }
}

const fluctuation = () => {
  const fullUrl = 'https://api.apilayer.com/exchangerates_data/fluctuation?start_date=' + store.state.fluctuation.start + '&end_date=' + store.state.fluctuation.end
  axios.get(fullUrl, { headers: { apikey: process.env.VUE_APP_API_KEY } })
    .then((res) => {
      const key = store.state.fluctuation.symbols
      info.value = res.data.rates[key]
      document.getElementById('result').innerText = res.data.rates[key].change
    })
}

</script>
<style lang="scss">

</style>
