<template>
  <div class="container">
    <!-- 移动端 -->
    <div class="phone-container">
      <header>
        <Backbtn>
          <slot slot="title">火车</slot>
        </Backbtn>
      </header>
      <div class="aside-content">
        <div class="bc"></div>
        <ServiceForm></ServiceForm>
      </div>
    </div>
  </div>
</template>
<script>
import Backbtn from '../components/Backbtn.vue'
import ServiceForm from '../components/ServiceForm.vue'

export default {
  name: "airticket",
  components: {
    Backbtn,
    ServiceForm
  },
  data() {
    return {

    }
  }
}
</script>
<style scoped>
/* 移动端 */
@media screen and (max-width: 768px){
  .container, .phone-container {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    font-size: .3rem;
  }
  header {
    width: 100vw;
    height: 1rem;
    background: linear-gradient(90deg,#00c9e2 3%,#00e4f5 92%);
    color: #fff;
    text-align: center;
  }
  .aside-content {
    width: 100vw;
    box-sizing: border-box;
    padding: 0 .2rem;
    position: relative;
  }
  .aside-content .bc {
    width: 100vw;
    height: 2.2rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    background: linear-gradient(90deg,#00c9e2 3%,#00e4f5 92%);
  }
}
</style>