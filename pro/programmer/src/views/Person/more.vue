<template>
<div class="more">
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
                    <p class="tag" @click="recod">兑换记录</p>
            </div>

            <!-- 搜索框 -->
            <div class="search">
                <van-search
                    :value="value"
                    placeholder="搜索"
                     shape="round"
                     background="red"
                    >
                    <view slot="action" >搜索</view>
                    </van-search>
            </div>
        </div>
    </div>

    <!-- 标签栏 -->
    <div class="table">
        <van-tabs :active="active" bind:change="onChange">
            <van-tab title="好课推荐">
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

            </van-tab>
            <van-tab title="热门图书">
                 <div class="card">
                <van-card
                :desc="rBooks.author"
                :title="rBooks.book_name"
                :thumb="rBooks.cover_img"
              >
             <template #price>
                 <span  style="color:red">
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
            </van-tab>
        </van-tabs>
    </div>
      <div class="col">
                没有更多了
      </div>
</div>
</template>

<script>
import { inter } from "@/http/api";

export default {
  components: {},
  data () {
    return {
    value:"",
    active:0,
     rCourse: [], //课程
      rBooks: [], //推荐的图书
}
  },

  methods: {
   onChange(event){
  
    
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
   goHuan1(type){
    //    console.log(id,type);
        this.$router.push('/store?type='+type)
   },
    goHuan2(type){
        this.$router.push('/store?type='+type)
   },
   //点击兑换记录
   recod(){
       this.$router.push('/record')
   }
},

  mounted () {
     this.requestRecommend();
      this.rbooks();
  },
}
</script> 

<style scoped lang='scss'>
.more{
    width: 100%;
   .bar {
        width: 100%;
        height: 350px;
        background: red;
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;
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
        .tag{
            width: 150px;
            border: 1px solid #fff;
            color: #fff;
            text-align: center;
            height: 50px;
            line-height: 50px;
            border-radius: 20px;
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
      }
    }
    //搜素框
    .search{
        width: 80%;
        border-radius: 30px;
        margin: auto;
        margin-top: 100px;
      }
    }

    //标签页
    .table{
        width: 100%;
        padding-left:30px;
        box-sizing: border-box; 
    }
    .col{
        width: 100%;
       margin-top: 30px;
       text-align: center;
}

}
</style>