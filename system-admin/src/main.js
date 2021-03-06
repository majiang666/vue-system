/* jshint esversion: 6 */
import Vue from "vue";
import App from "./App.vue";
import router from './router/index';
Vue.config.productionTip = false;
// let bus = new Vue();
// Vue.prototype.bus = bus;
import axios from 'axios';
Vue.prototype.$ajax = axios;

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  // console.log(next);
   if (to.matched.some(record => record.meta.requiresAuth)) {
       //这里判断用户是否登录，我例子中是验证本地存储是否有token
       if(window.location.href.indexOf("login") < 0){
         if(sessionStorage.getItem('accessToken') != "1") {
           next({
               path: '/login',                                    
               query: { 
                 redirect: to.fullPath
               }
           })
         } else {
             next();
         }
       }else {
         next();
     }  
   } else {
       next(); // 确保一定要调用 next()
   }
})


new Vue({
  render: h => h(App),
  router
  // store
}).$mount("#app");
