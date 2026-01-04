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
import { quantityKeranjang } from "../Products/quantityCart.js";

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
async function checkout(event) {
  event.preventDefault();

  try {
    let name = document.getElementById("name").value;
    let noHp = document.getElementById("noHp").value;
    let totalHarga = quantityKeranjang.totalHarga;
    let myContact = "6285659519463";
    let phoneNumber = parsePhoneNumber(`${noHp}`, "ID");

    let dataCheckout = { name, totalHarga, myContact, phoneNumber };

    const result = await fetch("http://localhost:8000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataCheckout),
    });

    const { token, redirect_url } = await result.json();

    window.snap.embed(token, {
      embedId: "snap-container",
      onSuccess: function (result) {
        /* You may add your own implementation here */
        alert("payment success!");
        console.log(result);
      },
      onPending: function (result) {
        /* You may add your own implementation here */
        alert("wating your payment!");
        console.log(result);
      },
      onError: function (result) {
        /* You may add your own implementation here */
        alert("payment failed!");
        console.log(result);
      },
      onClose: function () {
        /* You may add your own implementation here */
        alert("you closed the popup without finishing the payment");
      },
    });
  } catch (err) {
    console.log(err);
  }

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
  <!-- NAVBAR starts -->
  <nav class="navbar navbar-expand-lg position-fixed w-100 bg-light z-1">
    <div class="container">
      <a class="navbar-brand text-danger" href="#">Pangcuy</a>
      <button
        class="navbar-toggler bg-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
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
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <!-- navbar ends -->

  <!-- Shopping Cart -->
</template>
