import Vue from 'vue'
import Router from 'vue-router'
import TempleHome from "@/components/TempleHome.vue"
import AboutTemple from "@/components/AboutTemple.vue"
import SampleView from "@/components/SampleView.vue"
import ServicesView from "@/components/ServicesView.vue"
import ContactUs from "@/components/ContactUs.vue"
import DonationsView from "@/components/DonationsView.vue"
import StoryView from "@/components/StoryView.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'TempleHome',
      component: TempleHome
    },
    {
      path: '/about',
      name: 'AboutTemple',
      component: AboutTemple
    },
    {
      path: '/events',
      name: 'SampleView',
      component: SampleView
    },
    {
      path: '/services',
      name: 'ServicesView',
      component: ServicesView
    },
    {
      path: '/donations',
      name: 'DonationsView',
      component: DonationsView
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/story',
      name: 'StoryView',
      component: StoryView
    },
    {
      path: '/',
      name: 'TempleHome',
      component: TempleHome
    }
  ]
})