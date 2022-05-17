<template>
<section>
    <main-card/>
    <div class="testimonials position-relative">
        <img class="img-fluid" src="../assets/img/h3-testimonials-bckgrnd.jpg" alt="">
        <phrases-slider :items="phrases"/>
    </div>
</section>
</template>

<script>
import {phrases} from '../dati.js'
import MainCard from './MainCard.vue'
import PhrasesSlider from './PhrasesSlider.vue'
export default {
    name:'AppMain',
    components:{
        MainCard,
        PhrasesSlider,
    },
    data(){
        return{
            phrases:phrases
        }
    }
}
</script>

<style lang="scss">

</style>