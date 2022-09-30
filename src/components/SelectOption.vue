<template>
    <div class="selectoption">
      <label :for="prop.name">{{ prop.label }}</label>
      <select class="selectoption__item" :name="prop.name" :id="prop.name" @blur="SelectedOption($event)">
        <option value="" disabled selected>{{ prop.placeholder }}</option>
        <option v-for="(item, index) in option" :key="index" :value="index">{{ index }}, {{ item }}</option>
      </select>
    </div>
</template>
<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { ref, defineProps, defineEmits } from 'vue'

const name = ref('SelectOption')
const props = defineProps({
  prop: Object,
  option: Object
})
const comprop = computed(() => props.prop)
const emit = defineEmits(['SelectedValue'])
function SelectedOption (event) {
  emit('SelectedValue', event.target.value)
}
</script>
<style lang="scss">
.selectoption {
  display: flex;
  flex-direction: column;
}
</style>
