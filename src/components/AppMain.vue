<template>
<section>
    <main-card :cards="cardSlider" type="svg"/>
    <div class="testimonials position-relative">
        <img class="img-fluid" src="../assets/img/h3-testimonials-bckgrnd.jpg" alt="">
        <phrases-slider :items="phrases"/>
    </div>
    <pizza-special :menu="pizzaSpecials"/>
    <div class="own-pizza">
        <div class="own-text">
            <span>go ahead and build your own pizza we won't judge!</span>
        </div>
    </div>
     <main-card :cards="peopleRow" type="image"/>
    
</section>
</template>

<script>
import {phrases,cardSlider,pizzaSpecials,peopleRow} from '../dati.js'
import MainCard from './MainCard.vue'
import PhrasesSlider from './PhrasesSlider.vue'
import PizzaSpecial from './PizzaSpecial.vue'
export default {
    name:'AppMain',
    components:{
        MainCard,
        PhrasesSlider,
        PizzaSpecial
    },
    data(){
        return{
            phrases:phrases,
            pizzaSpecials:pizzaSpecials,
            cardSlider:cardSlider, 
            peopleRow:peopleRow
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../style/vars.scss';
.own-pizza{
    background-image: url(../assets/img/h3-background-img.jpg);
    background-size: cover;
    padding: 10%;
    .own-text{
        color: white;
        text-transform: uppercase;
        font-size: 2em;
        font-weight: 500;
        letter-spacing: 1px;
        width: 30%;
        margin: 0 10%;
    }
}

</style>