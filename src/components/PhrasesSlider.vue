<template>
<div class="testimonials">
    <div class="slider position-relative w-100 d-flex justify-content-center align-items-center"
        @mouseover="stopScroll"
        @mouseleave="scroll">
        <div @click="slidePrev" class="prev">prev</div>
        <div @click="slideNext" class="next">next</div>
        <div class="phrase position-relative text-center" v-for="(item,index) in items" :key="index">
            <div v-if="index===indexActive">
                <span>{{item.main.toUpperCase()}}</span>
                <p>{{item.sub.toUpperCase()}}</p>
            </div>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    name:'PhrasesSlider',
    props:{
        items:Array
    },
    data(){
        return{
            indexActive:0,
            intervallo:null
        }
    },
    methods:{
    
        slidePrev(){
            if(this.indexActive === 0){
                this.indexActive = this.items.length -1;
            }else{
                this.indexActive -= 1
            }
        },
        slideNext(){
            if(this.indexActive === this.items.length -1){
                this.indexActive = 0;
            }else{
                this.indexActive += 1
            }
        },
        scroll(){
                this.intervallo= setInterval(() => {
                    this.slideNext()
                },1000)
            },
        stopScroll(){
                clearInterval(this.intervallo);
                this.intervallo = null;
        },
    },
    mounted(){
       this.scroll();
    }
}
</script>

<style lang="scss" scoped>
@import '../style/vars.scss';
.testimonials{
    background-image: url(../assets/img/h3-testimonials-bckgrnd.jpg);
    background-size: contain;
}
.slider{
    height: 400px;
}
 .prev, .next {
    text-align: center;
    width: 100px;
    height: 100px;
    margin: 10px 0;
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
    transform: rotate(90deg);

}
span{
    font-size: 1.2em;
    font-weight: 500;
}
p{
    padding-top: 10px;
    font-size: 0.7em;
    color: $main_red;
}



</style>