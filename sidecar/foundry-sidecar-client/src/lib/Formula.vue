<script setup lang="ts">
defineProps<{ label?: string; formula: string }>();
</script>

<template>
  <span class="uuid-link">{{ formula  }} </span>
</template>

<style>
span.uuid-link {
  border: 1px solid #ccc;
  padding: 2px;
  border-radius: 4px;
}
</style>
