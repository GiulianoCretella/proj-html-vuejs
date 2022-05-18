<template>
  <div>
    <header-nav :headerLeft="headerStart" :headerRight="cartAndSearch"/>
    <header-jumbo :cards="jumboSlider"/>
  </div>
</template>

<script>
import{headerStart,cartAndSearch,jumboSlider} from '../dati.js'
import HeaderNav from './HeaderNav.vue'
import HeaderJumbo from './HeaderJumbo.vue'

export default {
    name:'AppHeader',
    components:{
        HeaderNav,
        HeaderJumbo,
    },
    data(){
        return{
            headerStart:headerStart,
            cartAndSearch:cartAndSearch,
            jumboSlider:jumboSlider,
        }
    }
}
</script>

<style lang="scss" scoped>


</style>