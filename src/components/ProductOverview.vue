<script setup>
import { ref } from "vue";

const emit = defineEmits(["update-search", "selected-radio"]);

const searchValue = ref("");
const selected = ref("default");

const onInput = () => {
  emit("update-search", searchValue.value);
};

const onRadioChange = () => {
  emit("selected-radio", selected.value);
};
</script>

<template>
  <div class="container">
    <h1 style="font-family: serif">Product Overview</h1>
  </div>

  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <div class="d-flex gap-2">
        <a href="#" class="text-decoration-none text-secondary fs-6"
          >All Products</a
        >
        <a href="#" class="text-decoration-none text-secondary fs-6">Women</a>
        <a href="#" class="text-decoration-none text-secondary fs-6">Men</a>
        <a href="#" class="text-decoration-none text-secondary fs-6">Bag</a>
        <a href="#" class="text-decoration-none text-secondary fs-6">Shoes</a>
        <a href="#" class="text-decoration-none text-secondary fs-6">Watches</a>
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
            id="radioDefault1"
            value="default"
            v-model="selected"
            @change="onRadioChange"
          />
          <label class="form-check-label" for="radioDefault1"> default </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="priceRange"
            id="radioDefault2"
            value="0-50000"
            v-model="selected"
            @change="onRadioChange"
          />
          <label class="form-check-label" for="radioDefault2">
            Rp. 0 - 50.000
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="priceRange"
            id="radioDefault3"
            value="50000-100000"
            v-model="selected"
            @change="onRadioChange"
          />
          <label class="form-check-label" for="radioDefault3">
            Rp. 50.000 - 100.000
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="priceRange"
            id="radioDefault4"
            value="100000-500000"
            v-model="selected"
            @change="onRadioChange"
          />
          <label class="form-check-label" for="radioDefault4">
            Rp. 100.000 - 500.000
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="priceRange"
            id="radioDefault5"
            value="500000-1000000"
            v-model="selected"
            @change="onRadioChange"
          />
          <label class="form-check-label" for="radioDefault5">
            Rp. 500.000 - 1.000.000
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="priceRange"
            id="radioDefault5"
            value="1000000-2000000"
            v-model="selected"
            @change="onRadioChange"
          />
          <label class="form-check-label" for="radioDefault5">
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
            id="radioDefault1"
            actived
          />
          <label class="form-check-label" for="radioDefault1">default</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault1"
          />
          <label class="form-check-label" for="radioDefault1">Black</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault2"
            checked
          />
          <label class="form-check-label" for="radioDefault2">Green</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault2"
            checked
          />
          <label class="form-check-label" for="radioDefault2">Blue</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault2"
            checked
          />
          <label class="form-check-label" for="radioDefault2">White</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault2"
            checked
          />
          <label class="form-check-label" for="radioDefault2">Chocolate</label>
        </div>
      </div>
      <div>
        <h6>Tags</h6>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkDefault"
            checked
          />
          <label class="form-check-label" for="checkDefault">
            Default checkbox
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkChecked"
          />
          <label class="form-check-label" for="checkChecked">T-shirt</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkChecked"
          />
          <label class="form-check-label" for="checkChecked">Accessories</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkChecked"
          />
          <label class="form-check-label" for="checkChecked">Watches</label>
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
