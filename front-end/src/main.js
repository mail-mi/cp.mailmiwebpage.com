import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bookList from "./books.js"

Vue.config.productionTip = false

let data = {
  books: bookList
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
