<script setup>
// import Products from "../components/Products/Products.vue";
import jumbotron from "../components/jumbotron/jumbotron.vue";
import MenuFavorit from "../components/menuFavorit/MenuFavorit.vue";
import Card from "@/components/Card.vue";
import CardOverview from "@/components/CardOverview.vue";

import { allProduct } from "@/utils/allProduct";
</script>

<template>
  <jumbotron />

  <section class="container pt-5 d-flex gap-2 flex-wrap justify-content-center">
    <Card :data="allProduct[0]" />
    <Card :data="allProduct[1]" />
    <Card :data="allProduct[2]" />
  </section>

  <section class="container-fluid pt-5 pb-5">
    <MenuFavorit />
    <CardOverview :data="allProduct" />
  </section>
</template>

<style scoped></style>
