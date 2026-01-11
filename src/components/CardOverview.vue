<script setup>
import feather from "feather-icons";
import { onMounted } from "vue";

const props = defineProps({
  data: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  feather.replace(); // This function scans the DOM for elements with data-feather attributes
});
</script>

<template>
  <div class="pt-5 pt-md-2 d-flex justify-content-center flex-wrap gap-2">
    <div v-for="data in props.data" class="card" style="width: 18rem">
      <img
        :src="data.image"
        class="card-img-top w-100 h-100"
        style="object-fit: cover"
        alt="..."
      />
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

          <div style="cursor: pointer">
            <i data-feather="heart"></i>
          </div>
        </div>

        <h6 class="mt-1">Rp. {{ data.price }}</h6>
      </div>
    </div>
  </div>
</template>
