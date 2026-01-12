<script setup>
import { ref } from "vue";
// import Products from "../components/Products/Products.vue";
import jumbotron from "../components/jumbotron.vue";
import ProductOverview from "../components/ProductOverview.vue";
import Card from "@/components/Card.vue";
import CardOverview from "@/components/CardOverview.vue";

import { allProduct } from "@/utils/allProduct";

import banner_women from "@/assets/images/banner-01.jpg";
import banner_men from "@/assets/images/banner-02.jpg";
import banner_accessoris from "@/assets/images/banner-03.jpg";

const banner = ref([
  { id: 1, name: "Women", desc: "Spring 2025", image: banner_women },
  { id: 2, name: "Men", desc: "Spring 2024", image: banner_men },
  { id: 3, name: "Accessories", desc: "New Trend", image: banner_accessoris },
]);
</script>

<template>
  <jumbotron />

  <section
    class="container pt-5 pb-5 d-flex gap-2 flex-wrap justify-content-center"
  >
    <Card
      v-for="(item, index) in banner"
      :key="item.id || index"
      :data="item"
    />
  </section>

  <section class="container-fluid bg-body-tertiary pb-5">
    <ProductOverview />
    <CardOverview :data="allProduct" />
  </section>
</template>

<style scoped></style>
