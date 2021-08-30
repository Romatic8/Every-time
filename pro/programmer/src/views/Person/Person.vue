<template>
  <div class="box">
    <div class="bar">
      <div class="t">
        <!-- 阿里图 -->
        <p>
          <i class="iconfont icon-user user"></i>
        </p>
        <p class="de">
          <b @click="login()">登录/</b>
          <b @click="login()">注册</b>
        </p>
        <van-grid :column-num="3">
          <van-grid-item
            v-for="(item,index) in arr"
            :key="index"
            :icon="item.icon"
            :text="item.title"
             @click="$router.push('/login')"
             badge="2+" 
          />
        </van-grid>
      </div>
    </div>
    <!-- 下边 -->
   <div class="list">
    <van-cell-group @click="$router.push('/login')">
      <van-cell title="我的作业"  icon="records" is-link />
      <van-cell title="我的社区"  icon="like" is-link />
    </van-cell-group>
   </div>
    <div class="list">
    <van-cell-group  @click="$router.push('/login')">
      <van-cell title="课程订单"  icon="orders-o" is-link />
      <van-cell title="图书订单"  icon="newspaper-o" is-link />
    </van-cell-group>
   </div>
    <div class="list">
    <van-cell-group  @click="$router.push('/login')">
      <van-cell title="优惠券"  icon="gift-o" is-link />
      <van-cell title="学习卡"  icon="coupon-o" is-link />
      <van-cell title="分销中心"  icon="notes-o" is-link />

    </van-cell-group>
   </div>
    <div class="list">
    <van-cell-group >
      <van-cell title="信息中心"  icon="comment-o" is-link />
      <van-cell title="地址管理"  icon="location-o" is-link />
      <van-cell title="关于我们"  icon="friends-o" is-link />
      <van-cell title="意见反馈"  icon="records" is-link />
      <van-cell title="设置"  icon="setting-o" is-link @click="$router.push('/login')"/>

    </van-cell-group>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          icon: "underway-o",
          color: "blue",
          title: "我的学习"
        },
        {
          icon: "todo-list-o",
          color: "red",
          title: "本周课时"
        },
        {
          icon: "manager-o",
          color: "red",
          title: "我的积分"
        }
      ]
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  padding-bottom: 65px;
  .bar {
    width: 100%;
    height: 500px;
    background-image: url("../../assets/person.png"); //背景图
    background-size: 100%;
    background-repeat: no-repeat;
    .t {
      width: 100%;
      height: 200px;
      line-height: 200px;
      text-align: center;
      position: relative;
      .van-grid {
        width: 100%;
        position: absolute;
        top: 400px;
      }
      .user {
         padding: 45px;
        text-align: center;
        background: white;
        border-radius: 50%;
        border: 1px solid gray;
        box-shadow: 0 0 10px;
        font-size: 50px;
        box-sizing: border-box;
       
      }
      .de {
        margin-top: -100px;
        b {
          font-size: 30px;
          color: white;
          font-weight: bold;
        }
      }
    }
  }
  .list{
    background: #f0f0f0;
    margin: 40px 0;
    &:nth-child(1){
        margin-top: 120px;
    }
  }
}
</style>