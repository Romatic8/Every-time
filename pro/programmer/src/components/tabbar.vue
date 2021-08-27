<template>
<div class="tabbar">
   <ul>
       <li v-for="(item,index) in tabbar_list" :key="index">
           <router-link :to="item.url">
             <img @click="fn(index)" class="t_icon" :src="active==index ? item.nav_img_checked : item.nav_img" alt="">
              <p class="t_name">
                  {{item.name}}
              </p>
           </router-link>
       </li>
        
   </ul>
</div>
</template>

<script>
import {tabbar} from "@/http/api"
export default {
  components: {},
  data() {
    return {
        tabbar_list:[],
        active:0
    };
  },

   async created(){
     let res =await tabbar()
     console.log(res.data.index,"222");
     this.tabbar_list=res.data.index
  },

  methods: {
      fn(index){
          this.active=index
      }
  },

  mounted() {}
};
</script> 

<style scoped lang='scss'>
.tabbar {
  width: 100%;
  height: 105px;
  background: yellow;
  position: fixed;
  bottom: 0px;
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    li {
      width: 20%;
      text-align: center;
      padding-top: 2px;
      box-sizing: border-box;
      .t_icon{
          width: 55px;
          height: 60px;
          
      }
      .router-link-active{
          color: red;
      }
    }
   
  }
}
</style>