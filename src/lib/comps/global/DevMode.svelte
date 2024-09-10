<script>
  import { lib } from "$lib/store";

  let app;

  lib().sub((i) => {
    app = i;
  });

  export let page = ""

</script>

<template lang="pug">
  div()
    +if('app.pageSettings.devMode')
      div(class=" flex w-full  z-[999999] fixed bottom-0 left-0 flex-wrap")
        div(class="flex-grow flex min-w-[300px] ")
          p(class="text-[var(--background)] bg-[var(--secondary)] p-1 px-3 rounded") You're in DevMode

        div(class="flex-1 flex min-w-[300px] justify-end")
          p(class="text-[var(--background)] bg-[var(--secondary)] p-1 px-3 rounded") Current Page status: {app[page].published ? 'Published' : 'Unpublished'}
        

    +if('app[page].published || app.pageSettings.devMode')
      slot
	
</template>