<template>
   <div class="row text-center py-5 position-relative jumbo">
        <div class="col-12 w-100 position-relative" v-for="(item,index) in heroArr" :key="index" >
            <div v-if="indexActive === index">
                <img class="w-50" :src="require('../assets/' + item.background)" alt="">
                <div class="position-absolute top-50 start-50 translate-middle ">
                    <img class="w-50" :src="require('../assets/' + item.main)" alt="">
                </div>
            </div>
        </div>
        <div @click="slidePrev" class="prev">prev</div>
        <div @click="slideNext" class="next">next</div>
    </div>
</template>

<script>
export default {
    name:'AppHero',
    data(){
        return{
            indexActive : 0,
        }
    },
    props:{
    heroArr:Array
    },
    methods:{
        
        slidePrev(){
            if(this.indexActive === 0){
                this.indexActive = this.heroArr.length -1;
            }else{
                this.indexActive -= 1
            }
        },
        slideNext(){
            if(this.indexActive === this.heroArr.length -1){
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
.active{
    display: block;
}
</style>