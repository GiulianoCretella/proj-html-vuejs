<template>
  <div class="my_container container">
      <div class="row align-items-center justify-content-space-between">
          <div class="col-2">
              <button class="btn">order online</button>
          </div>
          <div class="col-8 d-flex justify-content-center align-items-center">
              <img class="icon" src="../assets/svg/svg-0.svg" alt="">
              <div class="row px-3" v-for="(item,index) in headerLeft" :key="index">
                  <div class="col">
                      <img v-if="item.active === true" class="img-fluid" :src="require('../assets/' + item.image)" alt="">
                      <span>{{item.nome}}</span>
                  </div> 
              </div>
          </div>
          <div class="col-2 d-flex">
              <img class="icon" src="../assets/svg/svg-1.svg" alt="">
              <div class="row px-2" v-for="(item,index) in headerRight" :key="index">
                  <div class="col">
                      <img v-if="item.active === true" class="img-fluid" :src="require('../assets/' + item.image)" alt="">
                      <span>{{item.nome}}</span>
                  </div> 
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'HeaderNav',
    props:{
        headerLeft:Array,
        headerRight:Array
    }
}
</script>

<style lang="scss" scoped>
@import '../style/vars.scss';
.my_container{
    padding: 10px;
    width: 80%;
    .icon{
        width: 30px;
        filter: invert(1);
    }
    button{
        background-color: $main_red;
        color: white;
        text-transform: uppercase;
        font-size: 0.8em;

    };
    img{
        max-width:150px;
    };
    span{
        color: white;
        text-transform: uppercase;
        font-size: 0.8em;

    }
   
}

</style>