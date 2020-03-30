<template>
  <div class="container" v-show="isShow"></div>
</template>

<script>
export default {
  name: "mock",
  data() {
    return {
      
    }
  },
  props: ["isShow"]
}
</script>

<style scoped>
/* 移动端 */
@media screen and (max-width: 767px) {
  .container {
    position: fixed;
    top: 1rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4)
  }
}
</style>