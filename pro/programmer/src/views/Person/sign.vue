<template>
<div class="sign">
      <div class="bar">
        <div class="t">
        <!-- 头 -->
            <div class="top">
                <p> 
                    <van-icon name="manager" class="user" />
                </p>
                <p class="pp">
                        <span class="tt"> {{$store.state.token.nickname}}</span>
                        <br/>
                        <span>
                            积分:
                        </span>
                    
                    </p>
                    <p class="tag" @click="onShowSignRule">签到规则</p>
                     
     
            </div>
        </div>
        <div class="rule">
           <van-dialog v-model="showSignRule" title="签到规则" confirm-button-text="我知道了">
                        <p>
                          <span style="font-size: 14px;">1.每日签到可获得日签奖励，在单个周期内连续签到可获得连签奖励，同1个周期内最多可领取一次；</span>
                        </p>
                        <p>
                          <span style="font-size: 14px;">2.每日最多可签到1次，断签则会重新计算连签天数；</span>
                        </p>
                        <p>
                          <span style="font-size: 14px;">3.活动以及奖励最终解释归机构所有；</span>
                        </p>
                        <p>
                          <br>
                        </p>
            </van-dialog>
        </div>
        <div class="s">
                <!-- <Calender /> -->
               
          <van-calendar
             :show-subtitle="true"
              row-height="45px"
              :show-mark="false"
              :show-title ="false"
              :poppable="false"
              :formatter="formatter"
              :show-confirm="false"
              :style="{ height: '300px' }"
            />
        </div>
      </div>



      <div class="next">
         <div class="recommend-wrap" >
          <div class="head">
            <p class="title">好课推荐</p>
            <p class="more" @click="onMore">更多</p>
          </div>
                <div class="card">
                <van-card
                :title="rCourse.course_name"
                :thumb="rCourse.cover_img"
              >
             <template #price>
                 <span style="color:red">
                   {{ rCourse.course_status}}积分
                 </span>
              </template>
              <template #footer>
                 <span @click="goHuan1(rCourse.goods_type)" style="border:1px solid #ccc;border-radius:10px;width:60px;text-align:center;display:inline-block;">
                    去兑换
                 </span>
              </template>
            </van-card>
          </div>
        </div>
        <div class="recommend-wrap" >
          <div class="head">
            <p class="title">热门图书</p>
            <p class="more" @click="onMore()">更多</p>
          </div>
          <div>
             <div class="card">
                <van-card
                :desc="rBooks.author"
                :title="rBooks.book_name"
                :thumb="rBooks.cover_img"
              >
             <template #price>
                 <span style="color:red">
                   {{ rBooks.book_status}}积分
                 </span>
              </template>
              <template #footer>
                 <span @click="goHuan2(rBooks.goods_type)" style="border:1px solid #ccc;border-radius:10px;width:60px;text-align:center;display:inline-block;">
                    去兑换
                 </span>
              </template>
            </van-card>
          </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>

import { inter,datas } from "@/http/api";
// import {Calender} from "@/components/Calender.vue"
// console.log(goodsclass);
export default {
  components: {},
  data() {
    return {
      show: true,
      rCourse: [], //课程
      rBooks: [], //推荐的图书
      showSignRule:false
    };
  },

  methods: {
      formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();
       const today=new Date();
        const year=today.getFullYear()
        const month_new=today.getMonth()+1
        const date_new=today.getDate()
      if(month_new==month&&date_new==date){
        day.bottomInfo="+1"
        day.text="√"
      }

      return day;
    },
    //去兑换
    goHuan1(type){
       this.$router.push('/store?type='+type)
    },
    goHuan2(type){
       this.$router.push('/store?type='+type)
    },
   
    onMore() {
      this.$router.push('/more')
    },
    async requestRecommend() {
       let res=await inter({type:1})
       this.rCourse=res.data.list[0]
       console.log(this.rCourse,"课程");
    },
    async rbooks() {
       let res=await inter({type:2})
       this.rBooks=res.data.list[0]
       console.log(this.rBooks,"课程77");
    },
    //点击签到
    onShowSignRule(){
      this.showSignRule=true
    }
  },
  created() {
      this.requestRecommend();
      this.rbooks();
    },
  async mounted(){
   const today=new Date();
   const year=today.getFullYear();
   const month_new=today.getMonth()+1;
   const date_new=today.getDate();
   let res =await datas({date:`${year}-${month_new}-${date_new}`})
   console.log(`${year}-${month_new}-${date_new}`,"日历");
   console.log(res,"日历");
 },
};
</script> 

<style scoped lang='scss'>
.bottom {
  flex: 7;
}
.sign {
  width: 100%;
  position: relative;
  background: #f7f8fa;
  .rule{
    z-index: 999;
    height: 270px;
    background: #fff;
    position: fixed;
    top: 45%;
    left: 0;
  }
  .bar {
    width: 100%;
    height: 500px;
    background: red;
    background-size: 100%;
    background-repeat: no-repeat;
    .t {
      width: 100%;
      height: 200px;
      position: relative;
      .top {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
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
          top: 50px;
          left: 15px;
        }
        .pp {
          width: 280px;
          height: 55px;
          font-size: 28px;
          margin-top: 70px;
          padding-left: 10px;
          box-sizing: border-box;
          span {
            display: inline-block;
            margin-left: 20px;
            color: #fff;
            margin-bottom: 20px;
          }
        }

        .tag {
          border: 1px solid #ccc;
          color: #fff;
          width: 150px;
          height: 45px;
          text-align: center;
          line-height: 45px;
          border-radius: 30px;
        }
      }
    }
  .s {
     width: 95%;
      position: absolute;
      top: 220px;
      left: 20px;
      box-sizing: border-box;       
     
    }
  }
  .next {
    width: 100%;
    margin-top: 350px;
    background: #fff;
    .recommend-wrap {
      padding: 0 30px;
      margin-bottom: 50px;
      .head {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 40px;
        .title {
          font-size: 32px;
          color: #595959;
          font-weight: 500;
          position: relative;
          padding-left: 10px;
          &::after {
            content: "";
            display: inline-block;
            width: 4px;
            height: 26px;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            // background-color: $theme_color;
          }
          &::before {
            content: "|";
            color: rgb(214, 95, 95);
            margin-right: 20px;
            font-weight: 700;
          }
        }
        .more {
          font-size: 28px;
          color: #b7b7b7;
          position: relative;
          padding-right: 20px;
          line-height: 32px;
          &::after {
            content: "";
            display: block;
            border-top: 2px solid #b7b7b7;
            border-right: 2px solid #b7b7b7;
            width: 14px;
            height: 14px;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%) rotate(45deg);
          }
        }
      }
    }
  }
}
</style>