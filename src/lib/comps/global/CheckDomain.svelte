<script>
  import { lib } from "$lib/store";
  import {onMount} from 'svelte'
  
  function checkDomain() {
    window.location.hostname == "localhost"
      ? lib().update((app) => { app.pageSettings.devMode = true })
      : lib().update((app) => { app.pageSettings.devMode = false });
  }

  function init() {
    onMount(() => {
      checkDomain();
    });
  }

  init();
</script>