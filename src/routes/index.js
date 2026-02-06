import { createRouter, createWebHistory } from 'vue-router';
import ProjectPage from '@/components/project/project';
import AboutPage from '@/components/about/about'
import HomePage from '@/components/unit/home'
import CvsPage from '@/components/admin/cvsPage';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/projects', name: 'Projects', component: ProjectPage},
  { path: '/cvs', name: 'Cvs', component: CvsPage},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;