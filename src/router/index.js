import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index.vue'
import VueResource from 'vue-resource'
import DetailPage from '../pages/detail.vue'
import DetailAnaPage from '../pages/detail/analysis.vue'
import DetailCouPage from '../pages/detail/count.vue'
import DetailForPage from '../pages/detail/forecast.vue'
import DetailPubPage from '../pages/detail/publish.vue'
import OrderListPage from '../pages/orderList.vue'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [{
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: IndexPage
  },
  {
    path: '/orderList',
    component: OrderListPage
  },
  {
    path: '/detail',
    component: DetailPage,
    redirect: '/detail/count',
    children: [{
      path: 'count',
      component: DetailCouPage
    },
    {
      path: 'forecast',
      component: DetailForPage
    },

    {
      path: 'analysis',
      component: DetailAnaPage
    },
    {
      path: 'publish',
      component: DetailPubPage
    }]
  }]
})
