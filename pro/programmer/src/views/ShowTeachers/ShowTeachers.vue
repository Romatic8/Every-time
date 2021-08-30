<template>
<div class="teacher">
    <div class="box1">
            <div class="card" >
                <van-card
                v-for="(ite,ind) in list.list"
                :key="ind"
                :desc="ite.introduction"
                :title="ite.teacher_name"
                :thumb="ite.teacher_avatar"
                :thumb-link="'/detail?teacher_id='+ite.teacher_id"
            />
            </div>
        </div>

        <!-- 没有更多了 -->
        <div class="nomore">
            没有更多了
        </div>
</div>
</template>

<script>
import { appIndex } from "@/http/api";
export default {
  components: {},
  data () {
    return {
    list:[]
}
  },

  methods: {
     async getapp() {
      let { data: res } = await appIndex();
      console.log(res, "11");
      this.list = res[2];
      console.log(this.list,"1");
    },
},

  mounted () {
    this.getapp()
  },
}
</script> 

<style scoped lang='scss'>
.teacher{
    width: 100%;
    padding-bottom: 110px;
    background: #f7f8fa;
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
    
  .nomore{
    width: 100%;
    text-align: center;
    height: 120px;
    line-height: 120px;
  }
}
</style>