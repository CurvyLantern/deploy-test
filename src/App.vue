<template>
  <Transition @enter="enterFn" @leave="leaveFn" mode="out-in" :css="false">
    <router-view></router-view>
  </Transition>
</template>

<script setup>
  const enterFn = (el, done) => {
    console.log("component has entered")
    done()
  }

  const leaveFn = (el, done) => {
    console.log("component has left")
    done()
  }
</script>

<style lang="scss" scoped></style>
