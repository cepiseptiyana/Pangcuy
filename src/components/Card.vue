<script setup>
const props = defineProps({
  data: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="card" style="max-width: 400px; height: 170px">
    <div class="row g-0 h-100">
      <div class="col col-md-4 h-100">
        <img
          :src="props.data.image"
          style="height: 100%; object-fit: cover"
          class="img-fluid rounded-start w-100"
          alt="..."
        />
      </div>
      <div class="col col-md-8 h-100 position-relative">
        <div class="card-body">
          <h5 class="card-title h6">{{ props.data.name }}</h5>
          <p
            class="card-text"
            style="
              font-size: 15px;
              font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
            "
          >
            {{ props.data.desc }}
          </p>
          <a
            href="#"
            class="btn btn-primary btn-sm position-absolute"
            style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
            >Shop Now</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
