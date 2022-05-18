<template>
  <section class="container">
      <div class="row">
          <ul class="col-4 p-0">
              <li><span>find our restaurant</span></li>
              <li  class="py-1" v-for="(item,index) in firstList" :key="index">
                  <p>{{item.address}}</p>
                  <p>{{item.city}}</p>
                  <p>{{item.phoneNumber}}</p>
              </li>
          </ul>
          <ul class="mx-2 col-4">
              <li><span>Working Hours</span></li>
              <li class="py-2" v-for="(item,index) in secondList" :key="index">
                  <span>{{item.day}}</span>
                  <p class="closed">{{item.openingTime}}</p>

              </li>
              <li>
                  <span>follow us:</span>
                  <span class="social mx-2">
                      <i class="fa-brands fa-twitter"></i>
                      <i class="fa-brands fa-facebook-f"></i>
                      <i class="fa-brands fa-instagram"></i>
                      <i class="fa-brands fa-linkedin-in"></i>
                  </span>
              </li>
          </ul>
          <div class="col">
              <h6>the don peppe crew first an foremost valuse an authentic, well baked slice of pizza.</h6>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name:'FooterLists',
    props:{
        firstList:Array,
        secondList:Array
        
    }
}
</script>

<style lang="scss" scoped>
@import '../style/vars.scss';
section{
    
    padding: 50px;
    span{
    color:$main_gold;
    text-transform:uppercase;
    font-size:0.8em;
    margin: 10px 0;
    };
    p{
        color:$p_color;
        font-size: 0.8em;
        margin: 0
    };
    h6{
        color: white;
        text-transform: uppercase;
    }
    .fa-brands{
        color: white;
        margin: 0 5px;
    }
}

</style>