<script setup>
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
</script>

<template>
  <section class="jumbo">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg colomn-1">
          <a @click="chevron_leftSlide($event)" class="iconleftFeater">
            <span v-html="chevron_left"></span>
          </a>
          <img class="imageJumbo" :src="imageJumbo[nomorJumboSlider].img" />
          <a @click="chevron_RigthSlide($event)" class="iconRigthFeater">
            <span v-html="chevron_right"></span>
          </a>
        </div>
        <div class="col-lg colomn-2">
          <div>
            <h1 class="textHeadJumbo">
              {{ imageJumbo[nomorJumboSlider].textHeadJumbo }}
            </h1>
            <p class="textJumbo">
              {{ imageJumbo[nomorJumboSlider].textJumbo }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
