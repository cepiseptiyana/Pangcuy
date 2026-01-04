<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "./components/footer/footer.vue";
import jumbotron from "./components/jumbotron/jumbotron.vue";
</script>

<template>
  <!-- <header></header> -->
  <main style="background-color: #494949; height: 2000px; position: relative">
    <!-- nav -->
    <Navbar />

    <!-- jumbotron -->
    <jumbotron />

    <h1
      class="position-fixed"
      style="
        padding: 5px;
        z-index: 99999;
        transform: rotate(-20deg);
        top: 25px;
        left: 0;
        background-color: orange;
        color: white;
      "
    >
      maintenance
    </h1>

    <!-- <RouterView /> -->

    <!-- footer -->
    <!-- <Footer /> -->
  </main>
</template>

<style scoped></style>
