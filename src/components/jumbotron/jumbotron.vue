<!-- <script setup>
import { ref } from "vue";
import feather from "feather-icons";

import pangsit2 from "../../assets/images/pangsit.png";
import pangsit1 from "../../assets/images/pangsit1.png";
import esCoklat from "../../assets/images/esCoklat.png";

const chevron_left = feather.icons["chevron-left"].toSvg({
  width: 40,
  height: 40,
});
const chevron_right = feather.icons["chevron-right"].toSvg({
  width: 40,
  height: 40,
});

// Jumbotron
// chevron-left & right
const imageJumbo = ref([
  {
    id: 1,
    img: pangsit2,
    textHeadJumbo: "pangsit",
    textJumbo:
      "makanan yang dibuat dengan membungkus daging cincang dalam selembar adonan yang terbuat dari tepung. Pangsit sendiri merupakan salah satu kuliner Tionghoa yang dianggap representatif karna isiannya memiliki makna budaya",
  },
  {
    id: 2,
    img: pangsit1,
    textHeadJumbo: "mie dower",
    textJumbo:
      "Perpaduan rasa pedas dari cabai dan gurih dari kaldu ayam, Packaging design yang menarik. Mie pangsit dower bisa dinikmati kapan saja dan di mana saja, cocok untuk yang suka mie pangsit yang enak.",
  },
  {
    id: 3,
    img: esCoklat,
    textHeadJumbo: "esCoklat",
    textJumbo:
      "Es coklat memiliki rasa manis dan aroma khas cokelat yang kuat. Es coklat bisa dinikmati sebagai hidangan penutup atau dessert",
  },
]);

let nomorJumboSlider = ref(0);
// Function Chev-Left
function chevron_leftSlide(event) {
  if (nomorJumboSlider.value < 1) {
    document
      .getElementsByClassName("imageJumbo")[0]
      .classList.add("animateImg");

    setTimeout(() => {
      document
        .getElementsByClassName("imageJumbo")[0]
        .classList.remove("animateImg");
      nomorJumboSlider.value = imageJumbo.value.length - 1;
    }, 600);
  } else {
    document
      .getElementsByClassName("imageJumbo")[0]
      .classList.add("animateImg");
    setTimeout(() => {
      document
        .getElementsByClassName("imageJumbo")[0]
        .classList.remove("animateImg");
      nomorJumboSlider.value--;
      // console.log(nomorJumboSlider.value);
    }, 600);
  }
}

// Function Chev-Rigth
function chevron_RigthSlide() {
  // 2
  if (nomorJumboSlider.value >= imageJumbo.value.length - 1) {
    document
      .getElementsByClassName("imageJumbo")[0]
      .classList.add("animateImg");
    setTimeout(() => {
      document
        .getElementsByClassName("imageJumbo")[0]
        .classList.remove("animateImg");
      nomorJumboSlider.value = 0;
    }, 600);
  } else {
    document
      .getElementsByClassName("imageJumbo")[0]
      .classList.add("animateImg");
    setTimeout(() => {
      document
        .getElementsByClassName("imageJumbo")[0]
        .classList.remove("animateImg");
      nomorJumboSlider.value++;
      // console.log(nomorJumboSlider.value);
    }, 600);
  }
}
</script> -->

<script></script>

<template>
  <header class="jumbo">
    <div
      class="position-relative d-flex justify-content-center align-items-center"
    >
      <div class="">
        <img
          class="imageJumbo"
          src="@/assets/images/bg-hero-home.jpg"
          width="100%"
          min-height="480px"
        />
      </div>

      <div class="desc position-absolute text-center">
        <h1>kuliner <span class="text-danger">makanan</span> indonesia</h1>
        <p>Praktis & Higienis!</p>
      </div>

      <div class="box-pesan position-absolute text-center">
        <div class="wrapper">
          <h2>
            Bingung mau pesan apa?
            <span>Yuk, kami pilihkan menu terbaik!</span>
          </h2>

          <form action="" method="get">
            <div class="wrapper-input filter-date">
              <label for="">Tanggal Acara</label>
              <input type="date" name="date" />
            </div>

            <div class="wrapper-input location-date">
              <select
                name="daerahPengantar"
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>daerah pengantar</option>
                <option value="1">kota bekasi</option>
                <option value="2">kota tangerang</option>
                <option value="3">kota jakarta utara</option>
                <option value="4">kota jakarta barat</option>
                <option value="5">kota jakarta timur</option>
                <option value="6">kota jakarta selatan</option>
                <option value="7">kota jakarta</option>
                <option value="8">serang</option>
                <option value="9">kab.tangeran</option>
                <option value="10">cikarang</option>
                <option value="11">bandung</option>
                <option value="12">bogor</option>
              </select>
            </div>

            <div class="wrapper-input time-filter">
              <select
                name="jamPengantar"
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Jam Pengantaran</option>
                <option value="1">08:00</option>
                <option value="1">09:00</option>
                <option value="1">10:00</option>
                <option value="1">11:00</option>
                <option value="1">12:00</option>
                <option value="1">13:00</option>
                <option value="1">14:00</option>
                <option value="1">15:00</option>
                <option value="1">16:00</option>
                <option value="1">17:00</option>
                <option value="1">18:00</option>
                <option value="1">19:00</option>
                <option value="1">20:00</option>
              </select>
            </div>

            <div class="wrapper-btn">
              <button type="submit">Cek Rekomendasi</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.jumbo {
  padding-top: 56px;

  & .desc {
    & h1 {
      font-style: italic;
      font-family: Vedacity;
      font-size: 48px;
      line-height: 1.16667;
    }

    & p {
      font-size: 24px;
      line-height: 1.33334;
      color: #000000;
    }
  }

  & .box-pesan {
    top: 90%;
    display: flex;
    justify-content: center;

    & .wrapper {
      padding: 48px;
      box-sizing: border-box;
      background-color: rgb(255, 255, 255);

      & h2 {
        font-size: 24px;
        line-height: 1.16667;
        color: #eb7d23;
        margin-bottom: 32px;
      }

      & form {
        width: 100%;
        display: flex;
        gap: 20px;

        & .wrapper-input {
          display: flex;
          flex-direction: column;
        }

        & .wrapper-btn {
          padding: 8px;

          & button {
            border: 0 solid #fad961;
            font-size: 14px;
            line-height: 1.42858;
            background-color: #f76b1c;
            color: #fff;
            padding: 10px 32px;
            border-radius: 24px;

            &:hover {
              background-color: red;
            }
          }
        }
      }
    }
  }
}
</style>
