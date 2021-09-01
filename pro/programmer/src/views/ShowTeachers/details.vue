<template>
<div class="details">
    详情页面
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },

  methods: {},

  mounted () {
    console.log(this.$route.query.id,this.$route.query.course_type);
  },
}
</script> 

<style scoped lang='scss'>

</style>