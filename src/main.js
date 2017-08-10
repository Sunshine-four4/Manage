// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import homepage from '@/components/rightcontent/homepage/homepage.vue'
import schedual from '@/components/rightcontent/schedual/schedual.vue'
import book from '@/components/rightcontent/book/book.vue'
import bookDetail from '@/components/rightcontent/book/bookDetail.vue'
import see from '@/components/rightcontent/see/see.vue'
import department from '@/components/rightcontent/department/department.vue'
import info from '@/components/rightcontent/info/info.vue'
import permission from '@/components/rightcontent/systemset/permission.vue'
import log from '@/components/rightcontent/systemset/log.vue'
import login from '@/components/login/login.vue'
import loginSuccess from '@/components/loginSuccess/loginSuccess.vue'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.config.productionTip = false


const routes = [
	
	{path:'/',redirect:'/login'},
	{path: '/login',component: login},
	{path: '/loginSuccess',component: loginSuccess,
		children:[     
	       { path: 'homepage', component: homepage },	       
	       { path: 'schedual', component: schedual },  
	       { path: 'book', component: book },
	       { path: 'see', component: see },
	       { path:'info',component:info},
	       { path:'department',component:department},
	       { path: 'permission', component: permission },
	       { path: 'log', component: log },
	       { path: 'bookDetail', component: bookDetail },
	       // 使得已进入主页面，就会默认出现首页内容
	       { path: '/', component: homepage },
		]
	}
]

const router = new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
