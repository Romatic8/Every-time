<template>
<div class="course">
    <div class="detail">
        <div class="img">
            <img :src="detailCourse.cover_img" alt="">
        </div>
        <div class="info">
            <p class="name">
                {{detailCourse.title}}
            </p>
            <p class="time">
              {{detailCourse.store_num}}
            </p>
            <p class="time">
                共 {{detailCourse.total_periods}} 课时 | 
                &nbsp;
                {{detailCourse.sales_num}} 人已报名
            </p>
            <p class="time">报名截止时间:  {{detailCourse.end_play_date | fomartTime('yyyy/MM/dd hh:mm') }} </p>
              <p class="time">
                开课时间: {{detailCourse.start_play_date | fomartTime('yyyy/MM/dd hh:mm')}} - {{detailCourse.end_play_date | fomartTime('yyyy/MM/dd hh:mm')}}
            </p>
            <p class="time">
              开课地点: {{detailCourse.province_name +detailCourse.district_name +detailCourse.address }}
            </p>
            
              <p v-if="detailCourse.price==detailCourse.underlined_price"><span  style="color:green;">免费</span></p >
                   <p v-else>
                       <s>{{detailCourse.underlined_price}}</s>
                       <b  style="color:red;" >{{detailCourse.price}}</b>
               </p >
        </div>
        <div class="serve"   >
          <!-- 优惠券单元格 -->
          <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
          />
          <!-- 优惠券列表 -->
          <van-popup
            v-model="showList"
            round
            position="bottom"
            style="height: 90%; padding-top: 4px;"
          >
            <van-coupon-list
              :coupons="coupons"
              :chosen-coupon="chosenCoupon"
              :disabled-coupons="disabledCoupons"
              @change="onChange"
              @exchange="onExchange"
            />
          </van-popup>
             <van-field
                is-link
                readonly
                label="服务"
                @click="shows"
                placeholder="课程售后"
                />
              <van-popup
                v-model="show"
                closeable
                close-icon="close"
                @click-close-icon="close"
                position="bottom"
                :style="{ height: '30%' }"
              >
              <div class="pop-serve">
                            <p class="pop-title" >课程服务</p>
                            <div class="pop-item" v-for="(item,index) in detailCourse.service" :key="index">
                            <p>{{item.name}}</p>
                            <p>{{item.description}}</p>
                            </div>
                        </div>
              </van-popup>
        </div>


          <!-- 教学团队 -->
        <div class="teach">
           <p style="font-size:18px;margin-bottom:10px;">
             教学团队
           </p>
           <ul>
             <li v-for="(item,index) in teacher" :key="index"  @click="$router.push('/detail?id='+item.teacher_id)">
               <img class="img" :src="item.teacher_avatar" alt="">
               <p>
                 {{item.teacher_name}}
               </p>
             </li>
           </ul>
        </div>

        <!-- 课程介绍 -->
        <div class="intro"  v-if="jieshao.course_type != 9">
          <van-tabs  scrollspy  sticky v-model="active">
              <van-tab v-for="(item,index) in couse" :key="index" :title="item">
                             <div class="jieshao">
                                 <p style="font-size:16px;margin-bottom:10px;">
                                      课程介绍
                                </p> 
                                <p v-html="detailCourse. course_details"> </p> 
                            </div>
                <div style="width:100%;height:20px;background:#f0f2f5;margin-top:10px;">
                    <!-- 空白 -->
                </div>
                <div class="box" style="margin-top:50px;">
                    <div class="jieshao">
                     <p style="font-size:16px;margin-bottom:10px; ">
                            课程大纲
                     </p> 
                      <div class="div">
                        <van-collapse v-model="activeNames" v-for="(item,index) in sys" :key="index">
                          <van-collapse-item :title="item.title" >
                               <template>
                                    <div class="play" v-for="(ite,ind) in item.child" :key="ind" >
                                        <p>
                                            {{ite.periods_title}}
                                        </p>
                                         <div class="name">
                                            <p v-for="(it,inds) in ite.teachers" :key="inds">
                                                {{it.teacher_name}}   {{ite.start_play}} - {{ite.end_play}}
                                            </p>
                                         </div>
                                    </div>
                               </template>
                          </van-collapse-item>
                        </van-collapse>    

                      </div>      
                  </div>
                </div>
                 <div style="width:100%;height:20px;background:#f0f2f5;margin-top:10px;">
                     <!-- 空白 -->
                </div>
                 <div class="tu">
                    <p style="font-size:16px;margin-bottom:10px; ">
                            课程评论
                     </p> 
                     <img src="@/assets/empty.png" alt="">
                     <p>
                       暂无评论
                     </p>
                 </div>
              </van-tab>
          </van-tabs>




