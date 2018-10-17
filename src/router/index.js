import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '@/components/login';
import mean from '@/components/mean';
import index from '@/components/module/index';
import list from '@/components/module/list/list';
import img from '@/components/module/img/img';
import brand from '@/components/module/product/brand';
import classify from '@/components/module/product/classify';
import product from '@/components/module/product/product';
import listInfo from '@/components/module/list/list-info';
Vue.use(VueRouter);

export default new VueRouter({
    mode:"history",
	routes:[
		{
			path:"/",
			component:login,
			redirect:"/login"
        },
        {
			path:"/login",
			component:login
        },
        {
			path:"/mean",
            component:mean,
            redirect:"/mean/index",
            children:[
               {
                path:"/mean/index",
                component:index
               },
               {
                path:"/mean/list",
                component:list
               },
               {
                path:"/mean/list/:info",
                    component:listInfo
                },
               {
                path:"/mean/img",
                component:img
               },
               {
                path:"/mean/product/brand",
                component:brand
               },
               {
                path:"/mean/product/classify",
                component:classify
               },
               {
                path:"/mean/product/product",
                component:product
               }
            ]
        }
    ]
})