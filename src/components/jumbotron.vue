<script setup>
import { allProduct } from "@/utils/allProduct";
</script>

<template>
  <header class="container-fluid">
    <div id="carouselExampleFade" class="carousel slide h-100 carousel-fade">
      <div class="carousel-inner h-100">
        <div class="carousel-item h-100 active">
          <div class="row h-100">
            <div
              class="col-md-6 wrapper-text order-2 order-md-1 h-100 d-flex justify-content-center align-items-center flex-column text-center"
            >
              <h3>{{ allProduct[0].name }}</h3>
              <p>{{ allProduct[0].desc }}</p>
            </div>

            <div class="col-md-6 wrapper-img order-1 order-md-2 h-100">
              <img
                :src="allProduct[0].image"
                class="d-block h-100 w-100"
                alt="..."
                style="object-fit: cover; object-position: center center"
              />
            </div>
          </div>
        </div>
        <div class="carousel-item h-100">
          <div class="row h-100">
            <div
              class="col-md-6 wrapper-text order-2 order-md-1 h-100 d-flex justify-content-center align-items-center flex-column text-center"
            >
              <h3>{{ allProduct[1].name }}</h3>
              <p>{{ allProduct[1].desc }}</p>
            </div>

            <div class="col-md-6 wrapper-img order-1 order-md-2">
              <img
                :src="allProduct[1].image"
                class="d-block img-01 h-100 w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div class="carousel-item h-100">
          <div class="row h-100">
            <div
              class="col-md-6 wrapper-text order-2 order-md-1 h-100 d-flex justify-content-center align-items-center flex-column text-center"
            >
              <h3>{{ allProduct[2].name }}</h3>
              <p>{{ allProduct[2].desc }}</p>
            </div>

            <div class="col-md-6 wrapper-img order-1 order-md-2 h-100">
              <img
                :src="allProduct[2].image"
                class="d-block h-100 w-100"
                style="object-fit: cover; object-position: center 20px"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.container-fluid {
  height: 100vh;
  padding-top: 60px;

  & .img-01 {
    object-fit: cover;
    object-position: center -200px;
  }
}

@media screen and (max-width: 768px) {
  .container-fluid {
    height: auto;
    padding-top: 60px;

    & .wrapper-text {
      padding: 15px;
      background-color: rgba(0, 0, 0, 0.333);
      color: rgb(255, 255, 255);

      h3 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }
    }

    & .img-01 {
      object-fit: cover;
      object-position: center center;
    }
  }
}
</style>
