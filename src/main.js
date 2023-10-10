import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import BananaVue2BookPlugin from '@bananajs/vue2-book-component'
import '@bananajs/vue2-book-component/BananaVue2Book.css'

import vGallery from 'v-gallery'

Vue.use(vGallery)

Vue.use(ElementUI, { locale })
Vue.use(BananaVue2BookPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
