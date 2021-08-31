<template>
<div class="setpwd">
      <van-cell title="设置密码"   is-link  @click="$router.push('/setP')" />
      <van-cell  title="注销账号"  @click="zhuxiao"  is-link  />
      <div class="btn" @click="logout">
          退出登录
      </div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },

  methods: {
    logout(){
        this.$store.commit("logout")
        this.$router.push("/login")
    }
},

  mounted () {
  },
}
</script> 

<style scoped lang='scss'>
.setpwd{
    width: 100%;
    .van-cell{
        height: 110px;
    }
    .btn{
        width: 80%;
        margin: auto;
        height: 90px;
        background: red;
        color: #fff;
        text-align: center;
        line-height: 90px;
        border-radius: 5px;
        margin-top: 50px;
}
}
</style>