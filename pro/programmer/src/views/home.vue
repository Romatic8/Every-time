<template>
<div class="home">
    <router-view></router-view>

     <Tabbar></Tabbar>
</div>
</template>

<script>
import Tabbar from "@/components/tabbar.vue"
export default {
  components: {Tabbar},
  data () {
    return {}
  },

  methods: {},

  mounted () {
  },
}
</script> 

<style scoped lang='scss'>
.home{
    width: 100%;
   
}
</style>