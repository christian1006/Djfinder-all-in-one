import Vue from 'vue'
import Router from 'vue-router'
import AllCards from '../components/AllCards.vue'
import AllProfiles from '../components/AllProfiles.vue'
import Profile from '../components/Profile.vue'
import InputForm from '../components/InputForm.vue'
import CoverPage from '../components/CoverPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CoverPage',
      component: CoverPage
    },
    {
      path: '/cards',
      name: 'Cards',
      component: AllCards
    },
    {
      path: '/profiles',
      name: 'Profiles',
      component: AllProfiles
    },
    {
      path: '/register',
      name: 'InputForm',
      component: InputForm
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile,
      props: true 
    },
    
  ]
})