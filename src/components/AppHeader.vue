<template>
<section class="container">
    <div class="row align-items-center">
        <div class="col button tex-center">ONLINE ORDER</div>
        <div class="col text-center" v-for="item in headerStart" :key="item.id">
            <img class="img-fluid" v-if="item.image" :src="require('../assets/' + item.image)" alt="">
            {{item.nome}}
        </div>
        <div class="col text-end" v-for="item in headerEnd" :key="item.id">
            <img class="img-fluid" v-if="item.image" :src="require('../assets/' + item.image)" alt="">
            {{item.nome}}
        </div>
    </div>

</section>
</template>

<script>
import {headerStart,headerEnd} from '../dati.js'
export default {
    name:'AppHeader',
    components:{
    },
    data(){
        return{
            headerStart:headerStart,
            headerEnd: headerEnd
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../style/vars.scss';
.col{
    text-transform: uppercase;
    color: white;

}
.button{
    background-color: $main_red;
    line-height: 2em;
}

</style>