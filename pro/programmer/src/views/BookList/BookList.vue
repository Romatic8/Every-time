<template>
<div class="book">
    <!-- 头部 -->
    <div class="top">
         <van-tabs v-model="active"  @click="onTabChange">
          
                <van-tab v-for="(item,index) in bookList" :key="index" :title="item.name"    @change="change(item.id)">
                   


                    <!-- 科幻 -->
                    <div class="sect" >
                        <ul class="ul">
                            <li v-for="(item,index) in sect" :key="index" class="actives">
                                {{item.name}}
                            </li>
                        </ul>
                    </div>


                     <!-- 全部 -->
                        <div class="cate" >
                                <van-tabs v-model="actives" @click="onTab">
                                    <van-tab  title="按时间"></van-tab>
                                    <van-tab title="按热度">内容 2</van-tab>
                                    <van-tab title="按价格">内容 3</van-tab>
                                    <p>
                                        <span class="span1">▲</span><span class="span2">▼</span>
                                    </p>
                                </van-tabs>
                        </div>
                         <div class="all" v-if="actives==index">
                                           <div class="every" v-for="(item,index) in all" :key="index">
                                               <div class="tu">
                                                   <img :src="item.cover_img" alt="">
                                               </div>
                                               <div class="right">
                                                   <p class="name">
                                                       <span >券</span>
                                                        {{item.name}}
                                                   </p>
                                                   <p class="auth">
                                                        {{item.author}}
                                                   </p>
                                                   <div class="box">
                                                        <p class="price" v-if="item.price==0">
                                                       免费
                                                        </p>
                                                        <p v-else>
                                                           <span class="pri"> {{item.price / 100}}</span>
                                                           <span class="pris">{{item.underlined_price / 100}}</span>
                                                        </p>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                </van-tab>
        </van-tabs>
    </div>
   
</div>
</template>

<script>
import { book, books } from "@/http/api";
// import { log } from "util";
export default {
  components: {},
  data() {
    return {
      bookList: [],
      active: 0,    //顶部的tab
      actives: 0,   //按时间、热度的tab
      sect: [],     
      id:0,
      all:[]
    };
  },

  methods: {
    onTabChange(index) {
      this.active = index;
      if(index==1 || index==2){
           this.sect = this.bookList[this.active].child;
            // console.log(this.sect, "科幻");
      }
     this.id=this.bookList[index].id
     console.log(this.id)
    },
     onTab(index) {
      this.actives = index;
     
    },
 
    async getBook() {
      let { data: res } = await book();
      console.log(res, "BOOks");
      this.bookList = res;
    },

    async getList() {
        let res = await books({id:this.id});
        console.log(res, "list");
        this.all=res.data.list
        let data=await books({order:this.id,page:1,limit:10})
        console.log(data,"data");
    }
  },

  mounted() {
    this.getBook();
    this.getList()
  }
};
</script> 

<style scoped lang='scss'>
.book {
  width: 100%;
  .top {
    width: 100%;
  }
  .all{
      width: 100%;
      background: #ccc;
      padding-top: 20px;
      box-sizing: border-box;
      padding-bottom: 60px;
      .every{
          width: 90%;
          height: 200px;
          background: #fff;
          border-radius: 20px;
         padding: 10px;
         box-sizing: border-box;
          margin: auto;
          display: flex;
          margin-bottom: 20px;
          .tu{
              width: 150px;
              height: 200px;
              margin-right: 20px;
              img{
                  width: 150px;
                  height: 180px;
              }
          }
          .right{
               position: relative;
              .auth{
                  font-size: 16px;
                  color: #333;
              }
              .box{
                  position: absolute;
                  bottom: 10px;
                  left:10px;
                  .price{
                      color: red;
                  }
                  .pri{
                      color: red;
                      font-size: 20px;
                  }
                  .pris{
                      color: gray;
                      margin-left: 20px;
                      font-size: 18px;text-decoration: line-through;
                  }
              }
          }
      }
  }
  .cate {
    width: 85%;
    position: relative;
    p {
      .span1 {
        display: inline-block;
        position: absolute;
        top: 20px;
        right: 25px;
        color: #ccc;
        font-size: 18px;
      }
      .span2 {
        display: inline-block;
        position: absolute;
        top: 40px;
        right: 25px;
        color: #ccc;
        font-size: 18px;
      }
    }
  }
  //科幻
  .sect {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    .ul {
      display: flex;
      width: 730px;
      overflow-x: scroll;
      .actives {
        height: 45px;
        font-size: 14px;
        line-height: 45px;
        background: #ededed;
        border-radius: 30px;
        padding: 2px 40px;
        box-sizing: border-box;
        margin-right: 40px;
        flex: none;
      }
      .lis {
        height: 45px;
        font-size: 14px;
        line-height: 45px;
        background: #ededed;
        border-radius: 30px;
        text-align: center;
        margin-right: 20px;
        &:nth-child(3) {
          width: 180px;
        }
      }
    }
  }
}
</style>