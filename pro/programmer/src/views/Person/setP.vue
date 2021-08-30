<template>
<div class="setP">
      <div class="log" >
         <p class="one">
           <input type="text" v-model="tel" placeholder="请输入手机号" name="" id="">
           <button class="btnn" @click="get" >获取验证码</button>
             <button class="btnn" v-if="isshow" style="color:#ccc;">获取验证码({{time}})</button>
         </p>
          <p class="two">
           <input type="text" v-model="code" placeholder="请输入短信验证码" name="" id="">
         </p>
          <p class="two">
           <input type="text" v-model="pwd" placeholder="请输入密码" name="" id="">
         </p>
        <div class="deng">
           <van-button class="btn" type="danger" @click="sure"> 确定</van-button>
        </div>
       
     </div>
</div>
</template>

<script>
import { smsCode,login } from "@/http/api";
export default {
  components: {},
  data () {
    return {
    tel:"",
    code:"",
    pwd:"",
    isshow:false,
    time:60
}
  },

  methods: {
    //1.点击获取验证码
    async get() {
      var reg = /^1[35879]\d{9}$/;
      if (!reg.test(this.tel)) {
        this.$toast.fail("手机号格式不正确");
        return false;
      }
      this.isshow = true;
      let res = smsCode({ mobile: this.tel, sms_type: "login" }).then(res => {
        console.log(res, "12");
        this.isshow = true;
        this.time = 60;
        let that = this;
        var timer = setInterval(function() {
          that.time--;
          if (that.time <= 0) {
            that.isshow = false;
            clearInterval(timer);
          }
        }, 1000);
      });
    },

    //2.点击确定
      async sure() {
      if (this.tel == "" || this.code=="" || this.pwd=="") {
        this.$toast.fail("手机号格式不正确");
        return;
      }
      let res = await login({
          mobile: this.tel,
          sms_code: this.code,
          type: 2, //短信登录
          client: '1', //学生端 
          password:this.pwd
        }) 
        .then(res => {
          console.log(res);
          if (res.code == 200) {
            this.$router.push("/mys");
          }
        });
        var obj= { 
          mobile: this.tel,
          sms_code: this.code,
          password:this.pwd
        }
         this.$store.commit("savePwd",obj)
    }
},

  mounted () {
  },
}
</script> 

<style scoped lang='scss'>
.setP{
    width: 100%;
 
      .log {
    width: 100%;
    height: 240px;
    background: #fff;
    margin-top: 18px;
    padding-top: 15px;
     .btnn {
      border: 0px;
      color: red;
      font-size: 12px;
      background: #fff;
      position: absolute;
      right: 50px;
      top: 5px;
      margin-bottom: 30px;
    }
    .dl {
      width: 408px;
      height: 80px;
      margin-top: 20px;
      border-radius: 5px;
      color: #fff;
      background: linear-gradient(
        to left,
         rgb(226,  25,  25),
         rgb(232,  89,  112)
      );
    }
    p {
      width: 100%;
      margin: auto;
      height: 85px;
      line-height: 85px;
      overflow: hidden;
      border-bottom: 1px solid #eaeaea;
    }
    .deng {
      width: 100%;
      height: 50px;
    text-align: center;
      margin-top: 80px;
      border-radius: 5px;
      box-shadow: 2px 2px 30px 0px rgb (242,  82,  82);
      background: linear-gradient(to left,  red,  red,  pink);
    }

    input {
     width: 100%;
      border: 0px;
      height: 60px;
      line-height: 60px;
     padding-left: 60px;
     box-sizing: border-box;
      background-color: #fff;
      font-size: 24px;
    }
    .one {
    width: 100%;
    position: relative;
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

}
</style>