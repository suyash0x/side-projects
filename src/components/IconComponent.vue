<script setup>
import { defineProps } from 'vue'

defineProps({
  icon: String,
})
</script>

<template>
  <i :class="icon" style="font-size: 12px; color: gray"></i>
</template>
