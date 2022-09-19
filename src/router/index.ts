import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // `routes: routes` 的缩写
});

router.afterEach((to) => {
  if (to.meta.title) {
    const title = to.meta.title as string;
    if (title) {
      document.title = "诉前要素收集表-" + title;
    } else {
      document.title = "诉前要素收集表";
    }
  }
});

export default router;
