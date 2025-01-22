<script setup>
import { ref } from "vue";

// Imgage
import pangsit from "../../assets/images/pangsit.png";
import mie from "../../assets/images/mie.png";
import basomini from "../../assets/images/basomini.png";
import baksoUrat from "../../assets/images/baksoUrat.png";
import esteh from "../../assets/images/esteh.jpg";
import esJeruk from "../../assets/images/esJeruk.png";
import esCoklat from "../../assets/images/esCoklat.png";
import kentangGoreng from "../../assets/images/kentangGoreng.png";
import kerang from "../../assets/images/kerang.png";
import udangRebus from "../../assets/images/udangRebus.png";

// quantityKeranjang
import { quantityKeranjang } from "./quantityCart.js";

// Product
let products = ref([
  {
    id: 1,
    image: pangsit,
    name: "pangsit",
    text: `pangsit rebus pedas reguler`,
    price: 13000,
  },
  {
    id: 2,
    image: mie,
    name: "mie dower",
    text: "Sensasi level pedas mulai dari level 1 sampai 3",
    price: 12000,
  },
  {
    id: 3,
    image: basomini,
    text: "Ciri khas baso dengan ukuran kecil",
    name: "baso mini",
    price: 8000,
  },
  {
    id: 4,
    image: baksoUrat,
    text: "Baso berurat home made",
    name: "baso urat",
    price: 13000,
  },
  {
    id: 5,
    image: esteh,
    text: "ES Teh Manis Seger 300 ML",
    name: "ES Teh Manis",
    price: 3000,
  },
  {
    id: 6,
    image: esJeruk,
    text: "ES Jeruk manis asem wenak",
    name: "ES Jeruk",
    price: 5000,
  },
  {
    id: 7,
    image: esCoklat,
    text: "ES Coklat manis wenak dengan macam topping pilihan",
    name: "ES Coklat",
    price: 10000,
  },
  {
    id: 8,
    image: kentangGoreng,
    text: "Kentang Goreng crispyy renyah",
    name: "Kentang",
    price: 12000,
  },
  {
    id: 9,
    image: kerang,
    text: "kerang rebus kuah manis",
    name: "Kerang",
    price: 25000,
  },
  {
    id: 10,
    image: udangRebus,
    text: "udang Rebus kuah manis",
    name: "udang Rebus",
    price: 25000,
  },
]);

// Fungsi order
function order(event, product) {
  event.preventDefault();
  // Find
  let cartItem = quantityKeranjang.cartProduct.find((products) => {
    return product.id == products.id;
  });

  // cek
  // IF !cartproduct kosong
  if (quantityKeranjang.cartProduct != 0) {
    // FIND
    if (!cartItem) {
      quantityKeranjang.cartProduct.push({
        ...product,
        quantity: 1,
        total: product.price,
      });
      quantityKeranjang.count++;
      quantityKeranjang.totalHarga += product.price;
    } else {
      // jika ada barang yang sama
      let elseAddProductNotIdSame = quantityKeranjang.cartProduct.map(
        (products) => {
          let productSementara = products;
          // Jika product yang di kirim client == cartProduct.count
          if (product.id == products.id) {
            quantityKeranjang.count++;
            productSementara.quantity++;
            productSementara.total =
              productSementara.price * productSementara.quantity;
            quantityKeranjang.totalHarga += product.price;
          }
          // return semua product
          return productSementara;
        }
      );
      // di isi array baru
      quantityKeranjang.cartProduct = elseAddProductNotIdSame;
    }
  } else {
    quantityKeranjang.cartProduct.push({
      ...product,
      quantity: 1,
      total: product.price,
    });
    quantityKeranjang.count++;
    quantityKeranjang.totalHarga += product.price;
    quantityKeranjang.keranjangNotEmpty = false;
  }
}
</script>

<template>
  <!-- produk -->
  <section class="content-2" id="content-2">
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col judul">
            <h1>Produk Kami</h1>
            <hr />
          </div>
        </div>

        <!-- Products-Cart -->
        <div class="row baris-2">
          <!-- Lopping Products -->
          <div v-for="product in products" class="col">
            <div class="card">
              <img
                v-bind:src="product.image"
                class="card-img-top"
                alt="gaambarYey"
                name="image"
              />
              <div class="card-body">
                <h3 class="card-title bg-success">{{ product.name }}</h3>
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
</template>
