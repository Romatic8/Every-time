<template>
<div class="record">
   <div class="top">
        <van-tabs sticky>
        <van-tab title="全部">
           <div class="tu">
                <img src="@/assets/empty.png" alt="">
                <p>
                    暂无记录
                </p>
           </div>
        </van-tab>
        <van-tab title="待发货">
             <div class="tu">
                <img src="@/assets/empty.png" alt="">
                 <p>
                    暂无记录
                </p>
           </div>
        </van-tab>
        <van-tab title="已发货">
             <div class="tu">
                <img src="@/assets/empty.png" alt="">
                 <p>
                    暂无记录
                </p>
           </div>
        </van-tab>
        <van-tab title="已完成">
             <div class="tu">
                <img src="@/assets/empty.png" alt="">
                 <p>
                    暂无记录
                </p>
           </div>
        </van-tab>
    </van-tabs>
   </div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },

  methods: {},

  mounted () {
  },
}
</script> 

<style scoped lang='scss'>
.record{
    width: 100%;
    .top{
        width: 100%;
        //暂无记录
        .tu{
            width: 100%;
            text-align: center;
            img{
                width: 350px;
                height: 350px;
                margin: auto
            }
            p{
                text-align: center;
                margin-top: 20px;
            }
        }
    }
}
</style>