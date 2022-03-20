<script setup lang="ts">
// vue imports
import { ref, watch } from "vue";
// components imports
import Rating from "@/components/Rating.vue";
import Result from "@/components/Result.vue";
// declarations
let isRated: boolean = ref(false);
let choice: number = ref(0);
let error: boolean = ref(false);

const handleSubmit = e => {
  e.preventDefault();
  if (!choice.value) {
    error.value = true;
  } else {
    isRated.value = true;
  }
};

const updateValue = selectedValue => (choice.value = selectedValue);

watch(choice, () => {
  if (choice.value) error.value = false;
});
</script>

<template>
  <form class="form" @submit="handleSubmit">
    <Rating
      v-if="!isRated"
      :choice="choice"
      :error="error"
      :updateValue="updateValue"
    />
    <Result v-else :choice="choice" />
  </form>
</template>

<style>
@import "./assets/index.css";
</style>
