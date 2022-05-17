<template>
<section class="container">
    <div class="row align-items-center py-2">
        <button class="col-2 col btn tex-center">order online</button>
        <div class="col text-center" v-for="item in headerStart" :key="item.id">
            <img class="img-fluid" v-if="item.image" :src="require('../assets/' + item.image)" alt="">
            {{item.nome}}
        </div>
    </div>
    <app-hero :heroArr="jumboSlider"/>
</section>
</template>

<script>
import {headerStart,jumboSlider} from '../dati.js'
import AppHero from './AppHero.vue'
export default {
    name:'AppHeader',
    components:{
        AppHero
    },
    data(){
        return{
            headerStart:headerStart,
            jumboSlider:jumboSlider
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../style/vars.scss';
section{
    width:80%;
    padding: 20px;
    overflow-x: hidden;
    .col{
        text-transform: uppercase;
        color: white;
        font-size: 0.8em;
        letter-spacing: 3px;
        img{
            min-width: 150px
        }

    }
    button{
        background-color: $main_red;
    }
}

</style>