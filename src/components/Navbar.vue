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
  <nav class="navbar navbar-expand-lg position-fixed w-100 bg-light">
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
        <form class="d-flex gap-2 align-items-center" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <div
            class="cartOffcanvas"
            style="cursor: pointer"
            data-bs-toggle="offcanvas"
            data-bs-target="#cartOffcanvas"
            aria-controls="offcanvasWithBothOptions"
          >
            <i data-feather="shopping-cart"></i>
          </div>
          <div
            class="wishlistOffcanvas"
            style="cursor: pointer"
            data-bs-toggle="offcanvas"
            data-bs-target="#wishlistOffcanvas"
            aria-controls="offcanvasWithBothOptions"
          >
            <i data-feather="heart"></i>
          </div>
        </form>
      </div>
    </div>
  </nav>
  <!-- navbar ends -->

  <!-- MOBILE SLIDE CART -->
  <div
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    tabindex="-1"
    id="cartOffcanvas"
    aria-labelledby="offcanvasWithBothOptionsLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
        Backdrop with scrolling
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="card mb-3" style="max-width: 100%">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="@/assets/images/about-preview-02.png"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text" style="font-size: 14px">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-body-secondary"
                  >Last updated 3 mins ago</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MOBILE SLIDE HEART -->
  <div
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    tabindex="-1"
    id="wishlistOffcanvas"
    aria-labelledby="offcanvasWithBothOptionsLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
        Backdrop with scrolling
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="card mb-3" style="max-width: 100%">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="@/assets/images/about-preview.png"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text" style="font-size: 14px">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-body-secondary"
                  >Last updated 3 mins ago</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  z-index: 9999;

  & .cartOffcanvas {
    &:hover {
      svg {
        stroke: rgb(0, 42, 255);
      }
    }
  }

  & .wishlistOffcanvas {
    &:hover {
      svg {
        stroke: rgb(255, 0, 0);
      }
    }
  }
}

.offcanvas {
  width: 600px;

  & .card {
    & .row {
      & .img-fluid {
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .offcanvas {
    width: 400px;

    & .card {
      & .row {
        & .img-fluid {
          height: 200px;
        }
      }
    }
  }
}
</style>
