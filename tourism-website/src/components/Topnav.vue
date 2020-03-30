<template>
  <div class="container">
    <div class="clearfix navbar_right_container">
      <div class="navbar_left">让旅行更美好！</div>
      <div class="navbar_right">
        <ul class="clearfix">
          <li>
            <router-link to="/login">{{login}}</router-link>
            <span>|</span>
          </li>
          <li>
            <router-link to="/register">{{register}}</router-link>
            <span>|</span>
          </li>
          <li>
            <router-link to="/message">消息通知</router-link>
            <span>|</span>
          </li>
          <li class="check_order">
            <router-link to="/order" class="order">查看订单</router-link>
            <i
              class="iconfont icon-triangle-copy-copy-copy"
              @click="goOrder"
              @mouseover="showOrders"
              ref="icon"
            ></i>
            <div v-show="isShow" class="control-show-orders" @mouseleave="hideOrders">
              <a>酒店订单</a>
              <a>机票订单</a>
              <a>火车票订单</a>
              <a>门票订单</a>
              <a>团购订单</a>
              <a>度假订单</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="nav-list" ref="navlist" @click="showOnePageOrder">
        <i class="iconfont icon-toggle" ref="navicon"></i>
      </div>
      <div class="search" @click="showSearch" ref="inp">
        <i
          :class="['iconfont',isIcon?'icon-fangdajing':'icon-fangdajing-copy']"
          ref="magnifyingGlass"
        ></i>
      </div>
      <!-- 左侧菜单栏 -->
      <div class="left-order" ref="leftnav">
        <div class="order-container">
          <div class="left-one-order">
            <div class="order-title">
              <div>主菜单</div>
              <div @click="closeOrder">×</div>
            </div>
            <ul>
              <li>登录</li>
              <li>注册</li>
              <li>消息通知</li>
              <li class="clearfix">
                <span class="sel-order">查看订单</span>
                <i class="iconfont icon-triangle-copy-copy-copy" @click="goTwoOrder"></i>
              </li>
            </ul>
          </div>
          <div class="left-two-order" ref="twoorder">
            <div class="order-two-title">
              <div>
                <i class="iconfont icon-triangle-copy-copy-copy" @click="goBackOneOrder"></i>
              </div>
              <div>订单</div>
              <div @click="closeOrder">×</div>
            </div>
            <ul>
              <li>酒店订单</li>
              <li>机票订单</li>
              <li>火车票订单</li>
              <li>门票订单</li>
              <li>团购订单</li>
              <li>度假订单</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 平板搜索框 -->
    <div
      class="dynamic-search-box"
      ref="searchbox"
      v-show="showS"
    >
      <Inputfield />
      <div class="closeP" @click="closeDyn">×</div>
    </div>
  </div>
</template>
<script>
import Inputfield from "./Inputfield.vue";

