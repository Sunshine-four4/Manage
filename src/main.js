// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import example from '@/components/rightcontent/exampleform/exampleform.vue'
import homepage from '@/components/rightcontent/homepage/homepage.vue'
import hotmovie from '@/components/rightcontent/hotmovie/hotmovie.vue'
import searchmovie from '@/components/rightcontent/searchmovie/searchmovie.vue'
import formedit from '@/components/rightcontent/formedit/formedit.vue'
import textedit from '@/components/rightcontent/textedit/textedit.vue'
import smallcomponent from '@/components/rightcontent/smallcomponent/smallcomponent.vue'
import nopermit from '@/components/rightcontent/err/401.vue'
import err from '@/components/rightcontent/err/404.vue'
import permission from '@/components/rightcontent/systemset/permission.vue'
import log from '@/components/rightcontent/systemset/log.vue'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false


const routes = [
	{path: '/example',component: example},
	{path: '/homepage',component: homepage},
	{path: '/hotmovie',component: hotmovie},
	{path: '/searchmovie',component: searchmovie},
	{path: '/formedit',component: formedit},
	{path: '/textedit',component: textedit},
	{path: '/smallcomponent',component: smallcomponent},
	{path: '/401',component: nopermit},
	{path: '/404',component: err},
	{path: '/permission',component: permission},
	{path: '/log',component:log},
	{path:'*',redirect:'/homepage'}
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
