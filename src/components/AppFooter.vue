<template>
<section class="row g-0">
<footer-lists class="col-12 col-lg-6 list-side" :firstList="restaurantAddress" :secondList="timeTables"/>
<div class="col-12 col-lg-6 img_container h-100">
    <img class="img-fluid h-100" src="../assets/img/footer-img-1.jpg" alt="">
</div>
</section>
</template>

<script>
import {restaurantAddress,timeTables} from '../dati.js'
import FooterLists from './FooterLists.vue'

export default {
    name:'AppFooter',
    components:{
        FooterLists
    },
    data(){
        return{
            restaurantAddress:restaurantAddress,
            timeTables:timeTables
        }
    }
}
</script>
<style lang="scss" scoped>
.list-side{
    background-image: url(../assets/img/bj_jumbo.jpg);
}
@media screen and (max-width:995px) {
    .img_container{
        display: none;
    }
}
</style>