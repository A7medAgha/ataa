import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Public Routes
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/public/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/public/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/public/Register.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/public/Contact.vue')
  },
  {
    path: '/our-devices',
    name: 'OurDevices',
    component: () => import('../views/public/OurDevices.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/public/AboutUs.vue')
  },

  // Donor Routes
  {
    path: '/donor/dashboard',
    name: 'DonorDashboard',
    component: () => import('../views/donor/Dashboard.vue')
  },
  {
    path: '/donor/donations',
    name: 'DonorDonations',
    component: () => import('../views/donor/Donations.vue')
  },
  {
    path: '/donor/new-donation',
    name: 'NewDonation',
    component: () => import('../views/donor/NewDonation.vue')
  },
  {
    path: '/donor/messages',
    name: 'DonorMessages',
    component: () => import('../views/donor/Messages.vue')
  },
  {
    path: '/donor/settings',
    name: 'DonorSettings',
    component: () => import('../views/donor/Settings.vue')
  },

  // NGO Routes
  {
    path: '/ngo/dashboard',
    name: 'NGODashboard',
    component: () => import('../views/ngo/Dashboard.vue')
  },
  {
    path: '/ngo/received',
    name: 'NGOReceived',
    component: () => import('../views/ngo/Received.vue')
  },
  {
    path: '/ngo/new-request',
    name: 'NewRequest',
    component: () => import('../views/ngo/NewRequest.vue')
  },
  {
    path: '/ngo/messages',
    name: 'NGOMessages',
    component: () => import('../views/ngo/Messages.vue')
  },
  {
    path: '/ngo/settings',
    name: 'NGOSettings',
    component: () => import('../views/ngo/Settings.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
