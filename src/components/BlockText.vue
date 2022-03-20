<script setup lang="ts">
defineProps({
  title: String,
  text: String,
});
</script>
<template>
  <h1>{{ title }}</h1>
  <p>{{ text }}</p>
</template>
