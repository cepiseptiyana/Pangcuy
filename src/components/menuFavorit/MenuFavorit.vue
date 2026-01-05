<script setup>
import { ref } from "vue";

import bakso from "@/assets/images/bakso.jpg";
import nasiayam from "@/assets/images/nasiayam.jpg";
import mieaceh from "@/assets/images/mieaceh.jpg";
import pempek from "@/assets/images/pempek.jpg";
import gohyong from "@/assets/images/gohyong.png";

const products = ref([
  {
    img: bakso,
    judul: "bakso spesial",
    desc: "Bakso Juara Rasa Kenyalnya Bikin Nagih!",
  },
  {
    img: nasiayam,
    judul: "ice chocolate",
    desc: "Cokelat dingin yang lembut dan kaya rasa, dibuat dari cokelat pilihan untuk sensasi manis yang pas dan menyegarkan. ",
  },
  {
    img: mieaceh,
    judul: "ice chocolate",
    desc: "Cokelat dingin yang lembut dan kaya rasa, dibuat dari cokelat pilihan untuk sensasi manis yang pas dan menyegarkan. ",
  },
  {
    img: pempek,
    judul: "ice chocolate",
    desc: "Cokelat dingin yang lembut dan kaya rasa, dibuat dari cokelat pilihan untuk sensasi manis yang pas dan menyegarkan. ",
  },
  {
    img: gohyong,
    judul: "gohyong",
    desc: "Cokelat dingin yang lembut dan kaya rasa, dibuat dari cokelat pilihan untuk sensasi manis yang pas dan menyegarkan. ",
  },
]);
</script>

<template>
  <section class="container section1">
    <div class="container">
      <div class="wrapper-judul text-center">
        <h2>Menu Favorit</h2>
        <p>
          Berbagai pilihan menu favorit
          <span class="text-danger">Mie Kremes</span> atau Lunchbox!
        </p>
      </div>

      <div class="wrapper-product d-flex gap-2">
        <div
          v-for="product in products"
          class="card flex-shrink-0"
          style="width: 18rem"
        >
          <img
            :src="product.img"
            class="card-img-top"
            alt="..."
            style="width: 100%; height: 180px; object-fit: contain"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" class="btn btn-primary m-auto d-block w-75 mt-5"
              >Pesan</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section1 {
  padding-top: 190px;
  .wrapper-judul {
    font-size: 32px;
    line-height: 1.125;

    & h2 {
      color: #eb7d23;
      font-family: Caturitta, serif;
      font-weight: 400;
      margin-bottom: 0;
    }

    & p {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  .wrapper-product {
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      height: 4px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: none;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      cursor: pointer;
      background: #555;
    }

    & .card {
      & .card-body {
        & p {
          font-size: 14px;
        }
      }

      & .btn {
        font-size: 14px;
        transition: 300ms;
      }

      & img {
        transition: 300ms;
      }

      &:hover {
        & img {
          transform: scale(1.04);
        }

        & .btn {
          font-size: 16px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .section1 {
    padding-top: 350px;
  }
}
</style>
