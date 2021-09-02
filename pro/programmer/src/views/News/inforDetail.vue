<template>
<div class="infor">
   <div class="tu">
       <img :src="details.thumb_img" alt="">
   </div>
 <div class="info">
       <p class="P">
          {{details.title}}
       </p>
       <p class="liu">
          <span>
               {{details.click_rate}}次浏览
          </span>
          <span>
              {{details.created_at | fomartTime('MM-dd') }}
          </span>
       </p>

       <!-- 名字 -->
       <div class="name">
           {{details.description}}
            <p class="bottom"></p>
       </div>

     
 </div>
   <div class="div" v-html="details.content">

       </div>
</div>
</template>

<script>
import { inforDetail } from "@/http/api";
export default {
  components: {},
  data () {
    return {
    information_id:this.$route.query.information_id,
    details:[]
}
  },

  methods: {
    async infor(){
        let res= await inforDetail({information_id:this.information_id})
        console.log(res,"detail");
        this.details=res.data
    }
},

  mounted () {
    this.infor()
    console.log(this.information_id,"传来的");
  },
}
</script> 

<style scoped lang='scss'>
.infor{
    width: 100%;
    .tu{
        width: 100%;
        img{
            width: 100%;
            height: 650px;
        }
    }
   .info{
       width: 100%;
       padding-left: 30px;
       box-sizing: border-box;
      .liu{
          width: 100%;
           height: 80px;
         align-items: center;
          display: flex;
          justify-content: space-between;
          color: #ccc;
           margin-bottom: 30px;
          span{
              margin-right: 20px;
          }
      }
   
      .name{
          width: 100%;
          height: 200px;
          line-height: 100px;
          text-align: center;
          color: gray;
          p{
              width: 150px;
              height: 30px;
               margin: auto;
              border-bottom:1px solid #ccc;
          }
      }
   }
    
   .p{
           width: 100%;
           font-size: 44px !important;
           font-weight: 700;
           height: 45px;
           line-height: 45px;
          margin-bottom: 20px;
       }
        .div{
         width: 100%;
         height: 100px;
         font-size: 36px;
         font-weight: 700;
     }
}
</style>