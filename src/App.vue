<template>
  <div id="app">
    <header>
      <app-header/>
    </header>
    <main>
      <app-main/>
    </main>
    <footer>
      <app-footer/>
    </footer>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data(){
    return {
    }
  }
}
</script>

<style lang="scss">

</style>
