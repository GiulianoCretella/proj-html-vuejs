<template>
  <section class="d-flex">
      <div v-for="(item,index) in cards" :key="index" class="my_card position-relative">
          <img class="w-100 h-100" :src="require('../assets/' + item.image)" alt="">
          <div class="onhover">
               <div class="description" v-if="type==='image'">
                   <div class="description-text text-center">
                       <p class="name">{{item.nome}}</p>
                       <p class="task">{{item.task}}</p>
                       <p class="social">
                           <i class="fa-brands fa-instagram"></i>
                           <i class="fa-brands fa-twitter"></i>
                           <i class="fa-brands fa-facebook-f"></i>
                       </p>
                   </div>
               </div>
                <svg v-if="type ==='svg'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85" class="qodef-eye"><circle cx="42.5" cy="42.5" r="42.5"/><path fill="white" d="M57.3 43.2c-.2.3-.4.6-.8 1-.3.4-.9 1-1.9 2-.9.9-1.9 1.7-3 2.4s-2.4 1.3-4.1 1.9c-1.7.6-3.3.8-5.1.8-5.5 0-10.5-2.7-14.8-8-.3-.5-.3-1 0-1.5.2-.3.4-.6.8-1 .3-.4.9-1 1.9-2 .9-.9 1.9-1.7 3-2.4s2.4-1.3 4.1-1.9c1.7-.6 3.3-.8 5.1-.8 1.7 0 3.4.3 5.1.8 1.7.6 3 1.2 4.1 1.9 1.1.7 2.1 1.5 3 2.4.9.9 1.6 1.6 1.9 2 .3.4.6.7.8 1 .2.5.2.9-.1 1.4zm-2.7-.7c-.7-.9-1.5-1.7-2.4-2.5-.9-.8-2.3-1.6-4.1-2.5-1.8-.9-3.7-1.3-5.6-1.3-1.9 0-3.8.4-5.6 1.3-1.8.8-3.2 1.7-4.1 2.5-.9.8-1.7 1.6-2.4 2.5.7.9 1.5 1.7 2.4 2.5.9.8 2.3 1.6 4.1 2.5 1.8.9 3.7 1.3 5.6 1.3 4.6-.1 8.6-2.2 12.1-6.3zm-7.8-3.2c.9 1.2 1.2 2.6 1 4-.2 1.5-.9 2.7-2.1 3.6-1.1.7-2.2 1.1-3.3 1.1h-.7c-1.5-.2-2.7-.9-3.6-2.1-.9-1.2-1.2-2.5-1-4 .2-1.5.9-2.6 2.1-3.5 1.2-.9 2.6-1.3 4-1.1 1.5.1 2.7.8 3.6 2zm-.9 3.7c.1-1-.1-1.8-.6-2.6-.5-.7-1.3-1.2-2.3-1.3-.9-.2-1.8 0-2.5.6-.7.5-1.2 1.3-1.3 2.3-.1 1 .1 1.8.6 2.6.5.7 1.3 1.2 2.3 1.3.9.2 1.8 0 2.5-.6s1.1-1.3 1.3-2.3zm-3.3-2.4c-.3.2-.4.5-.4.9s.1.7.4.9c.2.2.5.4.9.4s.7-.1.9-.4c.3-.3.4-.6.4-.9 0-.3-.1-.6-.4-.9-.3-.3-.6-.4-.9-.4s-.7.1-.9.4z"/></svg>   
          </div>
      </div>
  </section>
</template>

<script>

export default {
    name:'MainCard',
    data(){
        return{
        }
    },
    props:{
        cards:Array,
        type:String
    }

}
</script>

<style lang="scss" scoped>
@import '../style/vars.scss';

.onhover{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #fff;
    background-image:radial-gradient(#d1d4d8 1px,transparent 1px),radial-gradient(#d1d4d8 1px,transparent 1px);
    background-size: 12px 12px;
    display: none;
    svg{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20%;
        circle{
            fill: $main_red;
        }
    }
    .description{
        width: 90%;
        height: 90%;
        background-color: $main_red;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .description-text{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .name{
                font-size: 1.2em;
                text-transform: uppercase;
                color: white;
                margin: 0;
                font-weight: 500;
            }
            .task{
                text-transform: capitalize;
                font-size: 0.7em;
                color:white;
                margin:0
            }
            .social{
                color: white;
                padding:6px;
                .fa-brands{
                    padding: 0 5px;
                }
            }
        }
    }
}
.my_card:hover .onhover{
    display: block;
}



</style>