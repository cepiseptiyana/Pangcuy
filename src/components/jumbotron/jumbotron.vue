<script setup>
import { ref } from "vue";
import feather from "feather-icons";
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
    img: "pangsit2.png",
    textHeadJumbo: "pangsit",
    textJumbo:
      "makanan yang dibuat dengan membungkus daging cincang dalam selembar adonan yang terbuat dari tepung. Pangsit sendiri merupakan salah satu kuliner Tionghoa yang dianggap representatif karna isiannya memiliki makna budaya",
  },
  {
    id: 2,
    img: "pangsit1.png",
    textHeadJumbo: "mie dower",
    textJumbo:
      "Perpaduan rasa pedas dari cabai dan gurih dari kaldu ayam, Packaging design yang menarik. Mie pangsit dower bisa dinikmati kapan saja dan di mana saja, cocok untuk yang suka mie pangsit yang enak.",
  },
  {
    id: 3,
    img: "tehManes.png",
    textHeadJumbo: "tehManes",
    textJumbo:
      "Rasa bukanlah secangkir teh hangat, yang sewaktu-waktu beranjak dingin,Semanis-manisnya kamu, lebih manis teh yang ketumpahan gula",
  },
]);

let nomorJumboSlider = ref(0);
// Function Chev-Left
function chevron_leftSlide(event) {
  nomorJumboSlider.value--;
  if (nomorJumboSlider.value < 0) {
    nomorJumboSlider.value = imageJumbo.value.length - 1;
  }
}

// Function Chev-Rigth
function chevron_RigthSlide() {
  nomorJumboSlider.value++;
  if (nomorJumboSlider.value > imageJumbo.value.length - 1) {
    nomorJumboSlider.value = 0;
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
          <img
            class="imageJumbo"
            :src="'/src/assets/static/' + imageJumbo[nomorJumboSlider].img"
          />
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
