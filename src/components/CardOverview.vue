<script setup>
import feather from "feather-icons";
import { onMounted, computed, ref, watch } from "vue";

import { useFavoriteStore } from "@/store/storeCart";

const store = useFavoriteStore();

const props = defineProps({
  data: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  feather.replace(); // This function scans the DOM for elements with data-feather attributes
});

watch(
  () => store.dataFavorite,
  (newVal) => {
    console.log("favorite berubah:", newVal);
  },
  { deep: true }
);
</script>

<template>
  <div
    class="wrapper pt-5 pt-md-2 d-flex justify-content-center flex-wrap gap-2"
  >
    <div v-for="data in props.data" class="card" style="width: 18rem">
      <div class="wrapper-img h-100 w-100">
        <img
          :src="data.image"
          class="img w-100 h-100"
          style="object-fit: cover"
          alt="..."
        />
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div>
            <a
              href="#"
              class="btn-sm text-decoration-none"
              style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
              >{{ data.name }}</a
            >
          </div>

          <div
            class="wishlistOffcanvas"
            style="cursor: pointer"
            @click="store.addToFavorite(data)"
          >
            <i data-feather="heart"></i>
          </div>
        </div>

        <h6 class="mt-1">Rp. {{ data.price }}</h6>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  .card {
    & .wrapper-img {
      overflow: hidden;
    }

    .img {
      transition: transform 0.3s ease;
    }

    &:hover {
      .img {
        transform: scale(1.1);
      }
    }

    & .wishlistOffcanvas {
      &:hover {
        svg {
          stroke: rgb(255, 0, 0);
        }
      }
    }
  }
}
</style>
