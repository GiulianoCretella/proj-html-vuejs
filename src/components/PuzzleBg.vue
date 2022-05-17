<template>
  <section class="container-fluid">
      <section class="row" v-for="(item,index) in 3" :key="index">
          <div class="col-1"></div>
          <div class="col-10"></div>
          <div class="col-1"></div>
      </section>
  </section>
</template>

<script>
export default {
    name:'PuzzleBg'
}
</script>

<style lang="scss" scoped>
div{
    background-image: url(../assets/img/h3-background-img.jpg);
    background-size: 68%;
    background-attachment:fixed;
    height: 100px;

}
</style>