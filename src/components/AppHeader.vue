<template>
<section>
</section>
</template>

<script>
import dati from '../dati.json'
export default {
    name:'AppHeader',
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

</style>