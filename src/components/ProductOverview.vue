<script setup>
// import { ref } from "vue";

// import { allProduct } from "@/utils/allProduct";

// const productsData = ref([...allProduct]);
</script>

<template>
  <div class="container">
    <h1 style="font-family: 'Courier New', Courier, monospace">
      Product Overview
    </h1>
  </div>

  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <div class="d-flex gap-2">
        <a href="#" class="text-decoration-none">All Products</a>
        <a href="#" class="text-decoration-none">Women</a>
        <a href="#" class="text-decoration-none">Men</a>
        <a href="#" class="text-decoration-none">Bag</a>
        <a href="#" class="text-decoration-none">Shoes</a>
        <a href="#" class="text-decoration-none">Watches</a>
      </div>

      <div class="d-flex">
        <form class="d-flex" role="search">
          <input
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
      <div class="mb-3">
        <h6>Price</h6>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault1"
          />
          <label class="form-check-label" for="radioDefault1"> default </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault1"
          />
          <label class="form-check-label" for="radioDefault1">
            Rp. 0 - 50.000
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault2"
            checked
          />
          <label class="form-check-label" for="radioDefault2">
            Rp. 50.000 - 100.000
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault2"
            checked
          />
          <label class="form-check-label" for="radioDefault2">
            Rp. 100.000 - 500.000
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault2"
            checked
          />
          <label class="form-check-label" for="radioDefault2">
            Rp. 500.000 - 1.000.000
          </label>
        </div>
      </div>

      <div class="mb-3">
        <h6>Color</h6>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault1"
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
          <label class="form-check-label" for="radioDefault1">Red</label>
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
          <label class="form-check-label" for="radioDefault2">Yellow</label>
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
