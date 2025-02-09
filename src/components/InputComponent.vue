<script setup>
import { defineProps, defineModel } from 'vue'

const model = defineModel()

defineProps({
  placeholder: String,
  modelValue: String,
  type: String,
})
</script>

<template>
  <div class="input-main">
    <label v-if="$slots.label">
      <slot name="label" />
    </label>
    <div class="input-wrapper">
      <span v-if="$slots.icon">
        <slot name="icon" />
      </span>
      <input :placeholder="placeholder" :type="type" v-model="model" />
    </div>
    <span v-if="$slots.error">
      <slot name="error" />
    </span>
  </div>
</template>

<style scoped>
input {
  box-sizing: border-box;
  border: none;
  outline: none;
  width: 300px;
  max-width: 300px;
}

label {
  font-size: 12px;
}

.input-main {
  margin-bottom: 16px;
}

.input-wrapper {
  border: 1px solid #2a2e34;
  padding: 5px;
  margin-top: 4px;
  border-radius: 5px;
  display: flex;
  gap: 5px;
}
</style>
