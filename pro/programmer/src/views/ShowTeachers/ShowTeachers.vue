<template>
<div class="teacher">
    <div class="box1">
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="(ite,ind) in list"  @click="goDetail(ite.id)"
                :key="ind" >
         <div class="card"    >
                <van-card
                :desc="ite.introduction"
                :title="ite.real_name"
                :thumb="ite.avatar"
            />
            
            </div>
    </van-cell>
  </van-list>
</van-pull-refresh>
    </div>
  
           
    
        <!-- 没有更多了 -->
        <div class="nomore">
            没有更多了
        </div>
</div>
</template>

<script>
import { attrs } from "@/http/api";
export default {
  components: {},
  data() {
    return {
      list: [],
      page: 1,
      limit: 10,
      loading: false,
      finished: false,
      refreshing: false
    };
  },

  methods: {
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
      //   for (let i = 0; i < this.list.length-1; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   this.loading = false;

      //   if (this.list.length >= 6) {
      //     this.finished = true;
      //   }
      // }, 1000);
      })
    },
    async getapp() {
      let { data: res } = await attrs({ page: this.page, limit: this.limit });
      console.log(res.list, "课程");
      this.list = res.list;
    },
    goDetail(id) {
      console.log(id);
      this.$router.push("/detail?id=" + id);
    }
  },

  mounted() {
    this.getapp();
  }
};
</script> 

<style scoped lang='scss'>
.teacher {
  width: 100%;
  padding-bottom: 110px;
  background: #f7f8fa;
  .box1 {
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
    .van-card {
      margin-top: 30px;
      background: #fff;
      border-radius: 20px;
    }
    .van-card__title {
      max-height: 150px;
      font-weight: 500;
      line-height: 60px;
    }
    /deep/ .van-image__img {
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

  .nomore {
    width: 100%;
    text-align: center;
    height: 120px;
    line-height: 120px;
  }
}
</style>