import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import AboutUs from '../views/AboutUs'
import Contact from '../views/Contact'
import Rental from '../views/Rental'
import Services from '../views/Services'

Vue.use(VueRouter);

const router = new VueRouter({
  routes : [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/rental',
      name: 'Rental',
      component: Rental
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
  ],
  base: '/',
  mode: 'history'
});


export default router;
