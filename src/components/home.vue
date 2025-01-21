<script setup>
import { ref } from "vue";
import navbar from "./navbar/nav.vue";
import jumbotron from "./jumbotron/jumbotron.vue";
import content1 from "./order/content1.vue";
import systemOrder from "./order/systemOrder.vue";
import footerr from "./footer/footer.vue";

// Imgage
import pangsit5 from "../assets/images/pangsit5.jpg";
import pangsit7 from "../assets/images/pangsit7.jpg";
import basomini from "../assets/images/basomini.png";
import basoberurat from "../assets/images/basoberurat.png";
import esteh from "../assets/images/esteh.jpg";

// Product
// let products = ref([
//   {
//     id: 1,
//     image: pangsit5,
//     name: "pangsit",
//     text: `
//     pilih sesuai selera kamu <br>
//     1. Pangcuy Dowerr <br>
//     2. Pangcuy Chill oil <br>
//     3. Pangcuy Goreng <br>
//     4. Pangcuy Kuah`,
//     price: 13000,
//   },
//   {
//     id: 2,
//     image: pangsit7,
//     name: "mie dower",
//     text: "Sensasi level pedas mulai dari level 1 sampai 3",
//     price: 10000,
//   },
//   {
//     id: 3,
//     image: basomini,
//     text: "Ciri khas baso dengan ukuran kecil",
//     name: "baso mini",
//     price: 8000,
//   },
//   {
//     id: 4,
//     image: basoberurat,
//     text: "Baso berurat home made",
//     name: "baso berurat",
//     price: 13000,
//   },
//   {
//     id: 5,
//     image: esteh,
//     text: "ES Teh Manis Seger 300 ML",
//     name: "ES Teh Manis",
//     price: 3000,
//   },
// ]);

// JS Orderr
// import { quantityKeranjang } from "./order/quantityCart.js";

// Fungsi order
// function order(event, product) {
//   event.preventDefault();
//   // Find
//   let cartItem = quantityKeranjang.cartProduct.find((products) => {
//     return product.id == products.id;
//   });

//   // cek
//   // IF !cartproduct kosong
//   if (quantityKeranjang.cartProduct != 0) {
//     // FIND
//     if (!cartItem) {
//       quantityKeranjang.cartProduct.push({
//         ...product,
//         quantity: 1,
//         total: product.price,
//       });
//       quantityKeranjang.count++;
//       quantityKeranjang.totalHarga += product.price;
//     } else {
//       // jika ada barang yang sama
//       let elseAddProductNotIdSame = quantityKeranjang.cartProduct.map(
//         (products) => {
//           let productSementara = products;
//           // Jika product yang di kirim client == cartProduct.count
//           if (product.id == products.id) {
//             quantityKeranjang.count++;
//             productSementara.quantity++;
//             productSementara.total =
//               productSementara.price * productSementara.quantity;
//             quantityKeranjang.totalHarga += product.price;
//           }
//           // return semua product
//           return productSementara;
//         }
//       );
//       // di isi array baru
//       quantityKeranjang.cartProduct = elseAddProductNotIdSame;
//     }
//   } else {
//     quantityKeranjang.cartProduct.push({
//       ...product,
//       quantity: 1,
//       total: product.price,
//     });
//     quantityKeranjang.count++;
//     quantityKeranjang.totalHarga += product.price;
//     quantityKeranjang.keranjangNotEmpty = false;
//   }
// }
</script>

<template>
  <!-- nav -->
  <navbar />

  <!-- jumbotron -->
  <jumbotron />

  <!-- Content-1 -->
  <content1 />

  <!-- produk -->
  <systemOrder />

  <!-- footer -->
  <footerr />
</template>

<style scoped></style>
