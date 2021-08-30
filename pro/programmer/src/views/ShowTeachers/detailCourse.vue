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
                共 {{detailCourse.total_periods}} 课时 | 
                &nbsp;
                {{detailCourse.sales_num}} 人已报名
            </p>
              <p class="time">
                开课时间: {{detailCourse.start_play_date | fomartTime('yyyy/MM/dd hh:mm')}} - {{detailCourse.end_play_date | fomartTime('yyyy/MM/dd hh:mm')}}
            </p>
             <p class="time"  :style="{color:'red'}">
               免费
            </p>
        </div>
        <div class="serve">
             <van-field
              
                is-link
                readonly
                label="服务"
                placeholder="课程售后"
                @click="show = true"
                />
                <!-- <van-popup v-model="show" round position="bottom"> --> 
                <!-- <van-cascader
                     :options="options"
                    @close="show = false"
                    @finish="onFinish"
                >
                  <template #title>{{detailCourse.service[0].name}}  <br/>
                     {{detailCourse.service[0].description}}
                   </template>
                </van-cascader> -->
                   <van-popup
                        class="course-serve-popup"
                        v-show="show"
                        v-model="show_serve"
                        closeable
                          close-icon="close"
                          @click-close-icon="show=false"
                        position="bottom"
                        :style="{ height: '60%' }"
                        >
                        <div class="pop-serve">
                            <p class="pop-title">课程服务</p>
                            <div class="pop-item" v-for="(item,index) in detailCourse.service" :key="index">
                            <p>{{item.name}}</p>
                            <p>{{item.description}}</p>
                            </div>
                        </div>
                    </van-popup>
                <!-- </van-popup> -->
        </div>
    </div>
</div>
</template>

<script>
import { comment } from "@/http/api";
export default {
  components: {},
  data() {
    return {
      basis_id: this.$route.query.basis_id,
      detailCourse: [],
      show: false,
      option: [
        {
          description: "多谢关注  新课程敬请期待",
          name: "课程售后"
        }
      ],
      show_serve: ""
    };
  },

  methods: {
    //请求数据
    async comt() {
      let res = await comment(this.basis_id);
      console.log(res.data.info, "详情");
      this.detailCourse = res.data.info;
    },
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map(option => option.text).join("/");
    }
  },

  mounted() {
    this.comt();
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
  }
}
</style>