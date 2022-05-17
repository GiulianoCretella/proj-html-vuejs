<template>
<section class="container">
<div class="row align-items-center py-2">
    <div class="col-2 debug align-items-center">
        <div>ORDER ONLINE</div>
    </div>
    <div class="col-8 debug d-flex text-center align-items-center">
        <div class="debug w-100" v-for="(item,index) in headerStart" :key="index">
            <img class="img-fluid" v-if="item.image" :src="require('../assets/' + item.image)" alt="">
            {{item.nome}}</div>
    </div>
    <div class="col-2 debug d-flex text-end">
        <div class="w-100" v-for="item in headerEnd" :key="item">{{item.nome}}</div>
    </div>
</div>
</section>
</template>

<script>
import dati from '../dati.json'
export default {
    name:'AppHeader',
    components:{
    },
    data(){
        return{
            headerStart: dati.headerStart,
            headerEnd: dati.headerEnd
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../style/vars.scss';
div, button{
    color: white;
    text-transform: uppercase;
}
.debug{
    border: 1px solid white;
    height: 30px;
}
</style>