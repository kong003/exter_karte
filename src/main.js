/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import VueRouter from 'vue-router'

Vue.config.productionTip = false

//Routes

import mapPage from './pages/mapPage.vue'
import homePage from './pages/homePage.vue'
import notFound from './pages/notFound.vue'
import searchPage from './pages/searchPage.vue'

const routes = [
  {
    path: '/map', 
    component: mapPage,
    name: 'Map'
  },
  {
    path: '/map/:id', 
    component: mapPage,
    name: 'Map'
  },
  {
    path: '/', 
    component: mapPage,
    name: 'Home'
  },
  {
    path: '*',
    component: notFound,
    name: '404'
  },
  {
    path: '/search',
    component: searchPage,
    name: 'UserSearch'
  }

]

const router = new VueRouter({
  routes
})


L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


