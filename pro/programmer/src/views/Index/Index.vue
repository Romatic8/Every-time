<template>
<div class="index">
    <!-- 头部 -->
    <div class="head">
        <van-icon name="newspaper-o" color="orange" />
        <van-search
            v-model="value"
            shape="round"
            placeholder="搜索"
        />
       <van-icon name="envelop-o" />
    </div>
    <!-- 轮播图 -->
    <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="@/assets/banner.png" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/banner2.png" alt=""></van-swipe-item>
        </van-swipe>
    </div>

    <!-- 九宫格 -->
    <div class="grid">
         <van-grid :column-num="3">
            <van-grid-item v-for="(item,index) in nav" :key="index" :icon="item.icon" :text="item.font">
                
            </van-grid-item>
        </van-grid>
    </div>

    <!-- 资深讲师 -->
    <div class="box">
        <div class="box1">
            <div class="top" >
               <p><span>|</span> <b>{{list[0].channel_info.name}}</b></p>
               <b>更多></b>
            </div>
            <div class="card">
                <van-card
                v-for="(ite,ind) in list[0].list"
                :key="ind"
                :desc="ite.introduction"
                :title="ite.teacher_name"
                :thumb="ite.teacher_avatar"
            />
            </div>
        </div>
        <div  class="box1">
            <div class="top" >
               <p><span>|</span> <b>{{list[1].channel_info.name}}</b></p>
               <b>更多></b>
            </div>
            <div class="card">
                <van-card
                v-for="(ite,ind) in list[1].list"
                :key="ind"
                :desc="ite.title"
                :title="ite.teacher_name"
                :thumb="ite.cover_img"
            />
            </div>
        </div>
        <div class="box1">
            <div class="top" >
               <p><span>|</span> <b>{{list[2].channel_info.name}}</b></p>
               <b>更多></b>
            </div>
            <div class="card">
                <van-card
                v-for="(ite,ind) in list[2].list"
                :key="ind"
                :desc="ite.introduction"
                :title="ite.teacher_name"
                :thumb="ite.teacher_avatar"
            />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { banner, nav, appIndex } from "@/http/api";
export default {
  components: {},
  data() {
    return {
      value: "",
      nav: [
        {
          icon: "manager-o",
          font: "名师"
        },
        {
          icon: "records",
          font: "课表"
        },
        {
          icon: "user-o",
          font: "约课"
        }
      ],
      list: []
    };
  },

  methods: {
    async getapp() {
      let { data: res } = await appIndex();
      console.log(res, "11");
      this.list = res;
      console.log(this.list);
    }
  },

  created() {},
  mounted() {
    this.getapp();
  }
};
</script> 

<style scoped lang='scss'>
.index {
  width: 100%;
  background: #f7f8fa;
  padding-bottom: 130px;
  //资深讲师
  .box {
    width: 100%;
    .box1{
      width: 100%;
      margin-top: 20px;
        .top {
        width: 100%;
        color: #595959;
        position: relative;
        padding-left: 0.72rem;
        box-sizing: border-box;
        padding-left: 7.2vw;
        padding-right: 0.72rem;
        padding-right: 7.2vw;
        font-size: 0.42667rem;
        font-size: 4.26667vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
         margin-bottom: 20px;
       
        span {
          font-weight: 700;
          color: red;
          font-size: 0.62rem;
          margin-right: 20px;
        }
      }
    }
      .card {
        width: 90%;
        margin: auto;
        border-radius: 20px;
        .van-card{
          margin-top: 30px;
          background: #fff;
          border-radius: 20px;
        }
        .van-card__title {
          max-height: 150px;
          font-weight: 500;
          line-height: 60px;
        }
     /deep/  .van-image__img{
       width: 180px;
       height: 180px;
         border-radius: 50% !important;
       }
        .van-card__desc {
            max-height: 50px;
            color: #646566;
            line-height: 60px;
        }
      }
    }
  
  //头部
  .head {
    width: 100%;
    height: 90px;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 3px;
    box-sizing: border-box;
    .van-icon {
      font-size: 0.75rem;
      margin-left: 10px;
    }
    .van-search {
      width: 7.5rem;
      margin-left: 25px;
    }
  }
  //轮播图
  .banner {
    width: 100%;

    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      height: 350px;
      text-align: center;
      background-color: #39a9ed;
      img {
        width: 100%;
        height: 350px;
      }
    }
  }
}
</style>