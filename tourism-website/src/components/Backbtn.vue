<template>
  <div class="back-btn">
    <i class="iconfont icon-right-angle-copy" @click="backHome"></i>
    <slot name="title"></slot>
    <slot name="reg"></slot>
  </div>
</template>

<script>
export default {
  name: "backbtn",
  data() {
    return {
      
    }
  },
  methods: {
    backHome() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
/* 移动端 */
@media screen and (max-width: 768px) {
  .back-btn {
    height: 1rem;
    position: relative;
    line-height: 1rem;
  }
  .back-btn i {
    font-size: 0.5rem;
    color: #fff;
    position: absolute;
    left: 0.2rem;
  }
}
</style>