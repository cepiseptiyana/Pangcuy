<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "./components/footer/footer.vue";
import jumbotron from "./components/jumbotron/jumbotron.vue";
</script>

<template>
  <!-- <header></header> -->
  <main>
    <!-- nav -->
    <Navbar />

    <!-- jumbotron -->
    <jumbotron />

    <RouterView />

    <!-- footer -->
    <Footer />
  </main>
</template>

<style scoped></style>
