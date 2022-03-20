<script setup lang="ts">
  // components imports
  import Rating from "./lib/Rating.svelte";
  import Result from "./lib/Result.svelte";
  // declarations
  let isRated: boolean = false;
  let choice: number = 0;
  let error: boolean = false;

  $: if (choice) error = false;
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!choice) {
      error = true;
    } else {
      isRated = true;
    }
  };
  
  const updateValue = selectedValue => (choice = selectedValue);
  
</script>
  
<form class="form" on:submit={handleSubmit}>
  {#if !isRated }
  <Rating choice={choice} error={error} updateValue={updateValue} />
  {:else}
  <Result choice={choice} />
  {/if}
</form>
  
<style>
@import "./assets/index.css";
</style>
  