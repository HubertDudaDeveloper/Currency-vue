<template>
    <div class="selectdate">
        <label :for="prop.name">{{ prop.label }}</label>
        <input type="date" :name="prop.name" :id="prop.name" @blur="sendDate(prop.name, $event)">
    </div>
</template>
<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

const name = ref('SelectDate')
const props = defineProps({
  prop: Object,
  option: Object
})
const emit = defineEmits(['sendDate'])

const sendDate = (name, event) => {
  emit('sendDate', name, event.target.value)
}

</script>
<style lang="scss">

</style>
