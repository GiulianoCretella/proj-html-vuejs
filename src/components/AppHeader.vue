<template>
<section class="container">
    <div class="row align-items-center py-2">
        <button class="col-2 col btn tex-center">order online</button>
        <div class="col text-center" v-for="item in headerStart" :key="item.id">
            <img class="img-fluid" v-if="item.image" :src="require('../assets/' + item.image)" alt="">
            {{item.nome}}
        </div>
    </div>
    <div class="row text-center py-5 position-relative jumbo">
        <div class="col-12 w-100 position-relative" v-for="(item,index) in jumboSlider" :key="index" >
            <div v-if="indexActive === index">
                <img class="w-50" :src="require('../assets/' + item.background)" alt="">
                <div class="position-absolute top-50 start-50 translate-middle ">
                    <img class="w-50" :src="require('../assets/' + item.image)" alt="">
                </div>
            </div>
        </div>
        <div @click="slidePrev" class="prev">prev</div>
        <div @click="slideNext" class="next">next</div>
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
            indexActive : 0,
        }
    },
    methods:{
        
         slidePrev(){
            if(this.indexActive === 0){
                this.indexActive = this.jumboSlider.length -1;
            }else{
                this.indexActive -= 1
            }
        },
        slideNext(){
            if(this.indexActive === this.jumboSlider.length -1){
               this.indexActive = 0;
            }else{
                this.indexActive += 1
            }
        },
    }
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
    .prev, .next {
    width: 50px;
    height: 50px;
    margin: 10px 0;
    border-radius: 50%;
    background: white;
    position: absolute;
    cursor: pointer;
    z-index: 999;
    line-height: 25px;
    text-transform: uppercase;
    padding: 1px;
    font-size: 0.8em;
    letter-spacing: 1.5px;
    color:$main_red;

}
.next{
    transform: rotate(270deg);
    right: -35px;
    overflow: hidden;
}
.prev{
    left: -35px;
    transform: rotate(90deg);

}
}
.active{
    display: block;
}


</style>