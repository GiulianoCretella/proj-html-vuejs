<template>
<div>
    <div class="nav-query container-fluid">
        <div class="row p-3 align-items-center justify-content-between">
            <div class="col-6">
                <img class="w-25" src="../assets/img/mobile.png" alt="">
            </div>
            <div class="col-6 d-flex justify-content-end align-items-baseline">
                <div class="carrello px-2">
                    <img src="../assets/svg/svg-1.svg" alt="">
                </div>
                <div class="drop-menu px-2">
                     <img src="../assets/svg/svg-2.svg" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class=" my_container container">
      <div class="row align-items-center justify-content-space-between">
          <div class="col-12 col-lg-2 text-center py-3">
              <button class="btn">order online</button>
          </div>
          <div class="col-12 col-lg-8 d-flex justify-content-center align-items-center">
              <img class="icon" src="../assets/svg/svg-0.svg" alt="">
                <div class="row px-3" v-for="(item,index) in headerLeft" :key="index">
                  <div class="col">
                      <img v-if="item.active === true" class="img-fluid" :src="require('../assets/' + item.image)" alt="">
                      <span>{{item.nome}}</span>
                  </div> 
                </div>
          </div>
          <div class="col-12 col-lg-2 d-flex justify-content-center py-2">
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
.nav-query{
    width: 100%;
    background-color: white;
}
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
        font-size:   0.8em;
        padding: 10px 20px;
        border-radius: 0;
        transition: all 0,4s ease-in;
        &:hover{
            background-color:#ba371a 
        }
    };
    img{
        max-width:150px;
    };
    span{
        color: white;
        text-transform: uppercase;
        font-size: 0.8em;
        cursor: pointer;

    }
   
}
@media screen and (max-width: 991px) {
    button{
        display: none;
    }
    
}
@media screen and (max-width:779px) {
    .my_container{
        display: none;
    }
}
@media screen and (min-width:779px) {
    .nav-query{
        display: none;
    }
}
</style>