<template>
  <div class="container">
    <header>
      <Backbtn></Backbtn>
    </header>
    <div class="content">
      <img src="../assets/images/willcome.jpg" alt="img">
    </div>
  </div>
</template>
<script>
import Backbtn from '../components/Backbtn.vue'
export default {
  name: "morefunc",
  components: {
    Backbtn
  }
}
</script>
<style scoped>
/* 移动端 */
@media screen and (max-width: 768px) {
  .container {
    width: 100vw;
    height: 100vh;
    font-size: .3rem;
  }
  header {
    width: 100vw;
    height: 1rem;
    background: #18a9b9;
  }
  .content {
    height: calc(100vh - 4rem);
    margin-top: 3rem; 
    text-align: center;
  }
  .content img {
    width: 80%;
  }
}
</style>