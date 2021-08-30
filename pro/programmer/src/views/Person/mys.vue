<template>
  <div class="box">
    <div class="bar">
      <div class="t">
        <!-- 头 -->
      <div class="top">
          <p> 
             <van-icon name="manager" class="user" />
          </p>
            <p class="pp"> <span class="tt"> {{$store.state.token.nickname}}</span></p>
           
            <p class="tag"><van-tag type="primary" size="large">签到</van-tag></p>
      </div>
        <van-grid :column-num="3">
          <van-grid-item
            v-for="(item,index) in arr"
            :key="index"
            :icon="item.icon"
            :text="item.title"
             @click="$router.push('/login')"
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
    <div class="list end">
    <van-cell-group  >
      <van-cell title="信息中心"  icon="comment-o" is-link />
      <van-cell title="地址管理"  icon="location-o" is-link />
      <van-cell title="关于我们"  icon="friends-o" is-link />
      <van-cell title="意见反馈"  icon="records" is-link />
      <van-cell  title="设置"  icon="setting-o" is-link @click="$router.push('/setpwd')"/>

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
  
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  padding-bottom: 80px;
  .end{
    margin-bottom: 30px;
  }
  .bar {
    width: 100%;
    height: 500px;
     background-image: url("../../assets/person.png"); //背景图
    background-size: 100%;
    background-repeat: no-repeat;
    .t {
      width: 100%;
      height: 200px;
      position: relative;
      .top{
          width: 100%;
          display: flex;
        justify-content: space-around;
        align-items: center;
          position: relative;
          .pp{
            width:280px;
            height: 55px;
            font-size: 28px;
            margin-top: 100px;
           
          }
          .tt{
            display: inline-block;
           
            
            
            margin-left: 50px;
          }
        .tag{
            .van-tag{
                width: 10%;
                position: absolute;
                right: 0;
                top: 86px;
               padding-left: 27px;
               border-top-left-radius: 50px;
               border-bottom-left-radius: 50px;
            }
        }
      }
      .van-grid {
        width: 100%;
        position: absolute;
        top: 400px;
       
      }
      .user {
        padding: 35px;
        background: white;
        border-radius: 50%;
        color: white;
        background: blue;
        box-shadow: 0 0 10px;
        font-size: 80px;
        box-sizing: border-box;
        position: absolute;
        top: 90px;
      }
      .de {
        margin-top: -130px;
        b {
          font-size: 16px;
          color: white;
          font-weight: bold;
        }
      }
    }
  }
  .list{
    background: #f0f0f0;
   margin-top: 40px;
   &:nth-child(1){
      margin-top: 200px;
   }
  }
}
</style>