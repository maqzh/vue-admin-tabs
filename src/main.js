// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
// import router from './router'
import VueTaber from '@/utils/vue-tabs.js'
const vueTaber = new VueTaber({
  persist: true
})
Vue.use(VueTaber)

// load vuex i18n module
import vuexI18n from 'vuex-i18n'
import VueResource from 'vue-resource'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// AdminLTE
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/dist/js/app.min.js'
// font-awesome
import 'font-awesome/css/font-awesome.min.css'
// layer
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue)
// common config
import '../static/css/style.css'

// components
import App from './App'

Vue.use(Vuex)
Vue.use(VueResource)

// initialize the vuex store using the vuex module. note that you can change the
//  name of the module if you wish
const store = new Vuex.Store()
// initialize the internationalization plugin on the vue instance. note that
// the store must be passed to the plugin. the plugin will then generate some
// helper functions for components (i.e. this.$i18n.set, this.$t) and on the vue
// instance (i.e. Vue.i18n.set).
Vue.use(vuexI18n.plugin, store)

Vue.config.productionTip = false
// 开启debug模式
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  taber: vueTaber,
  template: '<App/>',
  components: { App }
})
