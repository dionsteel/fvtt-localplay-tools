<script setup lang="ts">
defineProps<{ label?: string; target?: string; linkType?: string }>();
</script>

<template>
  <span class="foundry-link">{{ label ? label : linkType + ": " + target }} </span>
</template>

<style>
span.uuid-link {
  border: 1px solid #ccc;
  padding: 2px;
  border-radius: 4px;
}
</style>
