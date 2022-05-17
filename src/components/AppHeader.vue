<template>
<section class="container">
    <div class="row align-items-center py-2">
        <button class="col-2 col btn tex-center">order online</button>
        <div class="col text-center" v-for="item in headerStart" :key="item.id">
            <img class="img-fluid" v-if="item.image" :src="require('../assets/' + item.image)" alt="">
            {{item.nome}}
        </div>
    </div>
    <div class="row text-center py-5">
        <div class="col-12 w-100 position-relative" v-for="(item,index) in jumboSlider" :key="index">
            <div v-if="item.active === true">
                <img class="w-50" :src="require('../assets/' + item.background)" alt="">
                <div class="image_over position-absolute top-50 start-50 translate-middle translate-center">
                    <img class="w-50" :src="require('../assets/' + item.image)" alt="">
                </div>
            </div>
        </div>
    </div>

</section>
</template>

<script>
import {headerStart, jumboSlider} from '../dati.js'
export default {
    name:'AppHeader',
    components:{
    },
    data(){
        return{
            headerStart:headerStart,
            jumboSlider:jumboSlider,
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../style/vars.scss';
section{
    width:80%;
    .col{
        text-transform: uppercase;
        color: white;
        font-size: 0.8em;
        img{
            min-width: 150px
        }

    }
    button{
        background-color: $main_red;
    }
}


</style>