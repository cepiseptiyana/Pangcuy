<script setup>
import { ref } from "vue";
import navbar from "./navbar/nav.vue";
import jumbotron from "./jumbotron/jumbotron.vue";
import content1 from "./order/content1.vue";
import systemOrder from "./order/systemOrder.vue";
import footerr from "./footer/footer.vue";
</script>

<template>
  <!-- nav -->
  <navbar />

  <!-- jumbotron -->
  <jumbotron />

  <!-- Content-1 -->
  <content1 />

  <!-- produk -->
  <systemOrder />

  <!-- footer -->
  <footerr />
</template>

<style scoped></style>
