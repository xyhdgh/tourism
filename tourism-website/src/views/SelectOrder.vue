<template>
  <div class="container">
    <!-- 移动端 -->
    <div class="phone-container">
      <header>
        <div class="content">
          <div class="left">
            <i class="iconfont icon-youjiantou"></i>
          </div>
          <div class="middle">
            <input type="text" placeholder="请输入用户名查询订单" v-model="value" @keyup="writeUsername" />
          </div>
          <div class="close" v-show="!isShow" @click="deleteVal">
            <i class="iconfont icon-guanbi"></i>
          </div>
          <div :class="['right', isShow ? 'distance' : '']" @click="backOrder">取消</div>
        </div>
      </header>
      <div class="main">
        <div class="main-middle" v-if="isShow">
          <div class="main-mtop">
            <i class="iconfont icon-tip"></i>
          </div>
          <div class="desc">输入用户名找到对应订单</div>
        </div>
        <!-- 文本框 -->
        <div class="mock-content" v-else>
          <div class="mock-middle">
            <div class="left-icon">
              <i class="iconfont icon-sangedian"></i>
            </div>
            <div class="mock-right">点击搜索用户名:<span>{{value}}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "select_order",
  data() {
    return {
      isShow: true,
      value: ""
    };
  },
  methods: {
    backOrder() {
      this.$router.back()
    },
    writeUsername() {
      this.value === "" ? (this.isShow = true) : (this.isShow = false);
    },
    deleteVal() {
      this.value = "";
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style scoped>
/* 移动端*/
@media screen and (max-width: 768px) {
  .phone-container {
    width: 100vw;
    height: 100vh;
    font-size: 0.3rem;
  }
  header {
    height: 1rem;
    box-sizing: border-box;
    padding: 0.2rem;
  }
  .content {
    width: calc(100vw - 0.4rem);
    height: 0.6rem;
    display: flex;
    line-height: 0.6rem;
  }
  .left,
  .right {
    width: 0.6rem;
    height: 0.6rem;
    text-align: center;
  }
  .left {
    text-align: center;
    line-height: 0.6rem;
  }
  .left i {
    font-size: 0.55rem;
    color: #00bcd4;
  }
  .right {
    font-size: 0.25rem;
    color: #00bcd4;
  }
  .middle {
    width: calc(100vw - 2.2rem);
    height: 0.6rem;
  }
  .middle input {
    width: calc(100vw - 2.6rem);
    border: 0;
    margin: 0 0.2rem;
    outline: 0;
  }
  .main {
    height: calc(100vh - 1.02rem);
    border-top: 0.02rem solid #aeaeae;
  }
  .main-middle {
    height: calc(100vh - 3rem);
    margin-top: 2rem;
  }
  .main-mtop {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 auto;
    text-align: center;
    line-height: 2.5rem;
    color: #999;
  }
  .main-mtop i {
    font-size: 2rem;
  }
  .desc {
    text-align: center;
    color: #999;
  }
  .mock-content {
    width: 100vw;
    height: 1rem;
  }
  .mock-middle {
    padding: 0 0.2rem;
    height: 1rem;
    display: flex;
    border-bottom: .02rem solid #aeaeae;
  }
  .close {
    width: 0.6rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
  }
  .close i {
    font-size: 0.4rem;
    color: #CCCCCC;
  }
  .distance {
    margin-left: 0.6rem;
  }
  .left-icon {
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    margin-right: .1rem;
  }
  .left-icon i {
    font-size: .5rem;
    color: #3CC6D7;
  }
  .mock-right {
    flex-grow: 1;
    text-align: left;
    line-height: 1rem;
  }
  .mock-right span{
    color: #00bcd4;
  }
}
</style>