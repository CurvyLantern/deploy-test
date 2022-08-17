<template>
  <div class="flex items-center justify-between px-3 py-2">
    <div>
      <img
        width="100"
        height="100"
        src="https://cdn.shopify.com/static/sample-images/garnished.jpeg?width=100&height=100"
        alt="Logo"
      />
    </div>

    <ul class="flex gap-5">
      <li
        v-for="item of list"
        :key="item"
        class="px-3 py-2 border-2 rounded-md cursor-pointer relative hover:text-white"
      >
        <router-link :to="item.path"> {{ item.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const list = [
    {
      text: "Work",
      path: "work",
    },
    {
      text: "Agency",
      path: "agency",
    },
    {
      text: "Outcomes",
      path: "outcomes",
    },
    {
      text: "Contact",
      path: "contact",
    },
  ]
</script>

<style scoped>
  .nav__item::after {
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    left: 0;
    transform-origin: bottom center;
    @apply bg-slate-500 w-full h-full scale-y-0 transition-all;
  }

  .nav__item:hover::after {
    @apply scale-y-100;
  }
</style>
