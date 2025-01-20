import { createMemoryHistory, createRouter } from "vue-router";
import home from "@/components/home.vue";
import product from "@/components/product.vue";

const routes = [
  { path: "/", component: home },
  { path: "/product", component: product },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
