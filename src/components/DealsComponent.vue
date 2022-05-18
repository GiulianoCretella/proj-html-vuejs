<template>
  <div class="w-100 row my-1 g-0">
        <div class="col-6 position-relative deals-side">
            <div class="w-75 position-absolute top-50 start-50 translate-middle">
                <p>MADE WITH LOVE</p>
                <h2>delish pizza deals</h2>
                <div class="row deals" v-for="(item,index) in deals" :key="index">
                    <div class="col-1 g-0">
                        <span class="giorno text-center">{{item.day}}</span>
                        <div class="mese">{{item.month.toUpperCase()}}</div>
                    </div>
                    <div class="col-11">
                        <span class="nome">{{item.event.toUpperCase()}}</span>
                        <p><i class="fa-solid fa-location-dot"></i> {{item.address}}</p> 
                    </div>
                </div>
            </div>
        </div>
        <div class="position-relative col-6">
            <img class="img-fluid" src="../assets/img/h3-img-5a.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'DealsComponent',
    props:{
        deals:Array
    }
}
</script>

<style lang="scss" scoped>
@import '../style/vars.scss';
.deals-side{
    background-image: url(../assets/img/bj_jumbo.jpg);
    background-size:100%;
    p{
        color: $main_red;
        font-size: 0.7em;
    }
    h2{
        text-transform: uppercase;
        color: white;

    }
    .deals:last-child{
        border-bottom: none;
    }
    .deals{
        padding: 10px;
        border-bottom: 1px dotted $main_gold ;
        .nome{
            color: white;
        }
        .giorno{
            font-size: 1.5em;
            color: $main_red;
            margin-right: 3px;
            font-weight: 600;
            margin-bottom: 0;
        }
        .mese{
            margin-top: 0;
            color: white;
            font-weight: 400;
        }
    }
    
}

</style>