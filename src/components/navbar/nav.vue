<script setup>
import { ref } from "vue";
import feather from "feather-icons";
import parsePhoneNumber from "libphonenumber-js";
import Swal from "sweetalert2";

// SweetAlert
function swet() {
  Swal.fire({
    title: "berhasil order",
    icon: "success",
  });
}

function nameLength() {
  Swal.fire({
    title: "nama belum di isi",
    icon: "warning",
  });
}

function noHpNull() {
  Swal.fire({
    title: "nomor belum di isi",
    icon: "warning",
  });
}

function noHpLength() {
  Swal.fire({
    title: "nomor tidak diketahui !!!",
    icon: "warning",
  });
}

let iconsShopping_Cart = feather.icons["shopping-cart"].toSvg({
  id: "shopCartSlide",
});
let keranjang_Slide_Show = ref(false);

// JS Orderr
import { quantityKeranjang } from "../order/quantityCart.js";

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
  let dataProduk = quantityKeranjang.cartProduct.map((product) => {
    return product;
  });

  let name = document.getElementById("name").value;
  let noHp = document.getElementById("noHp").value;
  let totalHargaWa = quantityKeranjang.totalHarga;
  let myContact = "6285659519463";
  let phoneNumber = parsePhoneNumber(`${noHp}`, "ID");

  // push ke wa
  if (name.length != 0) {
    if (noHp.length != 0) {
      if (noHp.length > 10) {
        let encodedMessage = encodeURIComponent(
          `PANGCUY
  PANGSIT AYAM CIHUY
  V94Q+C7H Renged,
  Kabupaten Tangerang,Banten
  -----------------------------------------------
  Data Customer :
    Nama: ${name}
    NoHp: ${phoneNumber.number}

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

        let link = `https://wa.me/${myContact}?text=${encodedMessage}`;
        swet();
        keranjang_Slide_Show.value = false;
        window.open(link, "_self");
      } else {
        noHpLength();
        return;
      }
    } else {
      noHpNull();
      return;
    }
  } else {
    nameLength();
    return;
  }
}

// kurang quantity
function kurangQuantity(product) {
  if (product.quantity > 1) {
    let elseAddProductNotIdSame = quantityKeranjang.cartProduct.map(
      (products) => {
        let productSementara = products;
        // Jika product yang di kirim client == cartProduct.id
        if (product.id == products.id) {
          quantityKeranjang.count--;
          productSementara.quantity--;
          productSementara.total =
            productSementara.price * productSementara.quantity;
          quantityKeranjang.totalHarga -= product.price;
        }
        // return semua product
        return productSementara;
      }
    );
    // isi ke array cartProduct
    console.log(elseAddProductNotIdSame);
    quantityKeranjang.cartProduct = elseAddProductNotIdSame;
  } else {
    let filter = quantityKeranjang.cartProduct.filter((products) => {
      if (product.id == products.id) {
        quantityKeranjang.count--;
        products.quantity--;
        quantityKeranjang.totalHarga -= product.price;
        products.total = products.price * products.quantity;
      }
      return product.id != products.id;
    });

    console.log(filter);
    quantityKeranjang.cartProduct = filter;
    // jika cartProduct.length == 0
    if (quantityKeranjang.cartProduct.length < 1) {
      quantityKeranjang.keranjangNotEmpty = true;
    }
  }
}

// tambah quantity
function tambahQuantity(product) {
  let elseAddProductNotIdSame = quantityKeranjang.cartProduct.map(
    (products) => {
      let productSementara = products;
      // Jika product yang di kirim client == cartProduct.id
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
  quantityKeranjang.cartProduct = elseAddProductNotIdSame;
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
        <span v-if="quantityKeranjang.count != 0" class="quantity-badge">{{
          quantityKeranjang.count
        }}</span>
      </a>

      <!-- Keranjang Slide -->
      <div v-show="keranjang_Slide_Show" class="keranjangSlide">
        <!-- data keranjang -->
        <div v-if="!quantityKeranjang.keranjangNotEmpty">
          <div v-for="product in quantityKeranjang.cartProduct" class="items">
            <img v-bind:src="product.image" alt="" />
            <div class="text">
              <h1>{{ product.name }}</h1>
              <!-- times == x -->
              <span></span> &times;
              <!-- minus == - -->
              <button id="remove" @click="kurangQuantity(product)">
                &minus;
              </button>
              <!-- quantity -->
              <span>{{ product.quantity }}</span>
              <!-- ketika di klik jalankan method add() -->
              <button id="add" @click="tambahQuantity(product)">&plus;</button>
              &equals;
              <span>{{ product.total }}</span>
            </div>
          </div>
          <h4>Total : {{ quantityKeranjang.totalHarga }}</h4>

          <!-- Form Checkout -->
          <div class="form-container pt-5">
            <form action="" id="checkoutForm">
              <h5>Customer Detail</h5>
              <hr />
              <h6>Wajib Isi Data Sebelum Order</h6>

              <div class="formData">
                <label for="name"> Name: </label>
                <div class="inputData">
                  <input
                    id="name"
                    class="form-control me-2"
                    placeholder="username"
                    type="text"
                    name="nameUser"
                  />
                </div>

                <label for="noHp">No.Hanphone :</label>
                <div class="inputData">
                  <button>ID</button>
                  <input
                    id="noHp"
                    class="form-control me-2"
                    placeholder="+62"
                    type="text"
                    name="noHandphone"
                  />
                </div>
              </div>

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
