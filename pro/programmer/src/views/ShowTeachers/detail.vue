<template>
<div class="detail">
       <div class="card" >
            <van-card
                :title="Tealist.real_name"
                :thumb="Tealist.avatar"
                class="cad"
            />
        </div>

       <div class="tabs">
            <van-tabs v-model="active">
                <van-tab title="讲师介绍">
                    <span class="intro">老师简介:</span>
                    <p>
                        {{Tealist.introduction}}
                    </p>
                </van-tab>
                <van-tab title="主讲课程">
                    <template>
                        <div class="cads">
                            <van-card
                                v-for="(item,index) in courseList"
                                :key="index"
                                :title="item.title"
                                :thumb="item.cover_img"
                                 :thumb-link="'/detailCourse?basis_id='+item.id"
                            >
                               <template #footer>
                                   <p v-if="item.price==item.underlined_price"><span  style="color:green;">免费</span></p >
                                   <p v-else>
                                       <s>{{item.underlined_price}}</s>
                                       <b  style="color:red;" >{{item.price}} </b>
                                  </p >
                               </template>
                               <template  #price>
                                  <span id="span">
                                       {{item.sales_num+'已报名'}}
                                  </span>
                               </template>
                            </van-card>
                        </div>
                    </template>
                </van-tab>
            </van-tabs>
       </div>
</div>
</template>

<script>

import { detail,course } from "@/http/api";
export default {
  components: {},
  data () {
    return {
     id:this.$route.query.id,
    //  teacher_id:this.$route.query.teacher_id,
     Tealist:[],
     active:2,
     courseList:[]
}
  },

  methods: {
    async detal(){
         let res=await detail(this.id)
         console.log(res,"id");
         this.Tealist=res.data.teacher
    },
    //主讲课程
    async main(){
        console.log(this.id);
        let res= await course({teacher_id:this.id})
        console.log(res,"主管回复");
         this.courseList=res.data.list
    }
},

  mounted () {
   this.detal()
   this.main()
  
  },
}
</script> 

<style scoped lang='scss'>
.detail{
    width: 100%;
    .card{
        width: 100%;
        .cad{
            line-height: 30px;
            position: relative;
        }
        .van-card__desc {
            max-height: 60px;
            color: #646566;
            line-height: 48px;
        }
        .van-card__title {
            max-height: 60px;
            font-weight: 500;
            line-height: 35px;
        }
    }
    .tabs{
        width: 100%;
        padding-left: 40px;
        box-sizing: border-box;
        .intro{
            color: #ccc;
            display: inline-block;
            margin-bottom: 30px;
        }
    }
}
</style>