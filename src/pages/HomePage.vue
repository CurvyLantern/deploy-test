<template>
  <div>
    <Splide
      :options="{
        direction: 'ttb',
        height: '100vh',
        arrows: false,
        wheel: true,
        wheelDelay: 20,
        waitForTransition: true,
      }"
    >
      <SplideSlide>
        <TestSlide />
      </SplideSlide>

      <SplideSlide>
        <TestSlide />
      </SplideSlide>

      <SplideSlide>
        <TestSlide />
      </SplideSlide>

      <SplideSlide>
        <TestSlide />
      </SplideSlide>

      <SplideSlide>
        <TestSlide />
      </SplideSlide>
    </Splide>

    <Navbar class="fixed top-0 left-0 w-full" />
  </div>
</template>

<script setup>
  import Navbar from "../components/Navbar.vue"
  import TestSlide from "../components/TestSlide.vue"

  import "@splidejs/vue-splide/css"
</script>

<style lang="scss" scoped></style>

<!-- {
  direction: 'ttb',
  height   : '10rem',
  wheel    : true,
} -->
