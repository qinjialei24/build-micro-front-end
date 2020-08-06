import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI, { Container } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps, start, prefetchApps } from "qiankun";

Vue.config.productionTip = false
Vue.use(ElementUI);

const apps = [
  {
    name: 'vueApp',
    entry: 'http://localhost:10000',//默认会加载这个html，解析里面的 js 动态的执行（子应用必须支持跨域） 使用的是 fetch拉取资源
    container: '#vue',
    activeRule: '/vue'
  },
  {
    name: 'reactApp',
    entry: 'http://localhost:20000',//默认会加载这个html，解析里面的 js 动态的执行（子应用必须支持跨域） 使用的是 fetch拉取资源
    container: '#react',
    activeRule: '/react'
  },
]

registerMicroApps(apps)
start({
  prefetch: false
}
)


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
