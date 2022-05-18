<template>
  <div class="pizza-special w-100 row my-1">
        <div class="position-relative col-6">
            <img class="img-fluid" src="../assets/img/h1-img-4.jpg" alt="">
            <div class="logo-pizza-special position-absolute top-50 start-50 translate-middle">
                <img class="w-75" src="../assets/img/h1-img-7n.png" alt="">
            </div>
        </div>
        <div class="col-6 position-relative">
            <div class="w-75 position-absolute top-50 start-50 translate-middle">
                <h2>Specials*</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="row" v-for="(item,index) in menu" :key="index">
                    <div class="col-1">
                        <span class="prezzo">{{item.prezzo}}</span>
                    </div>
                    <div class="col-11">
                        <span class="nome">{{item.nome.toUpperCase()}}</span>
                        <p>{{item.text}}</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'PizzaSpecial',
    props:{
        menu:Array
    }
}
</script>

<style lang="scss" scoped>
    @import '../style/vars.scss';

.prezzo{
    color: $main_red;
    margin-right: 3px;
}
p{
    font-size: 0.7em;
    color: $p_color;
}
</style>