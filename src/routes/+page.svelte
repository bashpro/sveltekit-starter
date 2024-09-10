<script>                        
	import Template from '$lib/comps/global/Template.svelte'
	import { lib } from "$lib/store";

  // Example: Subscribing to the store to initialize and update the `app` variable.
  let app;

  lib().sub((i) => {
    app = i;
  });

	lib().currentPage('homePage')

</script>

<template lang="pug">
	Template
	
</template>

<style>
	:global(body){
		margin: 0px;
	}
</style>

