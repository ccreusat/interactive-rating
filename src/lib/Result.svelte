<script lang="ts">
import CardContainer from "./CardContainer.svelte";
import IllustrationComponent from "./IllustrationComponent.svelte";
import BlockText from "./BlockText.svelte";

export let choice: number;
</script>

<!-- class="align-items-center" -->
<CardContainer class="align-items-center">
  <IllustrationComponent />

  <span class="badge">
    You selected <span>{ choice }</span> out of 5
  </span>

  <BlockText
    title="Thank you"
    text="We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!"
  />
</CardContainer>