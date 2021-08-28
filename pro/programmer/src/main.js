import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http/service'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'amfe-flexible'
import './iconfont/iconfont.css'
import * as filters from './http/filter';

//配置vantUI组件库
import Vant from 'vant';
import 'vant/lib/index.css';

// import {baseUrl} from '@/config'
// console.log(baseUrl);
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

Vue.use(Vant);
Vue.use(ElementUI);
// 把axios挂载到Vue的原型上，这样的话项目中任何一个组件都可以使用了
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')