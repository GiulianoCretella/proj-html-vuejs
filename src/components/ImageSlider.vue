<template>
  <div>
      <div class="row justify-content-center">
          <div class="col-2 py-4" v-for="(item,index) in images" :key="index">
              <img class="img-fluid w-100" :src="require('../assets/' + item.image)" alt="">
              <div class="description" v-if="type">
                  <span class="nome">{{item.nome}}</span>
                  <p class="prezzo">{{item.prezzo}}</p>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
export default {
    name:'ImageSlider',
    props:{
        images:Array,
        type:String
    }
}
</script>

<style lang="scss" scoped>
@import '../style/vars.scss';

.description{
    text-align: center;
    .nome{
        text-transform: uppercase;
        font-size: 0.8em;
        color: $main_gold;
    }
    .prezzo{
        color: $main_red;
        font-size: 0.8em;
    }
   
}

</style>