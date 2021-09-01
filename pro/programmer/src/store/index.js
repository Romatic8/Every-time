import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,//存储的位置
})
let store= new Vuex.Store({
  state: {
    token:[],
    toke:"",
    pwd:[],
    
  },
  mutations: {
    //获取验证码
    setToken(state,arg){
      state.token=arg
      console.log(arg,"123");
      state.toke=arg.remember_token
    },
    //存储密码
    savePwd(state,obj){
      state.pwd=obj
      console.log(obj,"设置好的密码");
    },
    logout(state){
      state.token=[]
    }
  },
  getters: {
    
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
export default store;
