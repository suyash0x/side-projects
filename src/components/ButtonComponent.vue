<script setup>
import { defineProps } from 'vue'

const { label, variant = 'primary' } = defineProps({
  label: String,
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value),
  },
})
</script>

<template>
  <button :class="['btn', `btn-${variant}`]">
    {{ label }}
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.btn-primary {
  background-color: #41b883;
  color: white;
}

.btn-primary:hover {
  background-color: #3eaf7c;
}

.btn-primary:active {
  background-color: #3aa876;
}

.btn-secondary {
  background-color: #34495e;
  color: white;
}

.btn-secondary:hover {
  background-color: #2c3e50;
}

.btn-secondary:active {
  background-color: #243342;
}

/* Disabled state for both variants */
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
