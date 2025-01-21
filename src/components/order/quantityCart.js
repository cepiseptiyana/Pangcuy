import { reactive } from "vue";

export const quantityKeranjang = reactive({
  count: 0,
  totalHarga: 0,
  cartProduct: [],
  keranjangNotEmpty: false,
});
