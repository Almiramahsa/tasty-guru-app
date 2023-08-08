<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  href: String
})
</script>

<template>
  <a
    :href="props.href"
    target="_blank"
    class="px-4 py-2 rounded-xl font-poppins text-sm text-black bg-yellowCustom hover:bg-yellow-500 transition-colors"
  >
    <slot>YouTube</slot>
  </a>
</template>
