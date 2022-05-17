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
@import './style/general.scss';

#app{
  font-family: 'Oswald', sans-serif;
  header{
    background-image: url(./assets/img/bj_jumbo.jpg);
    background-size:100%;
    height: 500px
    // background-color: #fff;
    // background-image:radial-gradient(#d1d4d8 1px,transparent 1px),radial-gradient(#d1d4d8 1px,transparent 1px);
    // background-size: 12px 12px;
  }
}
</style>