export default {
  name: "topnav",
  components: {
    Inputfield
  },
  data() {
    return {
      login: "登录",
      register: "注册",
      isShow: false,
      showS: false,
      isIcon: true
    };
  },
  methods: {
    goOrder() {
      this.$router.push("/order");
    },
    showOrders() {
      this.isShow = true;
      this.$refs.icon.style.transform = "rotate(180deg)";
    },
    hideOrders() {
      this.isShow = false;
      this.$refs.icon.style.transform = "rotate(0deg)";
    },
    showOnePageOrder() {
      let timer = null;
      if (this.$refs.navicon.classList == "iconfont icon-toggle") {
        this.$refs.navicon.classList.remove("icon-toggle");
        this.$refs.navicon.classList.add("icon-toggle-copy");
        if (
          this.$refs.leftnav.offsetLeft >= -320 &&
          this.$refs.leftnav.offsetLeft < 0
        ) {
          timer = setInterval(() => {
            this.$refs.leftnav.style.left =
              this.$refs.leftnav.offsetLeft + 20 + "px";
            if (this.$refs.leftnav.offsetLeft >= 0) {
              clearInterval(timer);
            }
          }, 16.6);
        }
      } else {
        this.$refs.navicon.classList.remove("icon-toggle-copy");
        this.$refs.navicon.classList.add("icon-toggle");
        if (
          this.$refs.leftnav.offsetLeft > -320 &&
          this.$refs.leftnav.offsetLeft <= 0
        ) {
          timer = setInterval(() => {
            this.$refs.leftnav.style.left =
              this.$refs.leftnav.offsetLeft - 20 + "px";
            if (this.$refs.leftnav.offsetLeft <= -320) {
              clearInterval(timer);
            }
          }, 16.6);
        }
      }
    },
    closeOrder() {
      let timer = null;
      this.$refs.navicon.classList.remove("icon-toggle-copy");
      this.$refs.navicon.classList.add("icon-toggle");
      if (
        this.$refs.leftnav.offsetLeft > -320 &&
        this.$refs.leftnav.offsetLeft <= 0
      ) {
        timer = setInterval(() => {
          this.$refs.leftnav.style.left =
            this.$refs.leftnav.offsetLeft - 20 + "px";
          if (this.$refs.leftnav.offsetLeft <= -320) {
            clearInterval(timer);
          }
        }, 16.6);
      }
    },
    goTwoOrder() {
      this.$refs.twoorder.style.position = "absolute";
    },
    goBackOneOrder() {
      this.$refs.twoorder.style.position = "relative";
    },
    showSearch() {
      this.showS = true;
      this.isIcon = false;
      this.$refs.searchbox.width = this.getWidth() + "px";
    },
    getWidth() {
      let clientWidth = document.body.clientWidth;
      // this.$refs.searchbox.style.width = clientWidth + "px";
      // this.$refs.searchbox.style.left = 0;
      return clientWidth;
    },
    closeDyn() {
      this.showS = false;
      this.isIcon = true;
    }
  },
  mounted() {
    window.onresize = () => {
      this.getWidth();
    };
  }
};
</script>
<style scoped>
/* 动画 */
* {
  margin: 0;
  padding: 0;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.container {
  position: relative;
}
a {
  text-decoration: none;
  padding: 0 5px;
  color: #2c3e50;
  font-size: 15px;
}
a:hover {
  color: #ff6700;
}
.navbar_right_container {
  padding: 10px 0;
  background: linear-gradient(to right, #13e09e,#8cf593);
  position: relative;
  z-index: 10;
}
/* 屏幕宽度最小为992px PC端*/
@media screen and (min-width: 992px) {
  .navbar_right_container span,.navbar_right_container i::before {
    color: #fff;
  }
  .navbar_right_container i:hover::before {
    color: #ff6700;
  }
  ul li {
    float: left;
    list-style: none;
    font-size: 15px;
  }
  .navbar_left {
    float: left;
    font-size: 15px;
    color: #2c3e50;
    padding-left: 2%;
    color: #fff;
  }
  .navbar_right {
    float: right;
    padding-right: 50px;
  }
  .navbar_right a {
    color: #fff;
  }
  .navbar_right a:hover {
    color: #ff6700;
  }
  .nav-list {
    display: none;
  }
  .order {
    padding: 0 0 0 5px;
  }
  .check_order i {
    display: inline-block;
    color: #000;
    transition: all 0.5s ease;
  }
  .check_order i:hover {
    color: #ff6700;
    cursor: pointer;
  }
  .control-show-orders {
    width: 80px;
    border: 1px solid #d3d3d3;
    position: absolute;
    right: 1px;
    top: 30px;
    background-color: #fff;
  }
  .control-show-orders a {
    display: block;
    width: 80px;
    text-align: center;
    padding: 1px;
  }
  .control-show-orders a:hover {
    color: #fff;
    background-color: #00bcd4;
  }
  .check_order {
    position: relative;
  }
  .left-order {
    display: none;
  }
  .dynamic-search-box {
    display: none;
  }
  .search {
    display: none;
  }
  .control-show-orders a {
    color: #000;
  }
}
/* 屏幕宽度最大为992px 平板*/
@media screen and (max-width: 991px) {
  .container {
    height: 40px;
  }
  .navbar_right {
    display: none;
  }
  .nav-list {
    display: block;
    float: right;
    margin-right: 20px;
    border-radius: 5px;
    box-sizing: border-box;
    position: relative;
  }
  .navbar_left {
    font-size: 15px;
    float: left;
    color: #fff;
    padding-left: 2%;
  }
  .nav-list i::before {
    font-size: 20px;
    cursor: pointer;
    border-radius: 3px;
    color: #fff;
  }
  .nav-list i:hover::before {
    color: #ff6700;
  }
  .icon-toggle-copy::before {
    color: rgb(221, 109, 44);
  }
  .left-one-order {
    width: 100%;
    height: 100vh;
  }
  .left-order {
    position: fixed;
    width: 320px;
    height: 100vh;
    background: linear-gradient(#13e09e, #8cf593);
    top: 0;
    left: -320px;
    color: #fff;
    z-index: 30;
  }
  .order-title {
    width: 100%;
    height: 50px;
    display: flex;
  }
  .order-title div:first-child {
    width: 220px;
    line-height: 50px;
    text-align: center;
    padding-left: 50px;
    font-size: 20px;
  }
  .order-title div:last-child {
    width: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
  }
  .left-order ul {
    box-sizing: border-box;
  }
  .left-order ul li {
    list-style: none;
    height: 50px;
    padding: 0 20px;
    line-height: 50px;
    font-size: 18px;
    cursor: pointer;
  }
  .left-order li i {
    float: right;
    display: inline-block;
    transform: rotate(-90deg);
    font-size: 22px;
  }
  .sel-order {
    float: left;
  }
  .left-order ul li:hover {
    box-shadow: 1px 1px 10px #8cf593;
    font-size: 20px;
  }
  .left-order ul li:hover > i {
    font-size: 26px;
  }
  .order-container {
    overflow: hidden;
    display: flex;
  }
  .search {
    display: block;
    float: right;
    margin-right: 20px;
    border-radius: 5px;
    box-sizing: border-box;
    position: relative;
  }
  .search i::before {
    font-size: 20px;
    cursor: pointer;
    border-radius: 3px;
    font-weight: bolder;
    color: #fff;
  }
  .search i:hover::before {
    color: rgb(221, 109, 44);
  }
  /* 二级菜单 */
  .left-two-order {
    width: 320px;
    height: 100vh;
    background: linear-gradient(yellowgreen, rgba(228, 228, 93, 0.904));
    color: #fff;
    z-index: 31;
  }
  .left-two-order li:hover {
    box-shadow: 1px 1px 10px rgba(228, 228, 93, 0.904) !important;
  }
  .order-two-title {
    width: 100%;
    height: 50px;
    display: flex;
  }
  .order-two-title div:first-child {
    width: 50px;
    height: 50px;
    position: relative;
  }
  .order-two-title div:nth-child(2) {
    width: 220px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
  }
  .order-two-title div:last-child {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
  }
  .order-two-title div:first-child i {
    display: inline-block;
    font-size: 22px;
    line-height: 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    cursor: pointer;
  }
  /* 动态输入框 */
  .dynamic-search-box {
    margin-top: 10px;
    height: 150px;
    position: relative;
    background-color: #fff;
    box-shadow: 1px 1px 10px #999;
    z-index: 10;
  }
  .dynamic-search-box .closeP {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.3);
  }
  .dynamic-search-box .closeP:hover {
    color: rgba(0, 0, 0, 0.6);
  }
}
/* 移动端 */
@media screen and (max-width: 767px) {
  .container {
    display: none;
  }
}
</style>