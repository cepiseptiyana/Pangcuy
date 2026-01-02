import { createMemoryHistory, createRouter } from "vue-router";

import Home from "@/Pages/Home.vue";
// import Product from "@/Pages/Products.vue";
import Transaksi from "@/Pages/Transaksi.vue";

const routes = [
  { path: "/", component: Home },
  // { path: "/product", component: Product },
  { path: "/transaksi", component: Transaksi },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
