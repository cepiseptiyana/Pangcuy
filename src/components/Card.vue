<script setup>
const props = defineProps({
  data: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="card position-relative" style="width: 20rem">
    <div class="h-100">
      <img
        :src="props.data.image"
        style="height: 100%; object-fit: cover"
        class="img-fluid rounded-start w-100"
        alt="..."
      />

      <div class="wrapper-text position-absolute" style="top: 20px; left: 20px">
        <h5>{{ props.data.name }}</h5>
        <p>{{ props.data.desc }}</p>
        <a class="Link text-decoration-none fs-5" href="#">Shop Now</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  & .wrapper-text {
    & .Link {
      opacity: 0.1;
      transition: opacity 0.5s ease;
    }
  }

  &:hover {
    .wrapper-text {
      .Link {
        opacity: 1;
      }
    }
  }
}
</style>
