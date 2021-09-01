<template>
    <div class="calender">
        <div class="top">
            <!-- <div class="preDate"> -->
            <!-- <button class="preYear" @click="getMyDate(year-parseInt(1,10),month)">&lt;&lt;</button> -->

            <!-- <button class="preMonth" >&lt;</button> -->
            <!-- </div> -->
            <!-- <div class="data_riqi">
                <img src="@/assets/arrow-left-filling.png" alt="" @click="getMyDate(year,month-parseInt(1,10))" class="left_but">
                <span class="riqi">{{year}}年{{month}}月</span>
                <img class="right_but" src="@/assets/arrow-right-filling.png" alt="" @click="getMyDate(year,month+parseInt(1,10))">
            </div> -->
            <!-- <div class="nextDate"> -->

            <!-- <button class="nextMonth" >&gt;</button> -->
            <!-- <button class="nextYear" @click="getMyDate(year+parseInt(1,10),month)">&gt;&gt;</button> -->
            <!-- </div> -->
        </div>

        <div class="bottom">
          <van-calendar
             :show-subtitle="true"
              row-height="40px"
              :show-mark="false"
              :show-title ="false"
              :poppable="false"
              :formatter="formatter"
              :show-confirm="false"
              :style="{ height: '500px' }"
            />
            <!-- <table>
                <thead>
                    <tr>
                        <th v-for="(item,index) in weeks" :key="index">
                            {{item.name}}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in all" :key="index">
                        <th  v-for="(item2,index) in item" :key="index" v-if="item2===day" class="active">{{item2}}</th>
                        <th v-else-if="item2>0">{{item2}}</th>
                        <th v-else></th>
                    </tr>
                </tbody>
            </table> -->
        </div>
    </div>
</template>
 
<script>
  import {datas} from "@/http/api";

export default {
  name: "calender",
  data() {
    return {
     
      year: 2019, // 设置当前年份
      month: 8, // 设置当前月份
      day: 1, // 设置当前号数
      all: [], // 日历表格数组
      weeks: [
        { id: 0, name: "日" },
        { id: 1, name: "一" },
        { id: 2, name: "二" },
        { id: 3, name: "三" },
        { id: 4, name: "四" },
        { id: 5, name: "五" },
        { id: 6, name: "六" }
      ]
    };
  },
  beforeMount() {
    this.getMyDate();
  },
  async mounted(){
   const today=new Date();
   const year=today.getFullYear();
   const month_new=today.getMonth()+1;
   const date_new=today.getDate();
   let res =await datas({date:`${year}-${month_new}-${date_new}`})
   console.log(`${year}-${month_new}-${date_new}`,"日历");
   console.log(res,"日历");
 },
  methods: {
     formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();
       const today=new Date();
        const year=today.getFullYear()
        const month_new=today.getMonth()+1
        const date_new=today.getDate()
      if(month_new==month&&date_new==date){
        day.bottomInfo="+1"
        day.text="√"
      }

      return day;
    },
    getMyDate(year = false, month = false) {
      let obj; // 初始化的时间对象
      let first = []; // 第1排的数据
      let second = []; // 第2-6排的数据
      let firstDay; // 判断当月第一天是周几，作为日期对象的开头
      if (year && month) {
        // 处理月份越界问题
        if (month < 1) {
          this.year -= 1;
          this.month = 12;
        } else if (month > 12) {
          this.year += 1;
          this.month = 1;
        } else {
          this.month = month;
          this.year = year;
        }
        obj = new Date(this.year, month, this.day);
        this.all = []; // 每次请求时把日期数组清空
      } else {
        obj = new Date();
        this.year = obj.getFullYear(); // 查询年份
        this.month = obj.getMonth() + 1; // 查询月份
        this.day = obj.getDate(); // 查询多少号
      }

      let s = this.year + "/" + this.month + "/" + 1;
      firstDay = new Date(s).getDay(); // 查询当月的第一天是周几
      let days = new Date(this.year, this.month, 0).getDate(); // 判断当前月份有多少天

      // 生成日历表格
      // 生成第一排的数据
      let index;
      let data1 = [7, 1, 2, 3, 4, 5, 6];
      data1.forEach((i, item) => {
        if (item === firstDay) {
          index = i;
        }
      });
      for (let i = 0; i < 7; i++) {
        if (i < index) {
          first.push(0);
        } else {
          first.push(i - index + 1);
        }
      }

      // 生成第2-6排数据
      let index2 = first[first.length - 1];
      for (let i = 0; i < 5; i++) {
        let d = [];
        for (let j = 1; j < 8; j++) {
          if (i * 7 + index2 + j > days) {
            d.push(0);
          } else {
            d.push(i * 7 + index2 + j);
          }
        }
        second.push(d);
      }
      // 将第1排和第2-6排数据合到一起
      this.all.push(first);
      second.forEach(x => this.all.push(x));
    },
    // dian() {
     // console.log(123);
    // }
  },
 
};
</script>
 
<style lang="scss" scoped>
.data_riqi {
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  .riqi {
    margin: 0 10px;
    font-size: 35px;
  }
}
.left_but,
.right_but {
  width: 40px;
  height: 40px;
}
.calender {
  width: 700px;
  height: 600px;
  box-shadow: 0 0 1px #9e9c9c;
  display: flex;
  flex-flow: column;
  margin-left: 0px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
}
.van-calendar__selected-day {
   bottom: -2px !important;
}
.top {
  width: 700px;
  line-height: 40px;
  color: #696868;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.bottom {
  flex: 7;
}
table {
  width: 100%;
  height: 100%;
}
th {
  color: #6b6a6a;
  font-weight: normal;
  transition: all 0.5s;
  border-radius: 50%;
  height: 36px;
}
tbody > tr > th:hover {
  background-color: #e5e6e6;
}
.active,
.active:hover {
  background-color: #fb4023;
  color: white;
}
.top > div:nth-child(2) {
  width: 100px;
  height: 100%;
  margin: 0 auto;
}
.preDate,
.nextDate {
  display: flex;
}
.preYear,
.nextYear {
  flex: 2;
}
.preMonth,
.nextMonth {
  flex: 1;
}
.preDate > button,
.nextDate > button {
  border: none;
  background-color: white;
  font-size: 17px;
  color: #999999;
  transition: color 0.8s;
  font-weight: 100;
  outline: none;
}
.preMonth {
  text-align: left;
}
.nextMonth {
  text-align: right;
}
.preMonth:hover,
.nextMonth:hover,
.preYear:hover,
.nextYear:hover {
  color: red;
  cursor: pointer;
}
</style>