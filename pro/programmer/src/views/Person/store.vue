<template>
<div class="store">

    <div class="stores" v-if="type==1">
             <div class="name">
               <div class="tu">
                   <img :src="rbook.cover_img" alt="">
               </div>
               <div class="right">
                    <div class="title">
                    {{rbook.course_name}}
                </div>
                <div class="status">
                    <p class="p">
                        <span >{{rbook.exchange_price}}</span>积分
                    </p>
                    <p class="e">
                        <span>0人已报名| 剩余{{rbook.exchange_price}} 名额</span>
                    </p>
                </div>
               </div>
            </div>
            <div class="course">
                <p class="p">
                    课程详情
                </p>
                <p class="p2">
                    许大彪
                </p>
            </div>
    </div>


    <div class="stores" v-else>
             <div class="name">
              <div class="tu">
                    <img :src="rBooks.cover_img" alt="">
              </div>
              <div class="right">
                    <div class="title">
                       {{rBooks.book_name}}
                     </div>
                      <p class="num">
                        <span>0人已报名| 剩余{{rBooks.exchange_price}} 名额</span>
                    </p>
                <div class="status">
                    <p class="p">
                        <span >{{rBooks.book_status}}</span>积分
                    </p>
                </div>
              </div>
            </div>
            <div class="course">
                <p class="p">
                    图书介绍
                </p>
                <p class="p2">
                    添加书籍
                </p>
            </div>
    </div>
  

      
    
    <!-- 底部 -->
    <van-goods-action>
        <van-goods-action-button color="#4169FF1A" text="查看详细信息" type="warning" />
        <van-goods-action-button color="#FF0000" @click="atOnce" text="立即兑换" />
    </van-goods-action>


    <div class="tan">
        <!-- 弹出框 -->
        <van-popup v-model="show"  closeable position="bottom" :style="{ height: '30%' }" />
    </div>
</div>
</template>

<script>
import { inter,signDetail } from "@/http/api";
export default {
  components: {},
  data () {
    return {
    // id:this.$route.params.id,
    rbook:[],
    rBooks:[],
    type: this.$route.query.type,
    show:false
}
  },

  methods: {
    async requestRecommend() {
       let res=await inter({type:this.type})
       this.rbook=res.data.list[0]
       console.log(this.rbook,"课程1");
    },
     async rbooks() {
       let res=await inter({type:this.type})
       this.rBooks=res.data.list[0]
       console.log(this.rBooks,"课程2");
    },
    //立即兑换
    atOnce(){
        console.log(4165);
      this.show=true
    },
    onClose(){
        this.show=false
    }
},

  mounted () {
    this.requestRecommend()
    this.rbooks()
  },
}
</script> 

<style scoped lang='scss'>
.store{
    width: 100%;
    background: #f7f8fa;
   
    .name{
        width: 100%;
        height: 260px;
        display: flex;
        background: #fff;
        box-sizing: border-box;
        padding-left: 20px;
        padding-top: 50px;
        img{
            width: 180px;
            height: 180px;
            margin-right: 30px;
        }
        .title{
            font-size: 38px;
            font-weight: 500;
        }
        .num{
            color: #ccc;
            font-size: 18px;
            margin-top: 20px;
        }
        .status{
            width: 100%;
            display: flex;
            margin-top: 60px;
            justify-content: space-between;
            .p{
                color: red;
                font-size: 24px;
                span{
                    font-size:36px;
                }
            }
            .e{
                margin-left: 150px;
               
                font-size: 18px;
                color: #ccc;
            }
        }
    } 
    .course{
        width: 100%;
        background: #fff;
        margin-top: 30px;
        padding-top: 30px;
        padding-left: 30px;
        box-sizing: border-box;
        .p{
            font-size: 38px;
             margin-top: 40px;
        }
        .p2{
            font-size: 30px;
            margin-top: 20px;
        }
    }
    //弹框
  
}
</style>