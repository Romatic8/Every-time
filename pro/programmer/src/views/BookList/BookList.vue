<template>
<div class="book">
    <!-- 头部 -->
    <div class="top">
         <van-tabs v-model="active">
                <van-tab v-for="(item,index) in bookList" :key="index" :title="item.name"></van-tab>
        </van-tabs>
    </div>
    <!-- 分类 -->
    <div class="cate">
            <van-tabs v-model="actives">
                <van-tab title="按时间">内容 1</van-tab>
                <van-tab title="按热度">内容 2</van-tab>
                <van-tab title="按价格">内容 3</van-tab>
                <p>
                    <span class="span1">▲</span><span class="span2">▼</span>
                </p>
            </van-tabs>
    </div>
</div>
</template>

<script>
  import {book} from "@/http/api";
export default {
  components: {},
  data () {
    return {
    bookList:[],
    active:0,
    actives:0
}
  },

  methods: {
    async getBook(){
        let {data:res}=await book  ()
        console.log(res,"BOOks");
        this.bookList=res   
    }
},

  mounted () {
    this.getBook()
  },
}
</script> 

<style scoped lang='scss'>
.book{
    width: 100%;
    .top{
        width: 100%;
    }
    .cate{
        width: 85%;
       p{
           position: relative;
           .span1{
               display: inline-block;
               position: absolute;
               top: -120px;
               right: 20px;
               color: #ccc;
           }
           .span2{
                display: inline-block;
                  position: absolute;
               top: -90px;
               right: 20px;
                color: #ccc;
           }
       }
    }
}
</style>