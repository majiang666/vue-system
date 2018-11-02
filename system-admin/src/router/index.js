import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '@/components/login';
import index from '@/components/module/index';
import list from '@/components/module/list/list';
import listInfo from '@/components/module/list/list-info';
import home from '@/components/module/home';
Vue.use(VueRouter);

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            component:index,
            redirect:"/mean/home"
        },
        {
            path:"/login",
            component:login
        },
        {
            path:"/mean",
            component:index,
            redirect:"/mean/home",
            children:[
                {
                    path:"/mean/home",
                    component:home,
                    meta: { 
                        requiresAuth: true 
                    }
                },
                {
                    path:"/mean/list",
                    component:list,
                    meta: { 
                        requiresAuth: true 
                    }
                },
                {
                    path:"/mean/list/:info",
                    component:listInfo,
                    meta: { 
                        requiresAuth: true 
                    }
                }
            ]
        }
    ]
})