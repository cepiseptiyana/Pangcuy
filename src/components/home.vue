<script setup>
import { ref } from "vue";
import navbar from "./navbar/nav.vue";
import jumbotron from "./jumbotron/jumbotron.vue";
import content1 from "./order/content1.vue";
import footerr from "./footer/footer.vue";

// Product
let products = ref([
  {
    id: 1,
    image: "pangsit5.jpg",
    name: "pangsit",
    text: `
    pilih sesuai selera kamu <br>
    1. Pangcuy Dowerr <br>
    2. Pangcuy Chill oil <br>
    3. Pangcuy Goreng <br>
    4. Pangcuy Kuah`,
    price: 13000,
  },
  {
    id: 2,
    image: "pangsit7.jpg",
    name: "mie dower",
    text: "Sensasi level pedas mulai dari level 1 sampai 3",
    price: 10000,
  },
  {
    id: 3,
    image: "basomini.png",
    text: "Ciri khas baso dengan ukuran kecil",
    name: "baso mini",
    price: 8000,
  },
  {
    id: 4,
    image: "basoberurat.png",
    text: "Baso berurat home made",
    name: "baso berurat",
    price: 13000,
  },
  {
    id: 5,
    image: "esteh.jpg",
    text: "ES Teh Manis Seger 300 ML",
    name: "ES Teh Manis",
    price: 3000,
  },
]);

// Order Product Add To Shopping-Cart
let cartProduct = ref([]);
let keranjangNotEmpty = ref(true);
let quantityKeranjang = ref(0);
let totalHarga = ref(0);

function order(event, product) {
  event.preventDefault();
  // Find
  let cartItem = cartProduct.value.find((products) => {
    return product.id == products.id;
  });

  // cek
  // IF !cartproduct kosong
  if (cartProduct.value != 0) {
    // FIND
    if (!cartItem) {
      cartProduct.value.push({ ...product, quantity: 1, total: product.price });
      quantityKeranjang.value++;
      totalHarga.value += product.price;
    } else {
      let elseAddProductNotIdSame = cartProduct.value.map((products) => {
        let productSementara = products;
        // Jika product yang di kirim client != product terakhir di dalam array "cartProduct.value"
        if (product.id == products.id) {
          quantityKeranjang.value++;
          productSementara.quantity++;
          productSementara.total =
            productSementara.price * productSementara.quantity;
          totalHarga.value += product.price;
        }
        // return semua product
        return productSementara;
      });
      cartProduct.value = elseAddProductNotIdSame; // 0
    }
  } else {
    cartProduct.value.push({ ...product, quantity: 1, total: product.price });
    quantityKeranjang.value++;
    totalHarga.value += product.price;
    keranjangNotEmpty.value = false;
  }
}
</script>

<template>
  <!-- nav -->
  <navbar
    :product="cartProduct"
    :keranjangNotEmpty="keranjangNotEmpty"
    :quantityKeranjang="quantityKeranjang"
    :totalHarga="totalHarga"
  />

  <!-- jumbotron -->
  <jumbotron />

  <!-- Content-1 -->
  <content1 />

  <!-- Content-2 -->
  <section class="content-2" id="content-2">
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col judul">
            <h1>Produk Kami</h1>
            <hr />
          </div>
        </div>

        <!-- Products -->
        <div class="row baris-2">
          <!-- Lopping Products -->
          <div v-for="product in products" class="col">
            <div class="card">
              <img
                v-bind:src="'/src/assets/static/' + product.image"
                class="card-img-top"
                alt="gaambarYey"
                name="image"
              />
              <div class="card-body">
                <h3 class="card-title">{{ product.name }}</h3>
                <p class="card-text" v-html="product.text"></p>
                <div class="hargaContainer">
                  <hr />
                  <h5 class="harga" name="harga">Rp.{{ product.price }}</h5>
                  <a
                    @click="order($event, product)"
                    href="#"
                    class="btn btn-success"
                    id="btn-order"
                    >add Cart</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footerr />
</template>

<style scoped></style>
