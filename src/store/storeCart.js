import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    items: [],
  }),

  // 🔎 GETTERS
  getters: {
    // cek apakah produk sudah ada di cart
    isInFavorite: (state) => {
      return (productId) => state.items.some((item) => item.id === productId);
    },

    // total item (qty)
    totalQty: (state) => state.items.reduce((sum, item) => sum + item.qty, 0),

    // total harga
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.qty, 0),
  },

  // ⚙️ ACTIONS
  actions: {
    addToFavorite(product) {
      const existing = this.items.find((item) => item.id === product.id);

      if (existing) {
        // 🟡 sudah ada → jangan push
        existing.qty++;
      } else {
        // 🟢 belum ada → push
        this.items.push({
          ...product,
          qty: 1,
        });
      }
    },
  },
});
