<script lang="ts">
  import IconStar from "./IconStar.svelte";
  import BlockText from "./BlockText.svelte";
  import CardContainer from "./CardContainer.svelte";

  export let choice: number;
  export let error: boolean;
  export let updateValue;

  const VALUES = [1, 2, 3, 4, 5];
</script>

<CardContainer>
  <IconStar />
  <BlockText
    title="How did we do?"
    text="Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!"
  />

  <ol>
    {#each VALUES as value}
      <li>
        <button
          type="button"
          aria-label="Choose a rate"
          on:click={updateValue(value)}
          class:selected="{value === choice}"
        >
        { value }
        </button>
      </li>
    {/each}
  </ol>

  {#if error}<p class="error">You have to make a choice!</p>{/if}

  <button type="submit" aria-label="Send your rate">Submit</button>
</CardContainer>
