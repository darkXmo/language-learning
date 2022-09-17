import { RouteRecordRaw } from 'vue-router';
import PageNotFound from '@m/error/404-page.vue';
// 所有路由
// id由 `uniqueId-phone` 构成
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/modules/home/home-page.vue')
  },
  { path: '/:pathMatch(.*)*', component: PageNotFound }
];
export default routes;
