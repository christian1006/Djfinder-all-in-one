import Vue from 'vue'
import Router from 'vue-router'
import AllCards from '../components/AllCards.vue'
import AllProfiles from '../components/AllProfiles.vue'
import Profile from '../components/Profile.vue'
import InputForm from '../components/InputForm.vue'
import CoverPage from '../components/CoverPage.vue'
import Login from '../components/Login.vue'

import Auth from '@okta/okta-vue'

import Config from '../../config/index'
var config = require('../../config')

Vue.use(Auth, {
  issuer: 'https://dev-639391.oktapreview.com/oauth2/default',
  client_id: '0oafcjpixmg1QOqQo0h7',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})


// Router.beforeEach(Vue.prototype.$auth.authRedirectGuard())


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
    {
      path: '/login',
      name: 'Login',
      component: Login,
      props: true 
    },
    { 
      path: '/implicit/callback', 
      component: Auth.handleCallback() 
    },
    
  ],
  mode: 'history'
})