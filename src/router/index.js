import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home-page'
import Attention from '@/components/attention'
import Personal from '@/components/personal'
import AssetAllocation from '@/components/asset-allocation'
import Recommend from '@/components/recommend'
import CombinedReport from '@/components/combined-report'
import InvestmentReport from '@/components/investment-report'
import RiskRating from '@/components/risk-rating'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    }, {
      path: '/attention',
      name: 'attention',
      component: Attention
    }, {
      path: '/personal',
      name: 'personal',
      component: Personal
    }, {
      path: '/assetAllocation',
      name: 'asset',
      component: AssetAllocation
    }, {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    }, {
      path: '/combinedReport',
      name: 'report',
      component: CombinedReport
    }, {
      path: '/investmentReport',
      name: 'investReport',
      component: InvestmentReport
    }, {
      path: '/riskRating',
      name: 'riskRating',
      component: RiskRating
    }
  ]
})
