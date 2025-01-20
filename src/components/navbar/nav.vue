<script setup>
import { ref } from "vue";
import feather from "feather-icons";
const keranjangNotEmpty = defineModel("keranjangNotEmpty");
const cartProduct = defineModel("product");
const quantityKeranjang = defineModel("quantityKeranjang");
const totalHarga = defineModel("totalHarga");
const iconsShopping_Cart = feather.icons["shopping-cart"].toSvg({
  id: "shopCartSlide",
});
let keranjang_Slide_Show = ref(false);

// Event
function Functionkeranjang_Slide_Show(event) {
  event.preventDefault();
  keranjang_Slide_Show.value = !keranjang_Slide_Show.value;
}

// konversi rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    // mata uang IDR conversi RP
    currency: "IDR",
    // menghilangkan 40.000,00
    minimumFractionDigits: 0,
  }).format(number);
};

// Checkout to Wa
function checkout(event) {
  event.preventDefault();
  let dataProduk = cartProduct.value.map((product) => {
    return product;
  });

  let name = document.getElementById("name").value;
  let noHp = document.getElementById("noHp").value;
  let totalHargaWa = totalHarga.value;
  let myContact = "6285659519463";

  let encodedMessage = encodeURIComponent(
    `PANGCUY
  PANGSIT AYAM CIHUY
  V94Q+C7H Renged,
  Kabupaten Tangerang,Banten
  -----------------------------------------------
  Data Customer :
    Nama: ${name}
    NoHp: ${noHp}

  Data Pesanan :
    ${dataProduk.map((item) => {
      return `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`;
    })}
  TOTAL : ${rupiah(totalHargaWa)}
    ---------------------------------------------
    TERIMA KASIH TELAH BELANJA

  Note :
    # WAJIB SHARELOCK LOKASI ANDA SEBELUM ORDER
    `
  );

  // push ke wa
  if (name.length != 0) {
    if (noHp.length != 0) {
      if (noHp.length > 10) {
        let link = `https://wa.me/${myContact}?text=${encodedMessage}`;
        window.open(link, "_blank");
      } else {
        alert("noHp Tidak diketahui !!!");
      }
    } else {
      alert("isi noHp !!!");
    }
  } else {
    alert("isi nama !!!");
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <!-- Shopping Cart -->
    <div class="container-fluid">
      <a
        @click="Functionkeranjang_Slide_Show($event)"
        href="#"
        id="shopping-cart-btn"
      >
        <span v-html="iconsShopping_Cart" class="iconsShopping_Cart"></span>
        <span v-if="quantityKeranjang != 0" class="quantity-badge">{{
          quantityKeranjang
        }}</span>
      </a>

      <!-- Keranjang Slide -->
      <div v-show="keranjang_Slide_Show" class="keranjangSlide">
        <!-- data keranjang -->
        <div v-if="!keranjangNotEmpty">
          <div v-for="product in cartProduct" class="items">
            <img v-bind:src="'/src/assets/static/' + product.image" alt="" />
            <div class="text">
              <h1></h1>
              <!-- times == x -->
              <span></span> &times;
              <!-- minus == - -->
              <button id="remove" @click="">&minus;</button>
              <!-- quantity -->
              <span>{{ product.quantity }}</span>
              <!-- ketika di klik jalankan method add() -->
              <button id="add" @click="">&plus;</button>
              &equals;
              <span>{{ product.total }}</span>
            </div>
          </div>
          <h4>Total : {{ totalHarga }}</h4>

          <!-- Form Checkout -->
          <div class="form-container pt-5">
            <form action="" id="checkoutForm">
              <!-- data items hidden -->
              <!-- <input id="items" type="hidden" name="items" /> -->
              <!-- data total hidden -->
              <!-- <input type="hidden" name="total" /> -->
              <h5 style="text-align: center">Customer Detail</h5>
              <hr />
              <h6>Wajib Isi Data Sebelum Order</h6>

              <label for="name">
                <span>Name</span>
                <input
                  id="name"
                  class="form-control me-2"
                  placeholder="isi Nama Anda"
                  type="text"
                  name="name"
                />
              </label>

              <label for="noHp">
                <span>No.Hanphone</span>
                <input
                  id="noHp"
                  class="form-control me-2"
                  type="number"
                  placeholder="isi noHp Anda"
                  autocomplete="off"
                  name="noHp"
                />
              </label>
              <button
                @click="checkout($event)"
                id="checkout-button"
                class="btn bg-success checkout-button"
                type="submit"
                value="checkout"
              >
                Order
              </button>
            </form>
          </div>
        </div>
        <!-- Cart Empty -->
        <h3 v-else>Cart Is Empty</h3>
        <hr />
      </div>

      <button
        class="navbar-toggler buttonMenu"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Humberger menu -->
      <div
        class="collapse navbar-collapse slidebar"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mb-3">
            <RouterLink to="/" class="a">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/product" class="a">Produk</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
