<template>
<div class="news">
    <div class="nav">
        <van-tabs @click="onTabChange">
            <van-tab v-for="(item, index) in newsTab" :key="index" :title="item.name">
               <template>
                    <ul class="news-content">
                        <li v-for="(item, index) in classfiy" :key="index" @click="go(item.id)">
                            <img :src="item.thumb_img" />
                            <div>
                            <p class="name">{{ item.title }}</p>
                            <p class="desc">{{ item.description }}</p>
                            <div>
                                <p class="number"><van-icon class="icon" name="eye-o" />{{ item.click_rate }}</p>
                                <p class="time">{{ item.created_at | fomartTime("yyyy/MM/dd hh:mm") }}</p>
                            </div>
                            </div>
                        </li>
                    </ul>
               </template>
            </van-tab>
        </van-tabs>

          <div class="tu" v-show="isshow">
                     <img src="@/assets/empty.png" alt="">
                     <p>
                       暂无评论
                     </p>
          </div>
    </div>
</div>
</template>

<script>
import { infor, infoClassfiy } from "@/http/api";
export default {
  components: {},
  data() {
    return {
      classfiy: [], 
      newsTab: [],//tab
      classify_id:0,
      isshow:false
    };
  },

  methods: {
    //tab数据
    async getTab() {
      let { data: res } = await infoClassfiy();
      console.log(res,"tab");
      this.newsTab = res;
      this.newsTab.unshift({
        id: 0,
        name: "全部",
        parent_id: 0
      });
      
    },
    //获取的是列表
    async getNews() {
      let res = await infor({page: 1, limit: 10, classify_id: this.classify_id});
      console.log(res, "111");
      this.classfiy=res.data.list
    },
    //tab切换
    onTabChange(index) {
      console.log(index);
      if(index==3){
        this.isshow=true
      }else{
        this.isshow=false
      }
      this.classify_id=this.newsTab[index].id
      console.log(this.classify_id);
      this.getNews()
    },
    go(id){
      console.log(id,"id2");
      this.$router.push('/inforDetail?information_id='+id)
    }
  },

  mounted() {
    this.getNews();
    this.getTab();
  }
};
</script> 

<style scoped lang='scss'>
.news {
  width: 100%;
   .tu{
      width:100%;
      text-align: center;
      img{
        width: 200px;
        height: 200px;
      }
      p{
        width: 100%;
      }
    }
  .news-content {
  padding: 30px;
  li {
    padding: 20px;
    margin-bottom: 30px;
    background: #fff;
    box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.07);
    border-radius: 20px;
    display: flex;
    align-items: center;
    &:last-child {
      margin-bottom: 0;
    }
    img {
      display: block;
      width: 208px;
      height: 129px;
      border-radius: 10px;
      flex: none;
      margin-right: 24px;
    }
    & > div {
      overflow: hidden;
      flex: 1;
      .name {
        margin-bottom: 20px;
        font-size: 28px;
        line-height: 32px;
        font-weight: 500;
        color: #333;
      }
      .desc {
        width: 100%;
        font-size: 24px;
        color: #999;
        line-height: 30px;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 35px;
        p {
          font-size: 22px;
          color: #999;
          line-height: 22px;
        }
        .number {
          padding: 0 0 0 34px;
          background-size: 25px 17px;
          box-sizing: border-box;
        }
        .time {
          padding: 0 0 0 26px;
          background-size: 17px 17px;
        }
      }
    }
  }
}
}
</style>