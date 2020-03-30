<template>
  <div class="container">
    <!-- 移动端 -->
    <div class="phone-container">
      <header>
        <Backbtn>
          <span slot="title" class="login">登录</span>
          <span slot="reg" class="reg" @click="goReg">注册</span>
        </Backbtn>
      </header>
      <LoginorRegForm></LoginorRegForm>
    </div>
  </div>
</template>
<script>
import Backbtn from "../components/Backbtn.vue";
import LoginorRegForm from '../components/LoginorRegForm.vue'

export default {
  name: "login",
  components: {
    Backbtn,
    LoginorRegForm
  },
  data() {
    return {
      
    };
  },
  methods: {
    goReg() {
      this.$router.push({
        name: "register"
      });
    },
  }
};
</script>
<style scoped>
/* 移动端 */
@media screen and (max-width: 768px) {
  .container,
  .phone-container {
    width: 100vw;
    height: 100vh;
    font-size: 0.5rem;
  }
  .phone-container header {
    height: 1rem;
    background: #18a9b9;
    font-size: 0.3rem;
    color: #fff;
  }
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .reg {
    position: absolute;
    right: 0.2rem;
    top: 50%;
    transform: translateY(-50%);
    color: #75ffff;
  }
  
}
</style>