import { writable } from "svelte/store"

export let app = writable(
  {
    pageSettings: {
      currentPage: 'homePage',
      devMode: false,
    },
    homePage: {
      published: true
    }
  }
)

let theApp

lib().sub((i) => {
  theApp = i
})

export function lib() {
  let _ = {
    sub: (cb) => {
      app.subscribe((i) => { cb(i) })
    },
    update: (cb) => {
      app.update((i) => {
        cb(i)
        return i
      })
      app = app
    },
    currentPage: (page) => {
      app.update((i) => {
        i.pageSettings.currentPage = page;
        return i;
      });
    },
    log: () => {
      console.log(theApp)
    }
  }
  return _
}

