<script>
  import DevMode from '$lib/comps/global/DevMode.svelte';
  import CheckDomain from '$lib/comps/global/CheckDomain.svelte'
  import { onMount } from 'svelte';
  import { lib } from "$lib/store";

  let app;

  // Example: Subscribing to the store to initialize and update the `app` variable.
  lib().sub((i) => {
    app = i;
  });

</script>

<template lang="pug">
  CheckDomain
  DevMode(page="{app.pageSettings.currentPage}")
    slot

</template>