<!-- 

            <van-tabs v-model="active">
              <van-tab title="课程介绍">
                            <div class="jieshao">
                                 <p style="font-size:16px;margin-bottom:10px;">
                                      课程介绍
                                </p> 
                                <p v-html="detailCourse. course_details"> </p> 
                            </div>
                <div style="width:100%;height:20px;background:#f0f2f5;margin-top:10px;">
                    <!-- 空白 -->
                <!-- </div>
                <div class="box" style="margin-top:50px;">
                    <div class="jieshao">
                     <p style="font-size:16px;margin-bottom:10px; ">
                            课程大纲
                     </p> 
                      <div class="div">
                        <van-collapse v-model="activeNames" v-for="(item,index) in sys" :key="index">
                          <van-collapse-item :title="item.title" >
                               <template>
                                    <div class="play" v-for="(ite,ind) in item.child" :key="ind" >
                                        <p>
                                            {{ite.periods_title}}
                                        </p>
                                         <div class="name">
                                            <p v-for="(it,inds) in ite.teachers" :key="inds">
                                                {{it.teacher_name}}   {{ite.start_play}} - {{ite.end_play}}
                                            </p>
                                         </div>
                                    </div>
                               </template>
                          </van-collapse-item>
                        </van-collapse>    

                      </div>      
                  </div>
                </div>
                 <div style="width:100%;height:20px;background:#f0f2f5;margin-top:10px;"> -->
                     <!-- 空白 -->
                <!-- </div>
                 <div class="tu">
                    <p style="font-size:16px;margin-bottom:10px; ">
                            课程评论
                     </p> 
                     <img src="@/assets/empty.png" alt="">
                     <p>
                       暂无评论
                     </p>
                 </div>
              </van-tab>
              <van-tab title="课程大纲">
                 <div class="jieshao">
                     <p style="font-size:16px;margin-bottom:10px;margin-top:30px;">
                            课程大纲
                     </p> 
                      <div class="div">
                        <van-collapse v-model="activeNames" v-for="(item,index) in sys" :key="index">
                          <van-collapse-item :title="item.title" >
                               <template>
                                    <div class="play" v-for="(ite,ind) in item.child" :key="ind" >
                                        <p>
                                            {{ite.periods_title}}
                                        </p>
                                         <div class="name">
                                            <p v-for="(it,inds) in ite.teachers" :key="inds">
                                                {{it.teacher_name}}   {{ite.start_play}} - {{ite.end_play}}
                                            </p>
                                         </div>
                                    </div>
                               </template>
                          </van-collapse-item>
                        </van-collapse>    

                      </div>      
                  </div>
              </van-tab>
              <van-tab title="课程评价">
                 <div class="tu">
                     <img src="@/assets/empty.png" alt="">
                     <p>
                       暂无评论
                     </p>
                 </div>
              </van-tab>
          </van-tabs> -->
        </div>









        <div class="inclu" v-else>
            <van-tabs v-model="active">
                <van-tab title="包含内容">
                      <p style="font-size:16px;margin-bottom:10px;">
                        包含内容
                      </p>
                       <van-card
                                v-for="(item,index) in list"
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
                                  </p>
                               </template>
                               <template  #price>
                                  <span id="span">
                                       {{item.sales_num+'已报名'}}
                                  </span>
                               </template>
                            </van-card>

                            <div class="jieshao">
                                 <p style="font-size:16px;margin-bottom:10px;">
                                      课程介绍
                                </p> 
                                <p v-html="detailCourse. course_details"> </p> 
                            </div>
                </van-tab>
                <van-tab title="课程介绍">
                           <p style="font-size:16px;margin-bottom:10px;">
                            课程介绍
                          </p>  
                             <van-card
                                v-for="(item,index) in list"
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
                                  </p>
                               </template>
                               <template  #price>
                                  <span id="span">
                                       {{item.sales_num+'已报名'}}
                                  </span>
                               </template>
                            </van-card>
                </van-tab>
              </van-tabs>
        </div>

    </div>
    <div class="btn">
         <van-button @click="baom" type="danger" size="large" round>立即报名</van-button>
    </div>
   
