<template>
<section>
    <main-card :cards="cardSlider" type="svg"/>
    <phrases-slider :items="phrases"/>
    <pizza-special :menu="pizzaSpecials"/>
    <div class="own-pizza">
        <div class="own-text">
            <span>go ahead and build your own pizza we won't judge!</span>
        </div>
    </div>
     <main-card :cards="peopleRow" type="image"/>
     <image-slider class="image-slider" :images="partnerRow"/>
     <div class="pizza-menu">
         <div class="title-menu">
             <span>choose your flavor</span>
             <h5>the best pizza menu in town</h5>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ex deserunt voluptas inventore!</p>
         </div>
         <image-slider :images="pizzeSlider" type="description"/>
     </div>
     <deals-component :deals="eventDate"/>
     <book-select/>
    
</section>
</template>

<script>
import {phrases,cardSlider,pizzaSpecials,peopleRow,partnerRow,pizzeSlider,eventDate} from '../dati.js'
import MainCard from './MainCard.vue'
import PhrasesSlider from './PhrasesSlider.vue'
import PizzaSpecial from './PizzaSpecial.vue'
import ImageSlider from './ImageSlider.vue'
import DealsComponent from './DealsComponent.vue'
import BookSelect from './BookSelect.vue'
export default {
    name:'AppMain',
    components:{
        MainCard,
        PhrasesSlider,
        PizzaSpecial,
        ImageSlider,
        DealsComponent,
        BookSelect
    },
    data(){
        return{
            phrases:phrases,
            pizzaSpecials:pizzaSpecials,
            cardSlider:cardSlider, 
            peopleRow:peopleRow,
            partnerRow:partnerRow,
            pizzeSlider:pizzeSlider,
            eventDate:eventDate,
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
.image-slider{
    background-color:#F7F7F1 ;
}
.pizza-menu{
    width: 100%;
    padding: 50px;
    .title-menu{
        width: 50%;
        text-align: center;
        margin: 0 auto;
        span{
            color: $main_red;
            text-transform: uppercase;
            font-size: 0.6em;
        }
        h5{
            text-transform: uppercase;
        }
        p{
            font-size: 0.7em;
            color:$p_color;
        }
    }
}

</style>