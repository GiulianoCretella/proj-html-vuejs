<template>
<nav>

</nav>
</template>

<script>
import dati from '../dati.json'

export default {
    name:'NavBar',
    data(){
        return{
            headerLeft: dati.logoLeft,
            headerRight: dati.logoRight,
            headerEnd: dati.headerEnd
        }
    }
}
</script>

<style lang="scss">

    // font-size: 0.8em;
    // letter-spacing: 3px;
    // color: white;
    // text-transform: uppercase;

</style>