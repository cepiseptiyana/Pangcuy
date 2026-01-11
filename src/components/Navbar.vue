<script setup>
import { ref } from "vue";
import feather from "feather-icons";
import parsePhoneNumber from "libphonenumber-js";
import Swal from "sweetalert2";

//
//
//
// TO WHATSAPP

// let dataProduk = quantityKeranjang.cartProduct.map((product) => {
//   return product;
// });

// let name = document.getElementById("name").value;
// let noHp = document.getElementById("noHp").value;
// let totalHargaWa = quantityKeranjang.totalHarga;
// let myContact = "6285659519463";
// let phoneNumber = parsePhoneNumber(`${noHp}`, "ID");

// // push ke wa
// if (name.length != 0) {
//   if (noHp.length != 0) {
//     if (noHp.length > 10) {
//       let encodedMessage = encodeURIComponent(
//         `PANGCUY
// PANGSIT AYAM CIHUY
// V94Q+C7H Renged,
// Kabupaten Tangerang,Banten
// -----------------------------------------------
// Data Customer :
//   Nama: ${name}
//   NoHp: ${phoneNumber.number}

// Data Pesanan :
//   ${dataProduk.map((item) => {
//     return `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`;
//   })}
// TOTAL : ${rupiah(totalHargaWa)}
//   ---------------------------------------------
//   TERIMA KASIH TELAH BELANJA

// Note :
//   # WAJIB SHARELOCK LOKASI ANDA SEBELUM ORDER
//   `
//       );

//       let link = `https://wa.me/${myContact}?text=${encodedMessage}`;
//       swet();
//       keranjang_Slide_Show.value = false;
//       window.open(link, "_self");
//     } else {
//       noHpLength();
//       return;
//     }
//   } else {
//     noHpNull();
//     return;
//   }
// } else {
//   nameLength();
//   return;
// }

import { onMounted } from "vue";

onMounted(() => {
  feather.replace(); // This function scans the DOM for elements with data-feather attributes
});
</script>

<template>
  <!-- NAVBAR starts -->
  <nav class="navbar navbar-expand-lg position-fixed w-100 bg-light z-1">
    <div class="container">
      <a class="navbar-brand text-danger" href="#">Clothes.TNG</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style="border: none; box-shadow: 0 0 2px #0d6efd"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <router-link to="/transaksi" class="nav-link" active-class="active">
            Transaksi
          </router-link>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Order
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Makanan</a></li>
              <li>
                <a class="dropdown-item" href="#">Minuman</a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex align-items-center" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <div style="cursor: pointer">
            <i data-feather="shopping-cart"></i>
          </div>
        </form>
      </div>
    </div>
  </nav>
  <!-- navbar ends -->

  <!-- Shopping Cart -->
</template>
