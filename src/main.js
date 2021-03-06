import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n'
import ElementUI from 'element-ui'
import moment from 'moment'
import lodash from 'lodash'

Vue.config.productionTip = false


moment.locale('zh-cn')
Vue.prototype.$moment = moment

Vue.prototype._ = lodash

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  i18n
})