</div>
</template>

<script>
import { comment,sysList} from "@/http/api";
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};
export default {
   components: {},
  data() {
    return {
       chosenCoupon: -1,
       showList:false,
      coupons: [coupon],
      disabledCoupons: [coupon],
      basis_id: this.$route.query.basis_id,
      activeNames:['1'],
      detailCourse: [],
      couse:["课程介绍","课程大纲","课程评价"],
      jieshao:[],//课程介绍
      list:[],
      sys:[],
      active:0,
      info:[],
      show: false,
      teacher:[],
      option: [
        {
          description: "多谢关注  新课程敬请期待",
          name: "课程售后"
        }
      ],
      show_serve: "",

    };
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    shows(){
     this.show=true
      console.log(323);
    },
    close(){
     this.show=false
      console.log(333333);
    },
    //请求数据
    async comt() {
      console.log(this.basis_id);
      let res = await comment(this.basis_id);
      console.log(res, "详情");
      this.detailCourse = res.data.info;
      this.teacher=res.data.teachers
      this.jieshao=res.data.recommendCourse[0]
      this.list=res.data.recommendCourse
    },
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map(option => option.text).join("/");
    },
    async syc(){
      let res= await sysList(
        {id:this.basis_id}
      )
      console.log(res);
      this.sys=res.data
    },
    //立即报名
    baom(){
      console.log(46);
      this.sys.forEach(item=>{
       item.child.forEach(ite=>{
          if(ite.is_try_see==0){
          console.log(452);
          this.$toast.fail("您来晚了哦已经没有名额了")
        }
       })
       
      })
      
    }
  },

  mounted() {
    this.comt();
    this.syc()
  }
};
</script> 

<style scoped lang='scss'>
.course {
  width: 100%;
  background: #f0f2f5;
  .detail {
    width: 100%;
    .img {
      width: 100%;
      img {
        width: 100%;
        height: 500px;
      }
    }
    .info {
      width: 100%;
      margin-top: 10px;
      padding: 30px;
      box-sizing: border-box;

      background: #fff;
      .name {
        font-size: 36px;
        color: #333333;
        margin-top: 20px;
      }
      .time {
        color: #00000073;
        font-size: 28px;
        margin-top: 30px;
        margin-bottom: 20px;
      }
    }
    .serve {
      width: 100%;
      margin-top: 20px;
    }
    //教学团队
    .teach{
      width: 100%;
      height: 300px;
      background: #fff;
      margin-top: 20px;
      padding: 20px;
      box-sizing: border-box;
      ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        box-sizing: border-box;
        li{
          text-align:center;
          img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
        }
      }
    }
    //课程介绍
    .intro{
      width: 100%;
      background: #fff;
        padding: 20px;
      box-sizing: border-box;
      margin-top: 20px;
    
    }
    .inclu{
       width: 100%;
      background: #fff;
        padding: 20px;
      box-sizing: border-box;
      margin-top: 20px;
      .box{
        width: 100%;
        margin-bottom: 30px;
      }
      .jieshao{
        width: 100%;
        height: 200px;
       
        .div{
          width: 100%;
           padding-left: 20px;
          box-sizing: border-box;
            .play{
          width: 100%;
         
          .name{
            font-size: 14px;
            color: #ccc;
          }
        }
        }
      
      }
    }
    .pop-title{
      width: 100%;
      text-align: center;
      font-size: 38px;
      margin-bottom: 20px;
      }
    .tu{
      width:100%;
      text-align: center;
      img{
        width: 300px;
        height: 300px;
      }
      p{
        width: 100%;
      }
    }
  }
  .btn{
    width: 100%;
    height: 200px;
    padding-top: 60px;
    box-sizing: border-box;
    background: #fff;
    text-align: center;
    
  }
}
</style>