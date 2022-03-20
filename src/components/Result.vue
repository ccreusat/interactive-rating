<script setup lang="ts">
import CardContainer from "@/components/CardContainer.vue";
import IllustrationComponent from "@/components/IllustrationComponent.vue";
import BlockText from "@/components/BlockText.vue";

defineProps({
  choice: Number,
});
</script>

<template>
  <CardContainer class="align-items-center">
    <IllustrationComponent />

    <span className="badge">
      You selected <span>{{ choice }}</span> out of 5
    </span>

    <BlockText
      title="Thank you"
      text="We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!"
    />
  </CardContainer>
</template>
