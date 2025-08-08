import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/homePage.vue';
import AboutUs from '../components/aboutUs.vue';
import Services from '../components/servicesPage.vue';
import Contact from '../components/contactPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about-us', component: AboutUs },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

