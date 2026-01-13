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
const selectedRadioPrice = ref("default");
const selectedRadioColor = ref("default");
const selectCheckboxTags = ref([]);

const onUpdateSearch = (value) => {
  searchInputValue.value = value;
};

const onSelectedRadioPrice = (value) => {
  selectedRadioPrice.value = value;
};

const onSelectedRadioColor = (value) => {
  selectedRadioColor.value = value;
};

const onSelectedCheckboxTags = (value) => {
  selectCheckboxTags.value = value;
};

const filteredProducts = computed(() => {
  const resultFilter = allProduct.filter((product) => {
    // LOOPING PERDATA
    // CEK JIKA MENGANDUNG VALUE INPUT SEARCH JIKA SAMA MAKA NEXT KE RETURN TRUE DI BAWAH UNTUK MENGAMBIL DATA TERSEBUT.
    if (
      !product.name.toLowerCase().includes(searchInputValue.value.toLowerCase())
    )
      return false;

    // 💰 PRICE
    if (selectedRadioPrice.value !== "default") {
      if (selectedRadioPrice.value === "0-50000")
        if (!(product.price >= 0 && product.price <= 50000)) return false;

      if (selectedRadioPrice.value === "100000-500000")
        if (!(product.price >= 100000 && product.price <= 500000)) return false;

      if (selectedRadioPrice.value === "500000-1000000")
        if (!(product.price >= 500000 && product.price <= 1000000))
          return false;

      if (selectedRadioPrice.value === "1000000-2000000")
        if (!(product.price >= 1000000 && product.price <= 2000000))
          return false;
    }

    // FILTER COLOR
    if (selectedRadioColor.value !== "default") {
      if (selectedRadioColor.value === "black")
        if (product.color !== "black") return false;
      if (selectedRadioColor.value === "green")
        if (product.color !== "green") return false;
      if (selectedRadioColor.value === "blue")
        if (product.color !== "blue") return false;
      if (selectedRadioColor.value === "white")
        if (product.color !== "white") return false;
      if (selectedRadioColor.value === "chocolate")
        if (product.color !== "chocolate") return false;
    }

    // FILTER TAGS
    if (selectCheckboxTags.value.length > 0) {
      if (!selectCheckboxTags.value.includes(product.tag)) {
        return false;
      }
    }

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
      @selected-radio-price="onSelectedRadioPrice"
      @selected-radio-color="onSelectedRadioColor"
      @selected-checkbox-tags="onSelectedCheckboxTags"
    />
    <CardOverview :data="filteredProducts" />
  </section>
</template>

<style scoped></style>
