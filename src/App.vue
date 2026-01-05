<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import SectionFooter from "@/components/footer/SectionFooter.vue";
</script>

<template>
  <!-- <header></header> -->
  <main>
    <!-- nav -->
    <nav>
      <Navbar />
    </nav>

    <RouterView />

    <!-- footer -->
    <footer>
      <SectionFooter />
    </footer>
  </main>
</template>

<style scoped>
body {
  overflow: hidden;
}

footer {
  background-color: #f1f1f1;
}
</style>
