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

const showBox = ref(false);
const selectedProduct = ref(null);
const quantity = ref(0);

const openBox = (product) => {
  showBox.value = true;
  selectedProduct.value = product;
  console.log(selectedProduct.value);
};

const closeBox = () => {
  showBox.value = false;
};

const addQuantity = () => {
  quantity.value += 1;
};

const prevQuantity = () => {
  if (quantity.value > 0) {
    quantity.value -= 1;
  } else {
    quantity.value = 0;
  }
};
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
          v-for="(product, index) in products"
          class="card flex-shrink-0"
          style="width: 18rem"
        >
          <img
            :src="product.img"
            class="card-img-top"
            alt="..."
            style="width: 100%; height: 180px; object-fit: contain"
          />
          <div class="card-body position-relative">
            <h5 class="card-title">{{ product.judul }}</h5>
            <p class="card-text">
              {{ product.desc }}
            </p>
            <a
              href="#"
              class="btn btn-primary d-block w-75 position-absolute"
              @click.prevent="openBox(product)"
              >Pesan</a
            >
          </div>
        </div>

        <div v-if="showBox" class="box-show">
          <div class="wrapper">
            <div class="column-1">
              <a @click.prevent="closeBox" href="">< close</a>
              <img :src="selectedProduct.img" alt="" width="400" />
            </div>
            <div class="column-2">
              <h2 class="text-capitalize">{{ selectedProduct.judul }}</h2>
              <p>{{ selectedProduct.desc }}</p>

              <div class="wrapper-pesan">
                <div class="quantity">
                  <a href="#" @click.prevent="addQuantity">+</a>
                  <input class="text-center" type="text" :value="quantity" />
                  <a href="#" @click.prevent="prevQuantity">-</a>
                </div>
                <div class="pesan">
                  <p>total</p>
                  <button>pesan</button>
                </div>
              </div>
            </div>
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
      padding: 10px;

      & .card-body {
        & p {
          font-size: 14px;
          padding-bottom: 20px;
        }

        & .btn {
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          font-size: 14px;
          transition: 300ms;
          margin: 0;
        }
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

    & .box-show {
      position: fixed;
      z-index: 9999;
      background-color: rgba(52, 52, 52, 0.853);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      & .wrapper {
        position: relative;
        background-color: white;
        width: 70%;
        height: 80%;
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 50px;

        & .column-1 {
          & a {
            text-decoration: none;
            font-size: 18px;
            position: absolute;
            top: 10px;
            color: #eb7d23;
            left: 20px;
          }
        }

        & .column-2 {
          & h2 {
            color: #eb7d23;
          }

          .wrapper-pesan {
            margin-top: 50px;
            display: flex;
            gap: 20px;

            & .quantity {
              display: flex;
              gap: 10px;
            }

            & a {
              color: #f1f1f1;
              width: 30px;
              text-align: center;
              background-color: #eb7d23;
              border-radius: 20%;
              text-decoration: none;
            }

            & .pesan {
              display: flex;
              gap: 20px;

              & p {
                margin: 0;
              }

              & button {
                border: none;
                color: white;
                background-color: #eb7d23;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1290px) {
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

      & .box-show {
        position: fixed;
        z-index: 9999;
        background-color: rgba(52, 52, 52, 0.853);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        & .wrapper {
          position: relative;
          background-color: white;
          width: 90%;
          height: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 50px;
        }
      }
    }
  }
}

@media (max-width: 920px) {
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

      & .box-show {
        position: fixed;
        z-index: 9999;
        background-color: rgba(52, 52, 52, 0.853);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        & .wrapper {
          position: relative;
          background-color: white;
          width: 90%;
          height: auto;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 50px;

          & .column-1 {
            & a {
              text-decoration: none;
              font-size: 18px;
              position: absolute;
              top: 10px;
              color: #eb7d23;
              left: 20px;
            }
          }

          & .column-2 {
            .wrapper-pesan {
              margin-top: 0;
              display: flex;
              gap: 20px;
            }
          }
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
