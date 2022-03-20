<script setup lang="ts">
import IconStar from "@/components/IconStar.vue";
import BlockText from "@/components/BlockText.vue";
import CardContainer from "@/components/CardContainer.vue";

defineProps({
  choice: Number,
  error: Boolean,
  updateValue: Function,
});

const VALUES = [1, 2, 3, 4, 5];
</script>

<template>
  <CardContainer v-if="!isRated">
    <IconStar />
    <BlockText
      title="How did we do?"
      text="Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!"
    />

    <ol>
      <li v-for="value in VALUES" :key="value">
        <button
          type="button"
          aria-label="Choose a rate"
          @click="updateValue(value)"
          :class="{ selected: value === choice }"
        >
          {{ value }}
        </button>
      </li>
    </ol>

    <p v-if="error" class="error">You have to make a choice!</p>

    <button type="submit" aria-label="Send your rate">Submit</button>
  </CardContainer>
</template>
