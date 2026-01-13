<script setup>
import { ref } from "vue";

const emit = defineEmits([
  "update-search",
  "selected-radio-price",
  "selected-radio-color",
  "selected-checkbox-tags",
]);

const searchValue = ref("");
const selectedRadioPrice = ref("default");
const selectedRadioColor = ref("default");
const selectedCheckboxTags = ref([]);

const onInput = () => {
  emit("update-search", searchValue.value);
};

const onRadioPriceChange = () => {
  emit("selected-radio-price", selectedRadioPrice.value);
};

const onRadioColorChange = () => {
  emit("selected-radio-color", selectedRadioColor.value);
};

const onRadioCheckboxChange = () => {
  emit("selected-checkbox-tags", selectedCheckboxTags.value);
};
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container d-flex justify-content-between">
      <div>
        <h1 style="font-family: serif">Product Overview</h1>
      </div>

      <div class="d-flex">
        <form class="d-flex" role="search">
          <input
            v-model="searchValue"
            @input="onInput"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          Filter
        </button>
      </div>
    </div>
  </nav>

  <!-- SLIDER -->
  <div
    class="offcanvas offcanvas-start"
    data-bs-scroll="true"
    tabindex="-1"
    id="offcanvasWithBothOptions"
    aria-labelledby="offcanvasWithBothOptionsLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
        Filter & Sort By
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <!--  -->
      <!--  -->
      <!--  -->
      <!-- PRICE -->
      <div class="mb-3">
        <h6>Price</h6>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="priceRange"
            id="radioPrice1"
            value="default"
            v-model="selectedRadioPrice"
            @change="onRadioPriceChange"
          />
          <label class="form-check-label" for="radioPrice1"> default </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="priceRange"
            id="radioPrice2"
            value="0-50000"
            v-model="selectedRadioPrice"
            @change="onRadioPriceChange"
          />
          <label class="form-check-label" for="radioPrice2">
            Rp. 0 - 50.000
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="priceRange"
            id="radioPrice3"
            value="50000-100000"
            v-model="selectedRadioPrice"
            @change="onRadioPriceChange"
          />
          <label class="form-check-label" for="radioPrice3">
            Rp. 50.000 - 100.000
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="priceRange"
            id="radioPrice4"
            value="100000-500000"
            v-model="selectedRadioPrice"
            @change="onRadioPriceChange"
          />
          <label class="form-check-label" for="radioPrice4">
            Rp. 100.000 - 500.000
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="priceRange"
            id="radioPrice5"
            value="500000-1000000"
            v-model="selectedRadioPrice"
            @change="onRadioPriceChange"
          />
          <label class="form-check-label" for="radioPrice5">
            Rp. 500.000 - 1.000.000
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="priceRange"
            id="radioPrice6"
            value="1000000-2000000"
            v-model="selectedRadioPrice"
            @change="onRadioPriceChange"
          />
          <label class="form-check-label" for="radioPrice6">
            Rp. 1.000.000 - 2.000.000
          </label>
        </div>
      </div>

      <!--  -->
      <!--  -->
      <!--  -->
      <!--  -->
      <!-- COLOR -->
      <div class="mb-3">
        <h6>Color</h6>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioColor1"
            value="default"
            v-model="selectedRadioColor"
            @change="onRadioColorChange"
          />
          <label class="form-check-label" for="radioColor1">default</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioColor2"
            value="black"
            v-model="selectedRadioColor"
            @change="onRadioColorChange"
          />
          <label class="form-check-label" for="radioColor2">Black</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioColor3"
            value="green"
            v-model="selectedRadioColor"
            @change="onRadioColorChange"
          />
          <label class="form-check-label" for="radioColor3">Green</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioColor4"
            value="blue"
            v-model="selectedRadioColor"
            @change="onRadioColorChange"
          />
          <label class="form-check-label" for="radioColor4">Blue</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioColor5"
            value="white"
            v-model="selectedRadioColor"
            @change="onRadioColorChange"
          />
          <label class="form-check-label" for="radioColor5">White</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioColor6"
            value="chocolate"
            v-model="selectedRadioColor"
            @change="onRadioColorChange"
          />
          <label class="form-check-label" for="radioColor6">Chocolate</label>
        </div>
      </div>

      <!--  -->
      <!--  -->
      <!-- TAGS -->
      <div>
        <h6>Tags</h6>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="tag2"
            value="T-shirt"
            v-model="selectedCheckboxTags"
            @change="onRadioCheckboxChange"
          />
          <label class="form-check-label" for="tag2">T-shirt</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="tag3"
            value="shoes"
            v-model="selectedCheckboxTags"
            @change="onRadioCheckboxChange"
          />
          <label class="form-check-label" for="tag3">Shoes</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="tag4"
            value="kemeja"
            v-model="selectedCheckboxTags"
            @change="onRadioCheckboxChange"
          />
          <label class="form-check-label" for="tag4">Kemeja</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="tag5"
            value="watch"
            v-model="selectedCheckboxTags"
            @change="onRadioCheckboxChange"
          />
          <label class="form-check-label" for="tag5">Watches</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="tag6"
            value="ransel"
            v-model="selectedCheckboxTags"
            @change="onRadioCheckboxChange"
          />
          <label class="form-check-label" for="tag6">Ransel</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.offcanvas {
  z-index: 9999;
}
</style>
