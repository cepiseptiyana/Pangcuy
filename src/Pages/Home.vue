<script setup>
import { ref, computed, onMounted } from "vue";
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

const searchInputValue = ref("");
const selectedRadio = ref("default");

const onUpdateSearch = (value) => {
  searchInputValue.value = value;
};

const onSelectedRadio = (value) => {
  selectedRadio.value = value;
  console.log(value);
};

const filteredProducts = computed(() => {
  const resultFilter = allProduct.filter((product) => {
    // LOOPING PERDATA
    // CEK JIKA MENGANDUNG VALUE INPUT SEARCH JIKA SAMA MAKA NEXT KE RETURN TRUE DI BAWAH UNTUK MENGAMBIL DATA TERSEBUT.
    if (
      !product.name.toLowerCase().includes(searchInputValue.value.toLowerCase())
    )
      return false;

    // filter price
    if (selectedRadio.value === "default") {
      return true;
    }

    if (selectedRadio.value === "0-50000")
      return product.price >= 0 && product.price <= 50000;

    if (selectedRadio.value === "100000-500000")
      return product.price >= 100000 && product.price <= 500000;

    if (selectedRadio.value === "500000-1000000")
      return product.price >= 500000 && product.price <= 1000000;

    if (selectedRadio.value === "1000000-2000000")
      return product.price >= 1000000 && product.price <= 2000000;

    return true;
  });

  return resultFilter;
});
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
    <ProductOverview
      :searchValue="searchInputValue"
      @update-search="onUpdateSearch"
      @selected-radio="onSelectedRadio"
    />
    <CardOverview :data="filteredProducts" />
  </section>
</template>

<style scoped></style>
