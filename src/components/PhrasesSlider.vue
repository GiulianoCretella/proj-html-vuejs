<template>
  <div class="slider text-center position-absolute top-50 w-100 translate-middle-y ">
      <div @click="slidePrev" class="prev">prev</div>
        <div @click="slideNext" class="next">next</div>
        <div v-for="(item,index) in items" :key="index">
            <div v-if="index===indexActive">
                <span class="w-75">{{item.main.toUpperCase()}}</span>
                <p>{{item.sub.toUpperCase()}}</p>
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
            indexActive:0
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
    }
}
</script>

<style lang="scss" scoped>
@import '../style/vars.scss';
.slider{
    padding: 150px;
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
    right: -25px;
    overflow: hidden;
}
.prev{
    left: -25px;
    transform: rotate(90deg);

}
.active{
    display: block;
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