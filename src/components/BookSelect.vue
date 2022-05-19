<template>
  <div class="booking">
    <div class="select-row text-center">
      <select name="pax" id="pax">
          <option v-for="index in 10" :key="index" :value="index"> {{index + ' ' +'pax'}}</option>
      </select>
      <input type="date">
      <input type="time" min="05:00" max="18:00" required>
      <button class="btn">book a table</button>
    </div>  
  </div>
</template>

<script>
export default {
    name:'BookSelect'
}
</script>

<style lang="scss" scoped>
@import '../style/vars.scss';
.booking{
    background-image:  url(../assets/img/h3-background-img-3.jpg);
    background-size: cover;
    height: 150px;
    position: relative;
    
    .select-row{
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        select, input, button{
            padding: 10px 50px;
            margin: 10px;
            font-size: 0.8em;
        }
        button{
            background-color: $main_red;
            color: white;
            text-transform: uppercase;
            
        }
    }
}
</style>