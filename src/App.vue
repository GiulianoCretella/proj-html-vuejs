<template>
  <div id="app">
    <div class="related">
      <img src="./assets/svg/svg-10.svg" alt="">
      <span>RELATED</span>
    </div>
     <div class="cart">
      <img src="./assets/svg/svg-9.svg" alt="">
      <span>BUY NOW</span>
    </div>
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
    AppMain,
    AppFooter,
    AppHeader,
  
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
  letter-spacing: 2px;
  overflow-x: hidden;
  .related, .cart{
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10000;
    width:120px;
    position: fixed;
    right: -70px;
    padding: 10px;
    transition: all 0.4s linear;
    img{
      width: 30px;
      padding-right: 4px
    };
    &:hover{
      right: 0;
    }
  }
  .related{
    background-color:#EE2852 ;
    top: 60%;
    span{
      color:white;
      font-size:0.8em
    }
  }
  .cart{
    background-color:white ;
    top: 70%;
    box-shadow: 5px 10px 18px #888888;
    span{
      color:#EE2852;
      font-size:0.8em
    }
  }
  header{
    background-image: url(./assets/img/bj_jumbo.jpg);
    background-size:100%;
  }
  footer{
    height: 30vh;
  }
}
</style>
