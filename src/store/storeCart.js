import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    count: 0,
    dataFavorite: [],
  }),

  // 🔎 GETTERS
  getters: {},

  // ⚙️ ACTIONS
  actions: {
    addToFavorite(product) {
      const existing = this.dataFavorite.find((item) => item.id === product.id);

      if (existing) {
        // 🟡 sudah ada → jangan push
        existing.qty++;
      } else {
        // 🟢 belum ada → push
        this.dataFavorite.push({
          ...product,
          qty: 1,
        });
      }
    },
  },
});
