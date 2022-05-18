<template>
<div class="jumbo py-5 position-relative w-100 d-flex justify-content-center align-items-center">
    <div @click="slidePrev" class="prev">prev</div>
    <div @click="slideNext" class="next">next</div>
    <div class="position-relative text-center" v-for="(item,index) in cards" :key="index">
        <img class="w-75" v-if="indexActive === index" :src="require('../assets/' + item.background)" alt="">
        <div class="position-absolute top-50 start-50 translate-middle">
            <img class="w-75" v-if="indexActive === index" :src="require('../assets/' + item.main)"  alt="">
        </div>
    </div>
</div>

</template>

<script>
export default {
    name:'HeaderJumbo',
    props:{
        cards:Array
    },
    data(){
        return{
            indexActive:0
        }
    },
    methods:{
    
    slidePrev(){
        if(this.indexActive === 0){
            this.indexActive = this.cards.length -1;
        }else{
            this.indexActive -= 1
        }
    },
    slideNext(){
        if(this.indexActive === this.cards.length -1){
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
.jumbo{
    height: 400px;
    .prev, .next {
    text-align: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: white;
    position: absolute;
    cursor: pointer;
    z-index: 999;
    line-height: 25px;
    text-transform: uppercase;
    padding: 10px;
    font-size: 1em;
    letter-spacing: 1.5px;
    color:$main_red;

}
.next{
    transform: rotate(270deg);
    right: -60px;
    overflow: hidden;
}
.prev{
    left: -60px;
    overflow: hidden;
    transform: rotate(90deg);
}
}
 
</style>